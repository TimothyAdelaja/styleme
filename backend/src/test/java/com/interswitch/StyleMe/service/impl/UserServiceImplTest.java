package com.interswitch.StyleMe.service.impl;

import com.interswitch.StyleMe.dto.UserDto;
import com.interswitch.StyleMe.dto.requests.CreateAccountRequest;
import com.interswitch.StyleMe.enums.RoleType;
import com.interswitch.StyleMe.exceptions.StyleMeException;
import com.interswitch.StyleMe.model.User;
import com.interswitch.StyleMe.model.VerificationCode;
import com.interswitch.StyleMe.repository.UserRepository;
import com.interswitch.StyleMe.repository.VerificationCodeRepository;
import com.interswitch.StyleMe.util.EmailMessageSender;
import com.interswitch.StyleMe.util.VerificationCodeUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;

@SpringBootTest
public class UserServiceImplTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Mock
    private EmailMessageSender messageSender;

    @Mock
    private VerificationCodeUtil verificationCodeUtil;

    @Mock
    private VerificationCodeRepository verificationCodeRepository;

    @InjectMocks
    private UserServiceImpl userService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCreateUserAccount() throws StyleMeException {
        // Arrange
        CreateAccountRequest request = new CreateAccountRequest();
        request.setEmail("test@example.com");
        request.setFirstName("John");
        request.setLastName("Doe");
        request.setPassword("password");

        User savedUser = new User();
        savedUser.setEmail(request.getEmail());
        savedUser.setFirstName(request.getFirstName());
        savedUser.setLastName(request.getLastName());
        savedUser.setPassword("encodedPassword");
        savedUser.setRoles(RoleType.ROLE_USER);

        int verificationCode = 12345;

        VerificationCode savedVerificationCode = new VerificationCode();
        savedVerificationCode.setCode(verificationCode);
        savedVerificationCode.setExpiredTime(LocalDateTime.now().plusSeconds(300));

        when(userRepository.save(any())).thenReturn(savedUser);
        when(bCryptPasswordEncoder.encode(request.getPassword())).thenReturn("encodedPassword");
        when(verificationCodeUtil.generateCode()).thenReturn(verificationCode);
        when(verificationCodeRepository.save(any())).thenReturn(savedVerificationCode);

        // Act
        UserDto result = userService.createUserAccount(request);

        // Assert
        assertEquals(request.getEmail(), result.getEmail());
        assertEquals(request.getFirstName(), result.getFirstName());
        assertEquals(request.getLastName(), result.getLastName());
        // Additional assertions can be added for other fields
    }

    @Test
    public void testCreateUserAccountUserExists() {
        // Arrange
        CreateAccountRequest request = new CreateAccountRequest();
        request.setEmail("test@example.com");

        // Mock the userRepository to return an Optional containing an existing user
        when(userRepository.findUserByEmail(request.getEmail()))
                .thenReturn(Optional.of(new User()));

        // Act and Assert
        assertThrows(StyleMeException.class, () -> userService.createUserAccount(request));
    }

    @Test
    void findUserByEmail() {
    }

    @Test
    void resendVerificationToken() {
    }

    @Test
    void processOauthLoginRequest() {
    }

    @Test
    void loadUserByUsername() {
    }

    @Test
    void changePassword() {
    }
}