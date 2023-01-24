import Header from "./components/Header";
import Page from "./components/Page";
import s from "./App.module.css";
import WatchlistProvider from "./providers/WatchList";
const App = () => {
  return (
    <WatchlistProvider>
      <div className={s.app}>
        <Header />
        <Page />
      </div>
    </WatchlistProvider>
  );
};

export default App;
