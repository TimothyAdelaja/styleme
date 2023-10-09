import AxiosClient from "../../config/AxiosClient";

export const getOutfits = (queryString) =>
	AxiosClient.get(`/api/v1/outfits/${queryString}`)
		.then((response) => response)
		.catch((error) => error);
