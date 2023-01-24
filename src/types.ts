export type MediaType = {
  id: string;
  title: string;
  releaseDate: string;
  image: string;
};
export type WatchlistMediaType = {
  viewed: boolean;
} & MediaType;
