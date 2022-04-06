import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useStateLS from "../utils/useStateLS";
import { useNavigate } from "react-router-dom";
import collection from 'easter-egg-collection'

import Welcome from "./Welcome";
import First from "./First";

const Home = () => {

    const theme = useTheme();
    const [currentView,setCurrentView] = useStateLS("currentView","welcome");
    const navigate = useNavigate();

    return (
        <Box width="100%" backgroundColor={"lightgrey"} sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ cursor:"pointer" }} onClick={()=>{setCurrentView("welcome");navigate("/welcome")}}>
                            Amandine Birthday 🥳
                        </Typography>
                    </Toolbar>
            </AppBar>
            <Routes>
                <Route path="/welcome" element={<Welcome setCurrentView={setCurrentView}/>}/>
                <Route path="/first" element={<First setCurrentView={setCurrentView}/>}/>
                <Route path="/" element={<Navigate to={"/"+currentView}/>}/>
            </Routes>
        </Box>
    )
}

export default Home;