import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import Item from '@mui/material/Item';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Embedding from '../../Carousel/Embedding.png';
import Extraction from '../../Carousel/Extraction.png';
import Paper from '@mui/material/Paper';

import { Link } from "react-router-dom";


const steps = ['上傳檔案', '等待嵌入', '取得圖片 '];






export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [retData, setRetData] = React.useState({});


  return (
    <>
      <Typography component="h1" variant="h4" align="center">
        <u>資訊隱藏與隱寫術</u>
      </Typography>

      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <a href={"/EmbeddingImage"}>
            <Paper color="inherit" variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
              <img src={Embedding} style={{ width: '100%', height: 'auto' }} />

            </Paper>
          </a>
        </Grid>
        <Grid item md={6} xs={12}>
          <a href={"/EmbeddingImage"}>
            <Paper color="inherit" variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
              <img src={Extraction} style={{ width: '100%', height: 'auto' }} />
            </Paper>
          </a>
        </Grid>
      </Grid>
    </>
  );
}