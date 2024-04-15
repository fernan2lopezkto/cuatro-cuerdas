import { Grid, Typography } from "@mui/material";
import VideoPlayer from "../components/VideoPlayer";

import React from "react";
import { Link } from "react-router-dom";

function MaterialExtraComponent() {
  return (
    <>
      <Grid container justifyContent="center" spacing={4} sx={{ mt: 2, mb: 4 }}>
        <Grid item xs={12}>
        <Typography variant="h5" component="h2">
              <Link className="link" to="/cuatro-cuerdas/material-extra">
                Material Extra
              </Link>
            </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <VideoPlayer url="https://www.youtube.com/watch?v=CnW00jnh7bI" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <VideoPlayer url="https://www.youtube.com/watch?v=JhoRz5qHM8U" />
        </Grid>
      </Grid>
    </>
  );
}

export default MaterialExtraComponent;
