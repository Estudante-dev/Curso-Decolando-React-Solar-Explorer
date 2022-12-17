import { Button, Container, Stack, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect, useState } from "react";
import ComponenteLayoutPadrao from "../componetes/layout/padrao";
import ApiPlanetas from "../api/planetas";

export default function PaginaPlaneta() {

    const parametros = useParams();
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    const [planeta, setPlaneta] = useState({});
    // eslint-disable-next-line
    const [msg, setMsg] = useState(null);


    // Função que executa quando é aberto a página
    useEffect(() => {
        (async () => {

            try {
                let respostaApi = await ApiPlanetas.obterUnicoPorSlug(parametros.slug);
                if (!respostaApi[0]) { throw new Error("Não encontramos o planeta!") }
                setPlaneta(respostaApi?.[0]);
                setCarregando(false);
            } catch (error) {
                setErro({
                    subtitulo: `Ocorreu um erro em nossa api para obter os planetas, tente novamente mais tarde.`,
                    descricao: String(error)
                });
                setCarregando(false);
            }

        })()
    }, [parametros]);

    async function ClickCompartilhar() {
        let resImg = await fetch(planeta?.imgUrl);
        let contentType = resImg.headers.get("content-type");
        let blob = await resImg.blob();
        let binaryFile = new File([blob], `${planeta?.slug}-${planeta?.img}`, { type: contentType});

        window.navigator.share({
            url: `${window.location.href}`,
            text: `Explore o planeta ${planeta?.nome} e descubra suas peculiaridades.`,
            title: `Conheça ${planeta?.nome}`,
            files: Array(binaryFile)
        })
    }


    return (
        <ComponenteLayoutPadrao carregando={carregando} erro={erro} msg={msg}>
            <Container maxWidth="xl" className="containerMargin">
                <Link to="/planetas">
                    <Button variant="outlined" size="large" startIcon={<ArrowBackIosIcon />}>Voltar</Button>
                </Link>


                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >

                    <img className="animacaoEfeitoGirar" src={planeta?.imgUrl} alt={planeta?.descrição} />
                    <Typography variant="h5" component="h1">{planeta?.nome}</Typography>
                    <Typography variant="body1" component="p">{planeta?.descrição}</Typography>


                    <Button variant="contained" size="large" endIcon={<ShareIcon />} onClick={() => { ClickCompartilhar(); }}>Compartilhar</Button>
                </Stack>
            </Container>
        </ComponenteLayoutPadrao>
    )
}