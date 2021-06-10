import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const CustomPagination = ({setPage,totalPages = 10}) => {
  const handleChange = (page) => {
      window.scroll(0,0)
      setPage(page)
  };
  return (
    <div>
      <Pagination count={totalPages} onChange={e=>handleChange(e.target.textContent)} />
    </div>
  );
};

export default CustomPagination;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       marginTop: theme.spacing(2),

//     },
//     marginBottom:"100px"
//   },
// }));

// export default function PaginationOutlined() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Pagination onchange={}/>
//     </div>
//   );
// }
