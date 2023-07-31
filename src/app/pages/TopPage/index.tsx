import React from 'react';
import { AchievementRate } from 'app/containers/AchievementRate';
import { Grid } from '@mui/material';
import { BodyWeightGraph } from 'app/containers/BodyWeightGraph';
import { MealType } from 'app/containers/MealType';
import { MealHistory } from 'app/containers/MealHistory';

export function TopPage() {
  return (
    <>
      <Grid container columnSpacing={0}>
        <Grid item lg={5} xs={12}>
          <AchievementRate />
        </Grid>
        <Grid item lg={7} xs={12}>
          <BodyWeightGraph />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ my: 3 }}
      >
        <Grid item lg={8} xs={12}>
          <MealType />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ my: 3 }}
      >
        <Grid item lg={9} xs={12}>
          <MealHistory />
        </Grid>
      </Grid>
    </>
  );
}
