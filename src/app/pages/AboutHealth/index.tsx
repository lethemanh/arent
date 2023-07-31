import React from 'react';
import { Container, Grid } from '@mui/material';
import { Recommend } from 'app/containers/Recommend';
import { PostList } from 'app/containers/PostList';

export function AboutHealth() {
  return (
    <Container maxWidth="lg">
      <Grid container columnSpacing={{ lg: 5, xs: 0 }} sx={{ my: 8 }}>
        <Grid item lg={3} xs={12}>
          <Recommend recommendType="RECOMMENDED COLUMN" actionText="オススメ" />
        </Grid>
        <Grid item lg={3} xs={12}>
          <Recommend recommendType="RECOMMENDED DIET" actionText="ダイエット" />
        </Grid>
        <Grid item lg={3} xs={12}>
          <Recommend recommendType="RECOMMENDED BEAUTY" actionText="美容" />
        </Grid>
        <Grid item lg={3} xs={12}>
          <Recommend recommendType="RECOMMENDED HEALTH" actionText="健康" />
        </Grid>
      </Grid>
      <Grid container sx={{ my: 8 }}>
        <Grid item xs={12}>
          <PostList />
        </Grid>
      </Grid>
    </Container>
  );
}
