import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import VideoPlayer from "../components/VideoPlayer";
import { Link } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import SelectorTypeTutorials from "../components/SelectorTypeTutorials";
import MaterialExtraComponent from "../components/MaterialExtraComponent";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={5} sx={{ mt: 4 }}>
            <Typography variant="h4" component={Link} to="/cuatro-cuerdas/contact"
            className="link">
              Cuatro Cuerdas
            </Typography>
            <Typography variant="h6" component="p">
              Tutoriales
            </Typography>
            <Typography variant="p" component="p">
              Un lugar de ayuda para los que recién comienzan en su llamado a
              servir a Dios a través de la música
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7} sx={{ mt: 4, mb: 6 }}>
            <VideoPlayer url="https://www.youtube.com/watch?v=YKM5qWuOObA" />
          </Grid>
        </Grid>

        <SelectorTypeTutorials />
        <MaterialExtraComponent />
        
      </Container>
      <Footer />
    </>
  );
}
