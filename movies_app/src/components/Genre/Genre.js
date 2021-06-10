import React,{useEffect} from "react";
import { Chip } from "@material-ui/core";
import axios from "axios";

const Genres = ({ 
    type, 
    genres, 
    setGenres, 
    selectedGenres, 
    setSelectedGenres,
    setPage }) => {
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };
    
      const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };
  const getGenres = async () => {
    const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=433b72bbcc8a78f3b6d6d48b30491675&language=en-US`
      );
      setGenres(data.genres);
      console.log(genres)   //array of objects
  };

  useEffect(() => {
    getGenres();

    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
