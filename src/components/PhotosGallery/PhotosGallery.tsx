import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";
import type { Photo } from "../../types/photo";

interface PhotosGalleryProps {
  onSelect: (photo: Photo) => void;
  photos: Photo[];
}

export default function PhotosGallery({ photos, onSelect }: PhotosGalleryProps) {
  return (
    <Grid>
      {photos.map((photo) => (
        <GridItem key={photo.id}>
          <PhotosGalleryItem photo={photo} onSelect={onSelect} />
        </GridItem>
      ))}
    </Grid>
  );
}
