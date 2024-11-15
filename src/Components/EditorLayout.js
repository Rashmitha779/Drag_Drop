import React from "react";
import {Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import MainPage from "./MainPage";

const EditorLayout = () => (
  <Grid container>
    <Grid item xs={3}>
      <Sidebar />
    </Grid>
    <Grid item xs={9}>
      <MainPage />
    </Grid>
  </Grid>
);

export default EditorLayout;
