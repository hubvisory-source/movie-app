import { createContext, ReactNode, FC, useState, useContext } from "react";
import { MediaType, WatchlistMediaType } from "../types";
type Props = {
  children: ReactNode;
};
const WatchlistContext = createContext<{
  items: { toview: WatchlistMediaType[]; viewed: WatchlistMediaType[] };
  addMediaToWatchlist: (media: MediaType) => void;
  openWatchlist: () => void;
  closeWatchlist: () => void;
  toggleMedia: (media: WatchlistMediaType) => void;
  isOpen: boolean;
}>({
  items: { toview: [], viewed: [] },
  addMediaToWatchlist: () => {},
  openWatchlist: () => {},
  closeWatchlist: () => {},
  toggleMedia: () => {},
  isOpen: false,
});
export const useWatchlist = () => {
  return useContext(WatchlistContext);
};
const WatchlistProvider: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const [watchlist, setWatchlist] = useState<WatchlistMediaType[]>([]);

  const addMediaToWatchlist = (media: MediaType) => {
    if (!watchlist.find((el) => el.id === media.id))
      setWatchlist((prev) => [...prev, { ...media, viewed: false }]);
    setOpen(true);
  };

  const toggleMedia = (media: WatchlistMediaType) => {
    setWatchlist((prev) =>
      prev.map((el) =>
        el.id === media.id ? { ...el, viewed: !el.viewed } : el
      )
    );
  };

  const toViewList = watchlist.filter((el) => !el.viewed);
  const viewedList = watchlist.filter((el) => el.viewed);

  return (
    <WatchlistContext.Provider
      value={{
        items: { toview: toViewList, viewed: viewedList },
        addMediaToWatchlist,
        openWatchlist: () => setOpen(true),
        closeWatchlist: () => setOpen(false),
        toggleMedia,
        isOpen: open,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
export default WatchlistProvider;
