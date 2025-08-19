import type { Image } from "../types/Image";

export interface Song {
  id: string;
  name: string;
  artist: string;
  image: Image;
}
