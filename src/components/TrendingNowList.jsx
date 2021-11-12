// b2d7b7f8
// https://www.omdbapi.com/?apikey=b2d7b7f8&s=harry-potter

import React from "react";
import TrendingNowSingle from "./TrendingNowSingle";

class TrendingNowList extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount = () => {
    this.fetchMovies();
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(
        "https://www.omdbapi.com/?apikey=b2d7b7f8&s=harry-potter"
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          movies: data.Search,
        });
        console.log(this.state.movies);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <section>
        <div class="container-fluid mt-1 ml-6">
          <div class="mb-2">
            <h4 class="d-table-cell mb-0 text-light">Trending Now</h4>
          </div>

          <div class="row mx-n1 mb-lg-5">
            {this.state.movies.slice(0, 6).map((res) => (
              <TrendingNowSingle src={res.Poster} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default TrendingNowList;
