import axios from "axios";
import React, { useEffect, useState } from "react";
// import "./Movies.css";
import Card from "../../components/Card/Card";
import CustomPagination from "../../components/Pagination/Pagination";
import SimpleBackdrop from "../../components/BackDrop/Backdrop";
import Genres from "../../components/Genre/Genre";
import useGenre from "../../customHooks/useGenre";

function Series() {
  const [list, setlist] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, settotalPages] = useState(10);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreToId = useGenre(selectedGenres);
  const media_type = "tv";

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/${media_type}?api_key=433b72bbcc8a78f3b6d6d48b30491675&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreToId}`
    );
    setTimeout(() => {
      settotalPages(data.total_pages);
      setlist(data.results);
    }, 500);
  };

  useEffect(() => {
    window.scroll(0, 0);
    setlist([]);
    fetchTrending();
    // eslint-disable-next-line
  }, [genreToId, page]);

  return (
    <>
      <h1 className="Heading">Series</h1>
      <Genres
        type="movie"
        genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />
      <div className="title">
        {list.length !== 0 ? (
          list.map(l => (
            <Card
              key={l.id}
              id={l.id}
              poster={l.poster_path}
              title={l.title || l.name}
              date={l.first_air_date || l.release_date}
              media_type={media_type}
              vote_average={l.vote_average}
            />
          ))
        ) : (
          <SimpleBackdrop open={true} />
        )}
        <CustomPagination setPage={setPage} totalPages={totalPages} />
      </div>
    </>
  );
}

export default Series;
