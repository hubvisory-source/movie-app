import { useWatchlist } from "../../providers/WatchList";
import Button from "../Button";
import Clock from "../Clock";
import s from "./Header.module.css";
const Header = () => {
  const { openWatchlist } = useWatchlist();
  return (
    <>
      <div className={s.placeholder} />
      <header className={s.header}>
        <h1>
          <Clock />
        </h1>
        <Button onClick={openWatchlist}>Watchlist</Button>
      </header>
    </>
  );
};
export default Header;
