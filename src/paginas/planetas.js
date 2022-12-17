import { Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiPlanetas from "../api/planetas";
import ComponenteLayoutPadrao from "../componetes/layout/padrao";

export default function PaginaPlanetas() {

    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    const [planetas, setPlanetas] = useState([]);
    // eslint-disable-next-line
    const [msg, setMsg] = useState(null);


    // Função que executa quando é aberto a página
    useEffect(() => {
        (async () => {

            try {
                let respostaApi = await ApiPlanetas.obterTodos();
                setPlanetas(respostaApi);
                setCarregando(false);
            } catch (error) {
                setErro({
                    subtitulo: `Ocorreu um erro em nossa api para obter os planetas, tente novamente mais tarde.`,
                });
                setCarregando(false);
            }

        })()
    }, []);

    return (
        <ComponenteLayoutPadrao carregando={carregando} erro={erro} msg={msg}>
            <Container maxWidth="xl" className="containerMargin">
                <Typography variant="h2" component="h1" textAlign="center">Planetas do sistema solar!</Typography>

                <Grid container spacing={2} pt={2}>
                    {/* XS = 2 item */}
                    {/* SM = 3 item */}
                    {/* MD = 4 item */}
                    {/* LG = 6 item */}
                    {/* XL = 6 item */}

                    {
                        planetas?.map((planeta) => (
                            <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
                                <Card className="cardVidro">
                                    <Link to={`/planeta/${planeta?.slug}`}>
                                        <CardActionArea>
                                            <CardContent>
                                                <img src={planeta?.imgUrl} alt={planeta?.descrição} width="100%" />
                                                <Typography variant="h5" component="h2">{planeta?.nome}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Link>
                                </Card>
                            </Grid>
                        ))
                    }

                </Grid>
            </Container>
        </ComponenteLayoutPadrao>
    )
}