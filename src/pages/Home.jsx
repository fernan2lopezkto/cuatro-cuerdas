import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import { Container, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={5} sx={{ mt: 10, mb: 4 }}>
            <Typography variant="h4" component="h1">
              Cuatro Cuerdas
            </Typography>
            <Typography variant="h6" component="p">
              Tutoriales
            </Typography>
            <Typography variant="p" component="p">
              Un lugar de ayuda para los que recién comienzan en su llamado a
              servir a Dios a trabes de la música
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7} sx={{ mt: 10, mb: 4 }}>
            <VideoPlayer url="https://www.youtube.com/watch?v=YKM5qWuOObA" />
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          spacing={1}
          sx={{ mt: 2, mb: 4 }}
        >
          <Grid item xs={12} sm={4}>
            <NavLink className="link" to="/cuatro-cuerdas/tutoriales">
              <Typography variant="h6" component="p">
                Tutoriales
              </Typography>
            </NavLink>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          spacing={4}
          sx={{ mt: 2, mb: 4 }}
        >
          <Grid item xs={12}>
            <Typography variant="h5" component="h2">
              Material Extra
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <VideoPlayer url="https://www.youtube.com/watch?v=CnW00jnh7bI" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <VideoPlayer url="https://www.youtube.com/watch?v=JhoRz5qHM8U" />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
