import { NavLink, } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";

function SelectorTypeTutorials() {
  return (
    <>
      <Grid container justifyContent="center" spacing={1} sx={{ mt: 2, mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <Button variant="outlined" color="error">
            <NavLink className="link2" to="/cuatro-cuerdas/tutorials">
              <Typography variant="h6" component="p">
                Explicados
              </Typography>
            </NavLink>
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="outlined" color="error">
            <NavLink className="link2" to="/cuatro-cuerdas/pistatutorials">
              <Typography variant="h6" component="p">
                Con Pistas
              </Typography>
            </NavLink>
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="outlined" color="error">
            <NavLink className="link2" to="/cuatro-cuerdas/covers">
              <Typography variant="h6" component="p">
                Covers
              </Typography>
            </NavLink>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default SelectorTypeTutorials;
