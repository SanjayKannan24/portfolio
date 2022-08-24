import React from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DescriptionIcon from '@mui/icons-material/Description';
import InfoIcon from '@mui/icons-material/Info';
import dataScience from "../img/dataScienceImage.jpeg";

const styles = {
    container : {
        paddingTop : "5vw",
        color : grey[50],
    },
    // gridContainer : {
    //     justifyContent : "center",
    // },
    grid_one : {
        padding : "5%",
    },
    grid_two :{
        padding : "5%",
    },
    icons : {
        fontSize : "250%",
        margin : "6% 5% 0%",
        color : "white"
    },
    img : {
        width : "80%",
        display : "flex",
        margin : "auto"
    }
};
export default function About() {
  return (
    // sx={{padding: "2%"}}
    <Box maxWidth='xxl' style={styles.container} >
      <Grid style={styles.gridContainer} container spacing={2}>
        <Grid item xs={6} style={styles.grid_one}>
          <Box sx={{fontSize : "115%"}}>
            <Typography variant='h3' component={"div"}>
              Hi, I'm Sanjay Kannan
            </Typography>
            <br/>
            <Typography variant='body1'>
              Innovative person with the passion to become a Data Scientist. 
              Student of Computer programming and analysis in George Brown College, 
              inspired by the Data Science and its admirable diversities in technology. 
              My curiosity is making me to explore the core of the data science. 
              Skilled with Python, NumPy, Pandas, JavaScript.
            </Typography>
            
            <IconButton>
              <GitHubIcon style={styles.icons} 
                          onClick={() => window.open("https://github.com/SanjayKannan24", "_blank")} />
            </IconButton>

            <IconButton>
              <LinkedInIcon style={styles.icons}
                            onClick={() => window.open("https://www.linkedin.com/in/sanjay-kannan-650110211?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlUPsgvS0Qzq7eTFMUmPseA%3D%3D", "_blank")}/>
            </IconButton>

            <IconButton>
              <YouTubeIcon style={styles.icons}
                            onClick={() => window.open("https://www.youtube.com/channel/UC2Eh1dNDLWvz_-rqYBn2EHA", "_blank")}/>
            </IconButton>

            <IconButton>
              <DescriptionIcon style={styles.icons}
                              onClick={() => window.open("", "_blank")}/>
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={6} style={styles.grid_two}>
          <Box style={styles.img} component={"img"} src={dataScience}  alt='Picture of Data Science'/>
        </Grid>
      </Grid>
    </Box>
  )
}
