import React, { useState, useEffect } from "react";
import "./Search.css";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Card from "../../components/Card/Card";
import CustomPagination from "../../components/Pagination/Pagination";
import SimpleBackdrop from "../../components/BackDrop/Backdrop";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "white",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Search = () => {
  const [list, setlist] = useState([]);
  const [page, setpage] = useState(1);
  const [totalPages, settotalPages] = useState("");

  const classes = useStyles();
  const [searchWord, setsearchWord] = useState("");

  const fetchData = search_url => {
    fetch(search_url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setTimeout(() => {
          settotalPages(data.total_pages);
          setlist(data.results);
        }, 500);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const search_url = `https://api.themoviedb.org/3/search/movie?api_key=433b72bbcc8a78f3b6d6d48b30491675&page=${page}&query=${searchWord}`;
    console.log(list)
    fetchData(search_url);
    console.log(list)
  };

  useEffect(() => {
    window.scroll(0, 0);
    const search_url = `https://api.themoviedb.org/3/search/movie?api_key=433b72bbcc8a78f3b6d6d48b30491675&page=${page}&query=${searchWord}`;
    fetchData(search_url);
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <h1 className="Heading">Search</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            onChange={e => setsearchWord(e.target.value)}
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            value={searchWord}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </form>
      {totalPages === 0 ? 
      <h1>NO DATA</h1> : 
      <div className="title">
        {list && 
          list.map(l => (
            <Card
              key={l.id}
              id={l.id}
              poster={l.poster_path}
              title={l.title || l.name}
              media_type={l.media_type}
              date={l.first_air_date || l.release_date}
              vote_average={l.vote_average}
            />
          ))
        }
        {totalPages > 1 && (
          <CustomPagination setPage={setpage} totalPages={totalPages} />
        )}
      </div>}
    </>
  );
};

export default Search;
