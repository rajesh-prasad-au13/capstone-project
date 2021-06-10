const useGenre = (selectedGenres) => {
    if (selectedGenres.length < 1) return "";
  
    const GenreIds = selectedGenres.map((g) => g.id); //Array of GenreIds
    return GenreIds.reduce((acc, curr) => acc + "," + curr);
    //comma separated GenreIds
  };
  
  export default useGenre;