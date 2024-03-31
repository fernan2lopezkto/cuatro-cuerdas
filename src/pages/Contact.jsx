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
