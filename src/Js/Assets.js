import React from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { grey } from '@mui/material/colors';

import {assets} from "./Data";

const styles = {
    container : {
      paddingTop : "8%",
      textAlign : "center",
      color : grey[50],
    },
    gridContainer : {
      margin : "3% auto auto",
      justifyContent : "center",
      width : "70%",
    },
    card : {
      width : "30%",
      margin : "3% 5%",
      background : "#27272a",
      color : grey[50],
      borderRadius : "10px",
      textAlign : "left",
    }
};

export default function Assets() {
  return (
    <Box id = "assets" style={styles.container}>
      <SchoolIcon sx={{fontSize : "250%"}}/>
      <Typography variant='h4'>Assets</Typography>

      <Grid style={styles.gridContainer} container spacing={0}>
        {assets.map((data) => {
          return(
            <Card style={styles.card}>
              <CardMedia
                component={"img"}>
              </CardMedia>

              <CardContent>
                <Typography variant='h5'>{data.institute}</Typography>
                <Typography variant='body1'>{data.program}</Typography>
                <Typography>{data.durationAndCategory}</Typography>
                <Typography>{data.gpa} GPA</Typography>
              </CardContent>
            </Card>
          )
        })}
      </Grid>
    </Box>
  )
}
