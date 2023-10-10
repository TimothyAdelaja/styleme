import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import config from "../../../config"

import {
  Logo,
  searchIcon,
  arrowRight,
  settingsIcon,
  alertIcon,
  profileImg,
  dashboardIcon,
  dashboardWhite,
  wardrobeIcon,
  wardrobeWhite,
  marketIcon,
  marketWhite,
  plusIcon,
} from "../../assets/icons"
import {
  Workwear,
  Partywear,
  Sundaywear,
  Nativewear,
  Downwardarrow,
} from "../../assets/dashboardImages"
import {
  femaleDress1,
  femaleDress2,
  femaleDress3,
  maleDress1,
  maleDress2,
  maleDress3,
} from "../../assets/img"
import axios from "axios"
import {
  getOutfits,
  getOutfitsForSale,
  getServicesByRadius,
} from "../../services/actions/dashboard-actions"
import { set } from "react-hook-form"

const users = [
  {
    id: 1,
    name: "Halimat",
    image: [femaleDress1, femaleDress2, femaleDress3],
  },

  {
    id: 2,
    name: "Johnson",
    image: [maleDress1, maleDress2, maleDress3],
  },
]

const radiusOptions = ["Very Near", "Near", "Far", "Very Far"]

const Wardrobe = () => {
  const [tab, setTab] = useState("wardrobe")
  const [images, setImages] = useState([])
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null)
  const [outfits, setOufits] = useState([])
  const [outfitsForSale, setOutfitsForSale] = useState([])
  const [services, setServices] = useState([])
  const [radius, setRadius] = useState(500)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchOutfits = async () => {
      try {
        const response = await getOutfitsForSale()
        console.log(response)
        if (response.status === 200) {
          setOutfitsForSale(response.data)
          setIsLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchOutfits()
  }, [])

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getServicesByRadius(radius)
        //console.log(response)
        if (response.status === 200) {
          setServices(response.data)
          setIsLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchServices()
  }, [radius])

  //console.log(services)

  const handleTabClick = async (tabName) => {
    setIsLoading(true)
    try {
      const response = await getOutfits(tabName)
      //console.log(response)
      if (response.status === 200) {
        setIsLoading(false)
        setOufits(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleRadiusChange = (event) => {
    switch (event.target.value) {
      case "Very Near":
        setRadius(500)
        break
      case "Near":
        setRadius(1000)
        break
      case "Far":
        setRadius(1500)
        break
      case "Very Far":
        setRadius(2000)
        break
      default:
        setRadius(500)
    }
  }

  const handleFileUpload = (event) => {
    const selectedImage = event.target.files
    const selectedImageArray = Array.from(selectedImage)
    const formData = new FormData()

    const imageArray = selectedImageArray.map((image) => {
      const uploadEndpoint = config.REACT_APP_UPLOAD_URL

      formData.append("image", image)

      fetch(uploadEndpoint, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Images uploaded successfully:", data)
        })
        .catch((error) => {
          console.error("Error uploading images:", error)
        })
      return URL.createObjectURL(image)
    })

    setImages((previousImages) => previousImages.concat(imageArray))

    console.log("Selected file:", selectedImage)
  }

  const handleToggleDropdown = (index) => {
    setOpenDropdownIndex(index === openDropdownIndex ? null : index)
  }

  const handleImageDelete = async (index) => {
    try {
      const deleteResponse = await fetch(
        `${config.REACT_APP_DELETE_URL}/${index}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (deleteResponse.ok) {
        console.log("Image deleted successfully in the backend.")

        const updatedImages = images.filter((image, i) => i !== index)
        setImages(updatedImages)
      } else {
        console.error(
          "Error deleting image in the backend:",
          deleteResponse.statusText
        )
      }
    } catch (error) {
      console.error("Error deleting image:", error)
    }
  }

  const handleSell = (index) => {
    const imageToSell = images[index]

    exportToMarketplace(imageToSell)
      .then((uploadResponse) => {
        const imageUrlInMarketplace = uploadResponse.imageUrl

        window.location.href = `/marketplace?url=${imageUrlInMarketplace}`

        const updatedImages = images.filter((_, i) => i !== index)
        setImages(updatedImages)
      })
      .catch((error) => {
        console.error("Error uploading image to the marketplace:", error)
      })
    const updatedImages = images.filter((_, i) => i !== index)
    setTab("marketplace")

    setImages(updatedImages)
  }

  const exportToMarketplace = async (image) => {
    const uploadEndpoint = config.REACT_APP_MARKET_URL

    const formData = new FormData()
    formData.append("image", image)

    return fetch(uploadEndpoint, {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Failed to upload image to the marketplace")
      }
      return response.json()
    })
  }

  const handleGenerate = async () => {
    try {
      const response = await fetch(`${config.REACT_APP_GENERATE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      })

      if (!response.ok) {
        throw new Error("Error generating match")
      }

      const matchData = await response.json()

      console.log("Generated match:", matchData)
    } catch (error) {
      console.error("Error generating match:", error)
    }
  }

  return (
    <div className="w-full h-full bg-[#F2F5FE]">
      {/* HEADER */}
      <div className="fixed z-10 flex items-center justify-between w-full h-20 px-6 bg-white shadow-md">
        <div className="flex items-center gap-4 bg-[#14213D] text-white p-3">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-[60px] h-[40px]" />
          </Link>
          <h2 className="text-2xl font-semibold">StyleMe</h2>
        </div>
        <div className="flex px-4 rounded-lg items-center gap-3 bg-[#E1E6EF] w-[500px]">
          <img src={searchIcon} alt="search" className="cursor-pointer" />
          <input
            type="search"
            className="w-[90%] h-[40px] bg-[#E1E6EF] border-none outline-none"
            placeholder="What are you looking for?"
          />
          <img src={arrowRight} alt="arrow-btn" className="cursor-pointer" />
        </div>
        <div className="flex items-center gap-6">
          <img
            src={settingsIcon}
            alt="settings-icon"
            className="cursor-pointer"
          />
          <img src={alertIcon} alt="alert-icon" className="cursor-pointer" />
          <div className="flex items-center gap-2">
            <img
              src={profileImg}
              alt="profile-img"
              className="rounded-[50%] h-[40px] w-[40px] cursor-pointer"
            />
            <p className="w-32 font-semibold text-center text-md">
              Welcome back!
            </p>
          </div>
        </div>
      </div>
      {/* TAB CONTAINER */}
      <div className="h-auto w-[1000px] mx-auto py-28 text-[#14213D]">
        <h1 className="mb-6 text-4xl font-bold">Quick actions</h1>
        {/* TABS */}
        <div className="flex gap-4 w-full items-center justify-between bg-[white] rounded-lg p-3">
          <div
            onClick={() => setTab("wardrobe")}
            className={
              tab === "wardrobe"
                ? "flex  justify-between gap-3 items-center px-20 py-2 rounded-md cursor-pointer bg-[#14213D] text-white"
                : "flex  justify-between gap-3 items-center border border-[#14213D] px-20 py-2 rounded-md cursor-pointer"
            }
          >
            {tab === "wardrobe" ? (
              <img src={dashboardWhite} alt="wardrobe" />
            ) : (
              <img src={dashboardIcon} alt="wardrobe" />
            )}
            <p className="text-lg font-semibold">Wardrobe</p>
          </div>
          <div
            onClick={() => setTab("marketplace")}
            className={
              tab === "marketplace"
                ? "flex  justify-between gap-3 items-center px-20 py-2 rounded-md cursor-pointer bg-[#14213D] text-white"
                : "flex  justify-between gap-3 items-center border border-[#14213D] px-20 py-2 rounded-md cursor-pointer"
            }
          >
            {tab === "marketplace" ? (
              <img src={wardrobeWhite} alt="marketplace" />
            ) : (
              <img src={wardrobeIcon} alt="marketplace" />
            )}
            <p className="text-lg font-semibold">Marketplace</p>
          </div>
          <div
            onClick={() => setTab("services")}
            className={
              tab === "services"
                ? "flex  justify-between gap-3 items-center px-20 py-2 rounded-md cursor-pointer bg-[#14213D] text-white"
                : "flex  justify-between gap-3 items-center border border-[#14213D] px-20 py-2 rounded-md cursor-pointer"
            }
          >
            {tab === "services" ? (
              <img src={marketWhite} alt="services" />
            ) : (
              <img src={marketIcon} alt="services" />
            )}
            <p className="text-lg font-semibold">Services</p>
          </div>
        </div>
        {/* PAGE CONTENT */}
        {tab === "wardrobe" && (
          <div className="flex flex-col">
            <div className="text-zinc-900 text-opacity-90 text-2xl font-bold font-['Manrope'] leading-9">
              Categories
            </div>

            <div className="flex flex-col w-[900px] gap-6 rounded-xl border border-solid justify-start items-center">
              <div className="flex gap-4">
                <div className="flex flex-col mb-6">
                  <a
                    onClick={() => handleTabClick("Work")}
                    className="flex flex-col items-center gap-1 cursor-pointer work"
                  >
                    <img src={Workwear} alt="" className="pl-2" name="work" />
                    <div className="flex gap-1 font-bold">
                      <p>Work Closet </p>
                      <img src={Downwardarrow} alt="" />
                    </div>
                  </a>

                  {isLoading
                    ? "Loading... "
                    : outfits.map((outfit) => (
                        <div>
                          <img
                            key={outfit.driveId}
                            src={outfit.url}
                            alt=""
                            className="pl-2"
                            name="work"
                          />
                          <p>{outfit.event}</p>
                        </div>
                      ))}
                </div>

                <a
                  onClick={() => handleTabClick("Sunday")}
                  className="cursor-pointer sunday"
                >
                  <img src={Sundaywear} alt="" name="sunday" />
                  <div className="flex gap-1 font-bold">
                    <p>Sunday Closet</p>
                    <img src={Downwardarrow} alt="" />
                  </div>
                </a>

                <a
                  onClick={() => handleTabClick("Native")}
                  className="cursor-pointer native"
                >
                  <img src={Nativewear} alt="" name="native" />
                  <div className="flex gap-1 font-bold">
                    <p>Native Closet</p>
                    <img src={Downwardarrow} alt="" />
                  </div>
                </a>

                <a
                  onClick={() => handleTabClick("Party")}
                  className="cursor-pointer party"
                >
                  <img src={Partywear} alt="" name="party" />
                  <div className="flex gap-1 font-bold">
                    <p>Party Closet</p>
                    <img src={Downwardarrow} alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
        {tab === "services" && (
          <div className="">
            <select
              onChange={handleRadiusChange}
              name=""
              id=""
              className="w-full px-3 py-3 my-4 rounded-lg"
            >
              <option value="">Select radius</option>
              {radiusOptions.map((radius) => (
                <option value={radius}>{radius}</option>
              ))}
            </select>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
              {services?.map((service, index) => (
                <div
                  key={index}
                  className="card rounded-lg border border-[#14213D] p-3"
                >
                  <span className="bg-[#14213D] text-slate-100 p-1 px-3 rounded-xl text-sm">
                    {service?.openingHoursStatus}
                  </span>
                  <h2 className="py-3 text-lg font-medium">{service?.name}</h2>
                  <p>{service?.address}</p>
                  {/* <p>{service?.businessStatus}</p> */}
                  <p className="py-3">
                    {service?.rating}, {service?.userRatingsTotal}
                  </p>
                </div>
              ))}
            </div>
            {/* <div className="flex flex-col items-center justify-center gap-20 mt-4">
              <div className="flex flex-col gap-10">
                <label className="w-full md:w-[171px] h-[52px] rounded-lg bg-white border border-[#14213D] outline-[#14213D]  cursor-pointer text-center text-lg font-semibold">
                  Upload
                  <input
                    type="file"
                    name="images"
                    multiple
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                  />
                </label>
                <div className="relative flex flex-wrap gap-10">
                  {images &&
                    images.map((imageSrc, index) => (
                      <div key={index} className="relative">
                        <img
                          src={imageSrc}
                          alt={`Image ${index}`}
                          className="object-cover w-48 h-48 bg-transparent"
                        />
                        <div
                          className="absolute top-0 right-0 m-2 cursor-pointer"
                          onClick={() => handleToggleDropdown(index)}
                        >
                          <div className="flex items-center justify-center w-8 h-8 bg-gray-500 rounded-full">
                            <div className="w-2 h-2 bg-white"></div>
                            <div className="w-2 h-2 mt-1 bg-white"></div>
                            <div className="w-2 h-2 mt-1 bg-white"></div>
                          </div>
                        </div>
                        {openDropdownIndex === index && (
                          <div className="absolute top-0 right-0 mt-10">
                            <div className="bg-white border rounded-lg shadow-lg">
                              <button
                                className="block w-full px-4 py-2 text-left text-gray-700 hover:text-red-500"
                                onClick={() => handleSell(index)}
                              >
                                Sell
                              </button>
                              <button
                                className="block w-full px-4 py-2 text-left text-gray-700 hover:text-red-500"
                                onClick={() => handleImageDelete(index)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                <button className="w-full md:w-[171px] h-[52px] rounded-lg bg-white border border-[#14213D] outline-[#14213D] cursor-pointer text-center text-lg font-semibold">
                  Generate
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-auto">
              <button
                className="w-full md:w-[171px] h-[52px] rounded-lg bg-white border border-[#14213D] outline-[#14213D] cursor-pointer text-center text-lg font-semibold"
                onClick={() => handleGenerate}
              >
                Generate
              </button>
            </div> */}
          </div>
        )}
        {tab === "marketplace" && (
          <div className="flex flex-col justify-between w-full h-auto gap-20 mt-12">
            {/* USERS */}
            {outfitsForSale?.map((user, index) => (
              <div key={index} className="">
                <h1 className="mb-6 text-2xl font-bold ">
                  {" "}
                  User {user.id}: <span>{user.user?.firstName}</span>
                </h1>
                <div className="flex">
                  <div className="relative flex flex-wrap h-auto gap-3 px-4 py-6 bg-white">
                    {user?.clothingItemsForSale?.map((img) => (
                      <div className="rounded-lg w-[290px] h-[270px] mb-6">
                        <img
                          src={img.url}
                          alt="user"
                          className="w-full rounded-lg"
                        />
                      </div>
                    ))}
                    <div className="flex flex-col justify-end">
                      <button className="rounded-full h-[50px] w-[50px] bg-[#14213D] flex items-center justify-around">
                        <img
                          src={plusIcon}
                          alt="plus-icon"
                          className="h-[25px] w-[25px] justify-center"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Wardrobe
