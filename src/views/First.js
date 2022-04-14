import { Box, Button, TextField } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import Elevator from "elevator.js";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ElevatorIcon from '@mui/icons-material/Elevator';
import DoneIcon from '@mui/icons-material/Done';
import useStateLS from "../utils/useStateLS";

import InputVal from "./inputVal";

import texte from "../assets/texte.png"
import pinguin from "../assets/Pinguin.png"

import rebu from "../assets/rebu.png"

const words = [
    "pie"
]

const First = () => {

    const [foundWords,setFoundWords] = useStateLS("foundWords",{});
    const [numberWords,setNumberWords] = useStateLS("numberWords",0);
    const [num,setNum] = useState(null);
    const targetRef = useRef();

    const elevator = new Elevator({
        element: targetRef.current,
        duration: 23000,
        mainAudio: "https://cdn.pixabay.com/download/audio/2021/11/18/audio_d702fb7672.mp3?filename=elevator-music-bossa-nova-background-music-version-60s-10900.mp3",
    })

    const handleWord = (key,val) => {
        if(!foundWords[key]){
            if(val.includes(key)){
                setFoundWords(v=>({...v,[key]:true}))
                setNumberWords(numberWords+1);
            }
        }
    }

    const getNum = () => {
        if(num === 99)return "Exact !"
        if(num < 99)return "Pas assez !"
        if(num > 99)return "Trop !"
    }

    return (
        <>

            { numberWords === 17 &&
                <Box width="100%" textAlign="center" fontSize="40px" mt={5} fontWeight="bold">
                    Tu as gagné !!!!<br/>
                    <Box fontSize="20px" mt={5} fontWeight="auto">
                        Mais quoi au juste ? <br/>
                        Une super carte cadeau pour toi !<br/>
                        Valable dans tous les magasins de la région ! <br/>
                        (juste un magasin c'est pas cool)<br/>
                        (uniquement en compagnie de hugo bricoult)<br/>
                        Mais de combien ? <br/><br/>
                        <TextField type="number" onChange={(e)=>setNum(e.target.valueAsNumber)}/><br/><br/>
                        {getNum()}
                    </Box>
                </Box>
            }
            <Box width="100%" display="flex" flexDirection="column" mt={10}>
                <Box display="flex" flexDirection="column" height="450px" justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <img style={{height:"250px",width:"250px",display:"block"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Wikipedia_logo_v3.svg/1200px-Wikipedia_logo_v3.svg.png" />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" height="50px">
                        Wikipedia de Amandine, Section "Bébé éprouvette", 3,4 et 5 ème lettre du dernier mot
                    </Box>
                    <InputVal keyword="pie" foundWords={foundWords} handleWord={handleWord}/>
                </Box>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" mt={10}>
                <Box display="flex" flexDirection="column" height="450px" justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <img style={{height:"250px",width:"250px",display:"block"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png" />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" height="50px" mt={3}>
                        Pokémon numéro 143 (en anglais)
                    </Box>
                    <InputVal keyword="snorlax" foundWords={foundWords} handleWord={handleWord}/>
                </Box>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" mt={10}>
                <Box display="flex" flexDirection="column" height="450px" justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <img style={{height:"250px",width:"250px",display:"block"}} src="https://w7.pngwing.com/pngs/734/679/png-transparent-red-alphabet-letter-english-alphabet-red-english-letters-english-text-logo.png" />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" height="50px" mt={3}>
                        Tebahpla 25-12-6
                    </Box>
                    <InputVal keyword="fly" foundWords={foundWords} handleWord={handleWord}/>
                </Box>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" mt={10}>
                <Box display="flex" flexDirection="column" height="450px" justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <img style={{height:"250px",width:"400px",display:"block"}} src="https://cdn.pixabay.com/photo/2020/03/19/11/47/solar-system-4947216_960_720.png" />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" height="50px" mt={3}>
                        4 éme planète du système solaire (sauf pluton) à avoir le plus gros diamètre (en anglais)
                    </Box>
                    <InputVal keyword="earth" foundWords={foundWords} handleWord={handleWord}/>
                </Box>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" mt={10}>
                <Box display="flex" flexDirection="column" height="450px" justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <img style={{height:"250px",width:"250px",display:"block"}} src="https://cdn-icons-png.flaticon.com/512/201/201811.png" />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" height="50px" mt={3}>
                        Se slow fait rapidement  1 4 3 7
                    </Box>
                    <InputVal keyword="swim" foundWords={foundWords} handleWord={handleWord}/>
                </Box>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" mt={10} pb={10}>
                <Box display="flex" flexDirection="column"  justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <img style={{height:"700px",width:"550px",display:"block"}} src={texte} />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" height="50px" mt={3} mb={15}>
                        <img style={{height:"130px",width:"550px",display:"block"}} src={pinguin} />
                    </Box>
                    <InputVal keyword="penguin" foundWords={foundWords} handleWord={handleWord}/>
                </Box>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" mt={10} pb={10}>
                <Box display="flex" flexDirection="column"  justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <img style={{height:"320px",width:"550px",display:"block"}} src={rebu} />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" height="50px" mt={3} mb={5}>
                        Rébus
                    </Box>
                    <InputVal keyword="handsome" foundWords={foundWords} handleWord={handleWord}/>
                </Box>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" mt={10} pb={10}>
                <Box display="flex" flexDirection="column"  justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <img style={{height:"250px",width:"550px",display:"block"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Caesar_cipher_left_shift_of_3.svg/1200px-Caesar_cipher_left_shift_of_3.svg.png" />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" height="50px" mt={3} mb={5}>
                        Code césare | mot: amrriv  |  nombre: 4
                    </Box>
                    <InputVal keyword="winner" foundWords={foundWords} handleWord={handleWord}/>
                </Box>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" mt={10} pb={10}>
                <Box display="flex" flexDirection="column"  justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <img style={{height:"300px",width:"550px",display:"block"}} src="https://static.wamiz.com/images/news/facebook/article/sans-titre-54-fb-5a58bfac94ab4.jpg" />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" height="50px" mt={3} mb={5}>
                        Chat roux
                    </Box>
                    <InputVal keyword="fox" foundWords={foundWords} handleWord={handleWord}/>
                </Box>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" mt={10} pb={10}>
                <Box display="flex" flexDirection="column"  justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <img style={{height:"300px",width:"550px",display:"block"}} src="https://static.vecteezy.com/system/resources/previews/001/203/458/non_2x/bat-png.png" />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" height="50px" mt={3} mb={5}>
                        Carte ennemie des chauve souris
                    </Box>
                    <InputVal keyword="joker" foundWords={foundWords} handleWord={handleWord}/>
                </Box>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" mt={10} pb={10}>
                <Box display="flex" flexDirection="column"  justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <img style={{height:"300px",width:"550px",display:"block"}} src="https://pngimg.com/uploads/carrot/carrot_PNG4997.png" />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" height="50px" mt={3} mb={20} p={5}>
                    C'était le matin à lapinVille. Lapinette révait d'une journée comme les autres mais dans son réve, lapin, son pire ennemi, n'existait pas. Lapinette fut réveillé par lapinou, a qui il avait promis d'aller faire une visite de gratte-ciel. Lapinette se leva difficilement et regarda par la fenétre de son appartement, il faisait beau. Ils marchèrent jusqu'au rez de chaussée du gratte-ciel quand soudain, lapin armé d'un pistolet surgit d'un angle de la rue. Lapinette et lapinou coururent vers une voiture où ils s'y cachèrent. lapin les chercha et failli repartir quand lapinou éternua. lapin se retourna, attrapa lapinou le mis dans le coffre de sa Lapauto garée en contrebas et démara a toute allure. Lapinette couru aprés la Lapauto de lapin mais il n'aperçut que la plaque d'immatriculation : 76-QPA-92. Il se rendit au commisairiat de lapinVille sous ce temps radieux et y deposa sa plainte au sujet de l'enlevement de lapinou. Lapinette laissa la police s'en charger et alla se reposer dans son appartement. trois jours plus tard , le commisairiat affirma avoir retrouvé lapinou bailloné et ligoté dans la rue des lapin. Personne ne savait où se trouvait lapin mais les policiers avaient de bonnes pistes. Lapinette et lapinou marchèrent jusqu'au rez de chaussée du gratte-ciel et profitèrent d'une visite de gratte-ciel bien méritée.
                    <br/>Réponse en anglais
                    </Box>
                    <InputVal keyword="rabbit" foundWords={foundWords} handleWord={handleWord}/>
                </Box>
            </Box>


            <Box width="100%" display="flex" flexDirection="column" mt={10} pb={10}>
                <Box display="flex" flexDirection="column"  justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <img style={{height:"300px",width:"250px",display:"block"}} src="https://svgsilh.com/png-1024/1486374.png" />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" height="50px" mt={3} mb={5} p={5}>
                        Animal sur le drapeau du pays de galles
                    </Box>
                    <InputVal keyword="dragon" foundWords={foundWords} handleWord={handleWord}/>
                </Box>
            </Box>
            
            <Box width="100%" display="flex" flexDirection="column" mt={10} pb={10}>
                <Box display="flex" flexDirection="column"  justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <img style={{height:"250px",width:"600px",display:"block"}} src="https://www.pngmart.com/files/13/Electric-PNG-HD.png" />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" height="50px" mt={3} mb={5} p={5}>
                        Pokémon électrique
                    </Box>
                    <InputVal keyword="pikachu" foundWords={foundWords} handleWord={handleWord}/>
                </Box>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" mt={10} pb={10}>
                <Box display="flex" flexDirection="column"  justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <img style={{height:"250px",width:"250px",display:"block"}} src="https://pngimg.com/uploads/microphone/microphone_PNG7930.png" />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" height="50px" mt={3} mb={5} p={5}>
                        Spears
                    </Box>
                    <InputVal keyword="britney" foundWords={foundWords} handleWord={handleWord}/>
                </Box>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" mt={10} pb={10}>
                <Box display="flex" flexDirection="column"  justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <img style={{height:"200px",width:"550px",display:"block"}} src="https://www.pngmart.com/files/15/Filmstrip-Vector-Film-Reel-PNG-Transparent-Image.png" />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" height="50px" mt={3} mb={5} p={5}>
                        Film sortit le 30 mars 2022
                    </Box>
                    <InputVal keyword="sonic" foundWords={foundWords} handleWord={handleWord}/>
                </Box>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" mt={10} pb={10}>
                <Box display="flex" flexDirection="column"  justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <img style={{height:"250px",width:"250px",display:"block"}} src="https://cdn-icons-png.flaticon.com/512/281/281742.png" />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" height="50px" mt={3} mb={5} p={5}>
                        Inanasi mu nyanja  ??? une traduction ? réponse en anglais
                    </Box>
                    <InputVal keyword="spongebob" foundWords={foundWords} handleWord={handleWord}/>
                </Box>
            </Box>

            <Box width="100%" display="flex" flexDirection="column" mt={10} pb={10}>
                <Box display="flex" flexDirection="column"  justifyContent="center">
                    <Box display="flex" flexDirection="row" justifyContent="center">
                        <img style={{height:"250px",width:"250px",display:"block"}} src="https://anti-deprime.com/wp-content/uploads/2014/10/sun-47083-1024x871.png" />
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" height="50px" mt={3} mb={5} p={5}>
                        Il ne fait pas le bonheur. Réponse en anglais
                    </Box>
                    <InputVal keyword="money" foundWords={foundWords} handleWord={handleWord}/>
                </Box>
            </Box>


            <Box display="flex" left="30px" bottom="30px" ml={3} pb={3}>
                <Button onClick={()=>elevator.elevate()}><ElevatorIcon/><ArrowUpwardIcon/></Button>
            </Box>
        </>
    );
}

export default First;