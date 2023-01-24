import cx from "classnames";
import s from "./Watchlist.module.css";
import { useWatchlist } from "../../providers/WatchList";

const WatchList = () => {
  const { isOpen, items, closeWatchlist, toggleMedia } = useWatchlist();

  const handleToggle = (media: any) => (e: any) => {
    e.preventDefault();
    toggleMedia(media);
  };
  return (
    <div
      data-testid="watchlist"
      className={cx(s.overlay, { [s.display]: isOpen, [s.hide]: !isOpen })}
      onClick={() => closeWatchlist()}
    >
      <div className={s.watchlist} onClick={(e) => e.stopPropagation()}>
        <div className={s.watchlistContent}>
          <h3 className={s.watchlistTitle}>Films & Séries a voir</h3>
          {items.toview.length !== 0 ? (
            items.toview.map((media) => (
              <div
                key={media.id}
                onClick={handleToggle(media)}
                className={s.media}
              >
                <input type="checkbox" />
                <img
                  src={`https://image.tmdb.org/t/p/w500${media.image}`}
                  alt=""
                />
                <div>{media.title}</div>
              </div>
            ))
          ) : (
            <div>Aucun films a voir</div>
          )}
          <h3>Films & Séries vu </h3>
          {items.viewed.length !== 0 ? (
            items.viewed.map((media) => (
              <div
                key={media.id}
                onClick={handleToggle(media)}
                className={s.media}
              >
                <input type="checkbox" checked />
                <img
                  src={`https://image.tmdb.org/t/p/w500${media.image}`}
                  alt=""
                />
                <div>{media.title}</div>
              </div>
            ))
          ) : (
            <div>Aucun Films ou series vu</div>
          )}
        </div>
      </div>
    </div>
  );
};
export default WatchList;
