import "./App.css";
import TvShows from "./components/TvShows";
import "bootstrap/dist/css/bootstrap.min.css";
import TrendingNowList from "./components/TrendingNowList";
import Footer from "./components/Footer";
import "./Components.css";
import MyNavBar from "./components/MyNavBar";

function App() {
  return (
    <div>
      <MyNavBar />
      <TvShows />
      <TrendingNowList title="harry-potter" />
      <Footer />
    </div>
  );
}

export default App;
