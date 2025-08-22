import { getImageUrl } from "../../../utils/getImageUrl";
import type { Image } from "../../../types/Image";
import "./SongImage.css";

interface SongImageProps {
  size: "small" | "big";
  image: Image;
}

function SongImage({ size, image }: SongImageProps) {
  return (
    <img
      className={`song-image ${size}`}
      src={getImageUrl(image.imageFilename)}
      alt={image.alt}
    />
  );
}

export default SongImage;
