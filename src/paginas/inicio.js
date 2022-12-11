import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function PaginaInicio() {
    return (<>
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            height="100vh"
        >

            <Typography variant="h3" component="h1" textAlign="center">Conheça os planetas do Sistema Solar!</Typography>

            <img className="animacaoEfeitoFlutuando" src="/img/astronauta.png" alt="Astronauta Flutuando." />

            <Link to="/planetas">
                <Button variant="contained" size="large" endIcon={<ArrowForwardIosIcon/>}>Vamos lá</Button>
            </Link>


        </Stack>
    </>)
}