import React from 'react';
import { Container, Grid } from '@mui/material';
import { EntryScreenBtn } from 'app/containers/EntryScreenBtn';
import { BodyFatPercentageGraph } from 'app/containers/BodyFatPercentageGraph';
import { ExerciseRecords } from 'app/containers/ExerciseRecords';
import { Diary } from 'app/containers/Diary';
import MyRecommend1 from 'assets/images/MyRecommend-1.jpg';
import MyRecommend2 from 'assets/images/MyRecommend-2.jpg';
import MyRecommend3 from 'assets/images/MyRecommend-3.jpg';

export function MyRecord() {
  return (
    <Container maxWidth="lg">
      <Grid container columnSpacing={{ lg: 5, xs: 0 }} sx={{ my: 8 }}>
        <Grid item lg={4} xs={12}>
          <EntryScreenBtn
            entryScreen="Body Record"
            btnText="自分のカラダの記録"
            background={MyRecommend1}
          />
        </Grid>
        <Grid item lg={4} xs={12}>
          <EntryScreenBtn
            entryScreen="My Exercise"
            btnText="自分のカラダの記録"
            background={MyRecommend2}
          />
        </Grid>
        <Grid item lg={4} xs={12}>
          <EntryScreenBtn
            entryScreen="My Diary"
            btnText="自分のカラダの記録"
            background={MyRecommend3}
          />
        </Grid>
      </Grid>
      <Grid container sx={{ my: 8 }}>
        <Grid item xs={12}>
          <BodyFatPercentageGraph />
        </Grid>
      </Grid>
      <Grid container sx={{ my: 8 }}>
        <Grid item xs={12}>
          <ExerciseRecords />
        </Grid>
      </Grid>
      <Grid container sx={{ my: 8 }}>
        <Grid item xs={12}>
          <Diary />
        </Grid>
      </Grid>
    </Container>
  );
}
