import { Container, Grid, Typography } from "@mui/material";
import VideoPlayer from "../components/VideoPlayer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";

function MaterialExtraPage() {
  return (
    <>
      <Navbar />
      <Container>
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

export default MaterialExtraPage;
