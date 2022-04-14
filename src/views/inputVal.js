import { Box, TextField } from "@mui/material"
import DoneIcon from '@mui/icons-material/Done';

const InputVal = ({foundWords,keyword,handleWord}) => {

    return (
        <Box display="flex" flexDirection="row" justifyContent="center">
            { foundWords[keyword] ? <TextField value={keyword} disabled/> : <TextField onChange={(e)=>handleWord(keyword,e.target.value)}/>}
            <Box height={"100%"} display="flex" paddingLeft="30px">
                {foundWords[keyword] && <DoneIcon color="primary" sx={{marginTop:"auto",marginBottom:"auto"}}/>}
            </Box>
        </Box>
    )
}

export default InputVal