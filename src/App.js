import "./App.css";
import TvShows from "./components/TvShows";
import "bootstrap/dist/css/bootstrap.min.css";
import TrendingNowList from "./components/TrendingNowList";

function App() {
  return (
    <div>
      <TvShows />
      <TrendingNowList />
    </div>
  );
}

export default App;
