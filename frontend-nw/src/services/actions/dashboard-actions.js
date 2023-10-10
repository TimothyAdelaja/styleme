import AxiosClient from "../../config/AxiosClient"

export const getOutfits = (queryString) =>
  AxiosClient.get(`/api/v1/outfits/${queryString}`)
    .then((response) => response)
    .catch((error) => error)

export const getOutfitsForSale = () =>
  AxiosClient.get(`/api/v1/outfits/forsale`)
    .then((response) => response)
    .catch((error) => error)

export const getServicesByRadius = (radius) =>
  AxiosClient.get(`/api/v1/maps/findLaundry?radius=${radius}`)
    .then((response) => response)
    .catch((error) => error)
