package com.interswitch.StyleMe.controller;

import com.interswitch.StyleMe.config.GoogleDriveManager;
import com.interswitch.StyleMe.dto.UserClothingDTO;
import com.interswitch.StyleMe.dto.responses.OutfitResponseDto;
import com.interswitch.StyleMe.enums.RoleType;
import com.interswitch.StyleMe.exceptions.StyleMeException;
import com.interswitch.StyleMe.model.ClothingItem;
import com.interswitch.StyleMe.model.User;
import com.interswitch.StyleMe.repository.ClothingItemRepository;
import com.interswitch.StyleMe.repository.UserRepository;
import com.interswitch.StyleMe.service.OutfitService;
import com.interswitch.StyleMe.service.impl.OutfitServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.isA;
import static org.mockito.Mockito.*;

class ClothingItemControllerTest {

    private final UserRepository userRepository = mock(UserRepository.class);
    private final GoogleDriveManager googleDriveManager = mock(GoogleDriveManager.class);
    private final ClothingItemRepository clothingItemRepository = mock(ClothingItemRepository.class);
    private final WebClient webClient = mock(WebClient.class);
    private final OutfitService outfitService = new OutfitServiceImpl(userRepository, googleDriveManager, clothingItemRepository, webClient);
    private final ClothingItemController clothingItemController = new ClothingItemController(outfitService);

    private Authentication authentication;

    private User user;

    private ClothingItem clothingItem;
    UserDetails userDetails = new UserDetails() {
        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return Collections.singletonList(new SimpleGrantedAuthority(RoleType.ROLE_USER.name()));
        }

        @Override
        public String getPassword() {
            return null;
        }

        @Override
        public String getUsername() {
            return "test@yahoo.com";
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    };

    @BeforeEach
    public void setUp() {
        authentication = mock(Authentication.class);
        when(authentication.getPrincipal()).thenReturn(userDetails);

        SecurityContext securityContext = mock(SecurityContext.class);
        SecurityContextHolder.setContext(securityContext);
        when(securityContext.getAuthentication()).thenReturn(authentication);

        ClothingItem clothingItem = new ClothingItem();
        clothingItem.setId("1");
        this.clothingItem = clothingItem;

        User user = new User();
        user.setId("1");
        user.setEmail("test@yahoo.com");
        this.user = user;

    }

    @Test
    void uploadOutfit() throws StyleMeException {
        when(userRepository.findUserByEmail(anyString())).thenReturn(Optional.of(new User()));
        when(googleDriveManager.uploadFile(isA(MultipartFile.class))).thenReturn("dotcome");
        when(clothingItemRepository.save(isA(ClothingItem.class))).thenReturn(new ClothingItem());
        MockMultipartFile file = new MockMultipartFile("file", "test.txt", "text/plain", "Hello, World!".getBytes());

        ResponseEntity<?> responseEntity = clothingItemController.uploadOutfit(file, "Dress", Collections.singletonList("Work"));
        String fileId = (String) responseEntity.getBody();
        assertEquals("dotcome", fileId);
    }

    @Test
    void deleteOutfit() throws Exception {
        when(userRepository.findUserByEmail(anyString())).thenReturn(Optional.of(new User()));
        doNothing().when(googleDriveManager).deleteFile(anyString());
        when(clothingItemRepository.findByUserAndDriveId(isA(User.class), anyString())).thenReturn(Optional.of(clothingItem));
        doNothing().when(clothingItemRepository).delete(clothingItem);
        clothingItemController.deleteOutfit("1");
        verify(clothingItemRepository, times(1)).delete(isA(ClothingItem.class));
    }

    @Test
    void getOutfitsByEvent() throws StyleMeException {
        when(userRepository.findUserByEmail(anyString())).thenReturn(Optional.of(new User()));
        when(clothingItemRepository.findByUserAndEventIn(isA(User.class), anyString())).thenReturn(Collections.singletonList(clothingItem));
        ResponseEntity<?> responseEntity = clothingItemController.getOutfitsByEvent("party");
        List<OutfitResponseDto> outfitResponseDtos = (List<OutfitResponseDto>) responseEntity.getBody();
        assertEquals(1, outfitResponseDtos.size());

    }

    @Test
    void recommendOutfit() {
        when(userRepository.findUserByEmail(anyString())).thenReturn(Optional.of(new User()));
        when(clothingItemRepository.findByUserAndEventIn(isA(User.class), anyString())).thenReturn(Collections.nCopies(5, clothingItem));
    }

    @Test
    void updateCloth() throws StyleMeException {
        when(clothingItemRepository.findById(anyString())).thenReturn(Optional.of(clothingItem));
        when(clothingItemRepository.save(isA(ClothingItem.class))).thenReturn(clothingItem);
        clothingItemController.updateCloth("1");
        verify(clothingItemRepository, times(1)).save(isA(ClothingItem.class));
    }

    @Test
    void getClothsForSale() {
        clothingItem.setForSale(true);
        clothingItem.setUser(user);

        when(clothingItemRepository.findByForSaleIsTrue()).thenReturn(Collections.nCopies(5, clothingItem));

        ResponseEntity<?> responseEntity = clothingItemController.getClothsForSale();
        List<UserClothingDTO> userClothingDTOList = (List<UserClothingDTO>) responseEntity.getBody();
        UserClothingDTO userClothingDTO = userClothingDTOList.get(0);
        assertEquals(1, userClothingDTOList.size());
        assertEquals(5, userClothingDTO.getClothingItemsForSale().size());
    }
}