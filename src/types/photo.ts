interface Src {
  original: string;
  large: string;
}

export interface Photo {
  id: number;
  avg_color: string;
  alt: string;
  src: Src;
}
