import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function PaginaInicio() {
    return (<>
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >

            <Typography variant="h2" component="h1">Conheça os planetas do Sistema Solar!</Typography>

            <img className="efeito-flutuando" src="/img/astronauta.png" alt="Astronauta Flutuando." />

            <Link to="/planetas">
                <Button variant="contained" size="large">Vamos lá!</Button>
            </Link>


        </Stack>
    </>)
}