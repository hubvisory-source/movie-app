import { MediaType } from "../../types";
import { FC } from "react";
import Button from "../Button";
import s from "./Media.module.css";
import { useWatchlist } from "../../providers/WatchList";
const Media: FC<MediaType> = (media) => {
  const { addMediaToWatchlist } = useWatchlist();
  return (
    <div className={s.card}>
      <div className={s.overlay}>
        <Button onClick={() => addMediaToWatchlist(media)}>A voir</Button>
      </div>
      <div className={s.cardImage}>
        <img src={`https://image.tmdb.org/t/p/w500/${media.image}`} alt="" />
      </div>
      <div className={s.cardContent}>
        <div>{media.title}</div>
        <div>{media.releaseDate}</div>
      </div>
    </div>
  );
};
export default Media;
