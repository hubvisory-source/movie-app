import MediaList from "../../components/MediaList";
import Watchlist from "../WatchList";
import s from "./Page.module.css";
const Page = () => {
  return (
    <div className={s.page}>
      <Watchlist />
      <main className={s.content}>
        <MediaList title="Derniers Films Populaires" endpoint="movie" />
        <MediaList title="Derniers Series Populaires" endpoint="tv" />
      </main>
    </div>
  );
};
export default Page;
