import React from 'react';
import { Box, Grid, Typography} from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { grey } from '@mui/material/colors';

import {skills} from "./Data";

const styles = {
    container : {
      paddingTop : "8%",
      textAlign : "center",
      color : grey[50],
    },
    gridContainer : {
      margin : "3% auto auto",
      width : "60%",
    },
    gridItem : {
      width : "20%",
      margin : "3% 5%",
      background : "#27272a",
      borderRadius : "10px",
      
    }
};
export default function Skills() {
  return (
    <Box id='skills' style={styles.container}>
        <PsychologyIcon sx={{fontSize : "250%"}}/>
        <Typography variant='h4'>Skills</Typography>

        <Grid style={styles.gridContainer} container spacing={0}>
            {skills.map((data) => {
            return(
              // <img src={data.imageUrl}/>
              <Box style={styles.gridItem}>
                <img src={data.imageUrl}/>
                <Typography variant='h5' sx={{margin:"0.5vw auto"}}>{data.skill}</Typography>
              </Box>
              
                // <Box style={styles.gridItem}>
                // <Typography variant='h5' sx={{margin:"0.5vw auto"}}>{data.skill}</Typography>
                // </Box>
            )
            })}
        </Grid>
      
    </Box>
  )
}
