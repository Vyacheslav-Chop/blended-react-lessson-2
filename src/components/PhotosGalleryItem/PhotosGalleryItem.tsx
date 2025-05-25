import css from "./PhotosGalleryItem.module.css";
import type { Photo } from "../../types/photo";

interface PhotosGalleryItemProps {
  photo: Photo;
  onSelect: (photo: Photo) => void;
}

export default function PhotosGalleryItem({
  photo,
  onSelect,
}: PhotosGalleryItemProps) {
  const {
    avg_color,
    alt,
    src: { original },
  } = photo;
  return (
    <div
      onClick={() => onSelect(photo)}
      className={css.thumb}
      style={{ backgroundColor: avg_color, borderColor: avg_color }}
    >
      <img src={original} alt={alt} loading="lazy" />
    </div>
  );
}
