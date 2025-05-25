import axios from "axios";
import type { Photo } from "../types/photo";

const myKEY = import.meta.env.VITE_API_KEY;
axios.defaults.baseURL = "https://api.pexels.com/v1/";
axios.defaults.headers.common["Authorization"] = myKEY;
axios.defaults.params = {
  orientation: "landscape",
};

interface FetchPhotoRes {
  photos: Photo[];
}

export default async function getPhotos(query: string): Promise<Photo[]> {
  const res = await axios.get<FetchPhotoRes>(`search?query=${query}`);
  return res.data.photos;
}
