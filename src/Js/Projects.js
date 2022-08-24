import React from 'react';
import { Box, Button, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

// Import Data.json file
import {projects} from "./Data";

const styles = {
    container : {
        paddingTop : "5%",
        textAlign : "center",
        color : grey[50],
        // width : "100%"
    },
    icon : {
        fontSize : "5%"
    },
    gridContainer : {
        justifyContent : "center",
        margin : "5% auto auto",
        // width : "80%"
    },
    gridItem : {
      textAlign : "left",
      width : "30%",
      // padding : "1%",
      margin : "0% 5% 5%",
      background : grey[800],
      // boxShadow :"-0.1px -0.1px 30px -3px black",
      borderRadius : "10px"
    },
    buttonGrid : {
      textAlign : "center",
      marginTop : "5%" , 
      width : "100%"
    },
    button : {
      margin : "auto 8%"
    }
};
export default function Projects() {
  return (
    <Box id="projects" style={styles.container}>
      <AccountTreeIcon sx={{fontSize : "250%"}}/>
      <Typography variant='h4'>Projects</Typography>

      <Grid style={styles.gridContainer} container spacing={0} >
        {projects.map((data) => {
          return(
            <Grid style={styles.gridItem}>
              {/* <Box sx={{height : "5vw"}}></Box> */}

              <CardMedia
                component={"img"}
                borderRadius="10%"
                height="fit-content"
                image={data.imageUrl}
                alt = {data.title}>
              </CardMedia>

              <CardContent>
                <Typography variant='body1'><strong style={{fontSize : "20px"}}>{data.title}</strong> {data.description}</Typography>
                
                <Typography variant='body1'><strong><i>Tools</i></strong> : {data.tools}</Typography>

                <Grid style={styles.buttonGrid}>
                  <Button variant='contained' style={styles.button}>Visit</Button>
                  <Button variant='contained' style={styles.button}>GitHub</Button>
                </Grid>
                
              </CardContent>
            </Grid>
            
            
          )
        })}
      </Grid>

      
    </Box>
  )
}
