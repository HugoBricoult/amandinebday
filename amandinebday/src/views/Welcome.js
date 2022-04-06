import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Welcome = ({setCurrentView}) => {
    const navigate = useNavigate();
    return (
        <Box width="100%" display="flex" flexDirection="row">
            <Box ml="auto" mr="auto" mt="40vh">
                <Button variant="contained" color="primary" size="large" onClick={()=>{setCurrentView("first");navigate('/first');}}>Commencer</Button>
            </Box>
        </Box>
    )
}

export default Welcome