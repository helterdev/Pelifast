import  Pagination  from "@mui/material/Pagination";
import  Stack  from "@mui/material/Stack";
const PaginationNav = (props) => {
    const {page, setPage} = props;
    const handleClick = (e, value) => {
        setPage(value);
    }
    return (
        <div className="navigation">
            <Stack spacing={2}>
                <Pagination sx={{display: "flex", justifyContent:"center"}}  color="primary" count={50} page={page} onChange={handleClick}/>
            </Stack>
        </div>
    )
}

export default PaginationNav;