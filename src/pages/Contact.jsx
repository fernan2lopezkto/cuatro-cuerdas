import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Container>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item sx={{ mt: 6 }}>
            <Typography variant="h2" component="h1">
              Contacto
            </Typography>
          </Grid>
        </Grid>

        <Container maxWidth="lg">
          <Container sx={{ mt: 10, mb: 6 }}>
            <h4>¿Quienes Somos?</h4>
            <h1>Cuatro Cuerdas</h1>
          </Container>

          <Container sx={{ mb: 10 }}>
            <p>
              Bienvenidos a 4Ctutoriales, en esta página encontraras tutoriales
              cristianos para distintos instrumentos, al igual que material para
              que tus ensayos y aprendizaje sea de la mejor manera posible.
              <br />
              <br />
              Estos tutoriales en su mayoría están orientados a músicos que
              recién comienzan o que lo quieren hacer, la idea es brindarles
              material y tutoriales explicados de una forma sencilla y fácil,
              así tener un punto de apoyo en el cual arrancar, pues hay muchas
              canciones que son de tremenda bendición, ministran muchísimo de la
              presencia de Dios, y a su vez se pueden interpretar en el
              instrumento de una forma muy fácil y sencilla.
              <br />
              <br />
              <Button
                component="a"
                href="https://www.youtube.com/channel/UCzDwqmIqlVE0ngBpGn0K8uA"
                color="error"
              >
                Si te interesa te aconsejo suscribirte a mi canal de YouTube y
                actives la campanita así te avisa para hacerlo haz clic aquí
              </Button>
              <br />
              <br />
              4C es por Cuatro Cuerdas, mi instrumento favorito es el bajo y por
              lo general lo estándar es el de 4 cuerdas
            </p>
          </Container>
        </Container>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={6} lg={4} sx={{ mt: 6 }}>
            <Card variant="outlined" sx={{ maxWidth: 345, m: 4 }}>
              <CardActionArea href="https://linktr.ee/fernan2lopezkto">
                <CardMedia
                  component="img"
                  height="180"
                  image="img/juan-foto.jpg"
                  alt="green iguana"
                ></CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Juan Rey
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Desarrollador de software enfocado en front, con ReactJS.
                    pero con conocimiento en Back-end.
                    <br />
                    Dia a dia aprendiendo mas!!!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://www.linkedin.com/in/juan-rey-fernan2lopezkto/"
                >
                  Linkedin
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://www.instagram.com/fernan2lopezkto/"
                >
                  Instagram
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
