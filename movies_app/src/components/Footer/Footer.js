import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SearchIcon from '@material-ui/icons/Search';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position:"fixed",
    bottom:0,
    background:"#0c4271",
    
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory()

  useEffect(() => {
    if(value===0){history.push('/')}
    else if(value===1){history.push('/movies')}
    else if(value===2){history.push('/series')}
    else if(value===3){history.push('/series')}
    else if(value===4){history.push('/search')}
  }, [value,history])

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style={{color:"white"}} label="Trending" icon={<TrendingUpIcon/>} />
      <BottomNavigationAction style={{color:"white"}} label="Movies" icon={<LocalMoviesIcon />} />
      <BottomNavigationAction style={{color:"white"}} label="TV Shows" icon={<LiveTvIcon />} />
      <BottomNavigationAction style={{color:"white"}} label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction style={{color:"white"}} label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}