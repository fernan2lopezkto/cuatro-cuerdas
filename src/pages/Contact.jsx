import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Container, Grid, Typography } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Container>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item sx={{ mt: 6}}>
            <Typography variant="h2" component="h1">
              Contacto
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
