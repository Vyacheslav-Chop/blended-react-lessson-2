import css from "./App.module.css";
import Section from "../Section/Section";
import Container from "../Container/Container";
import toast, { Toaster } from "react-hot-toast";
import Form from "../Form/Form";
import getPhotos from "../../serviceAPI/photos";
import { useState } from "react";
import type { Photo } from "../../types/photo";
import Loader from "../Loader/Loader";
import Text from "../Text/Text";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import Modal from "../Modal/Modal";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [successRequest, setSuccessRequest] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setPhotos([]);
      toast.dismiss();
      const newPhotos = await getPhotos(query);
      if (newPhotos.length === 0) {
        toast.error("No photos found for your request.");
        return;
      }
      setPhotos(newPhotos);
      setSuccessRequest(true);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelect = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className={css.app}>
      <Toaster position="top-center" reverseOrder={false} />
      <Section>
        <Container>
          <Form onSubmit={handleSearch} successRequest={successRequest} />
          {isLoading && (
            <Loader
              size={60}
              thickness={10}
              color="#00ff00"
              borderColor="rgba(0, 255, 0, 0.3)"
              shadowColor="rgba(0, 255, 0, 0.6)"
            />
          )}
          {isError && (
            <Text textAlign="center" marginBottom="20">
              {" Oooops! Something went wrong. Please try again."}
            </Text>
          )}
          {photos.length > 0 && (
            <PhotosGallery photos={photos} onSelect={handleSelect} />
          )}
        </Container>
      </Section>
      {selectedPhoto && (
        <Modal onClose={closeModal}>
          <img src={selectedPhoto.src.large} alt={selectedPhoto.alt} />
        </Modal>
      )}
    </div>
  );
}
