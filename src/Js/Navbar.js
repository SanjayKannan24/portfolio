import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SchoolIcon from '@mui/icons-material/School';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PsychologyIcon from '@mui/icons-material/Psychology';
// import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { grey , yellow } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';


const theme = createTheme({
    palette:{
      secondary:{
        main: yellow[500]
      }
    }
});

const styles = {
    navBar : {
        background : "#27272a",
        width : "100%",
        // marginBottom : "5%",
        position : "fixed",
        top : 0,
        // left : 3,
        // right : 3,
    },
    navHead : {
        color: grey[50],
        fontWeight: 'bold',
        fontSize : '18px',
    },
    divider : {
        border: "1px solid gray",
        background: "gray",
        height: "4vh",
        margin: "auto 1vh",
  
    },
    nav : {
        color: grey[50],
        fontSize : "16px",
    },
    hire : {
        color: grey[50],
        marginLeft : "auto",
        fontSize : "16px",
    }
};
export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box style={styles.navBar}>
      <ThemeProvider theme={theme}>
        <Tabs indicatorColor='secondary' value={value}  onChange={handleChange} aria-label="icon label tabs example">
          <Tab className='page' href='/' value={0} style={styles.navHead} label="SANJAY KANNAN"/>
          <Box style={styles.divider} id='divider'></Box>
          <Tab className='page' href='#projects'sx={{marginLeft: "auto"}} value={1} style={styles.nav} icon={<AccountTreeIcon/>} label="PROJECTS"/>
          <Tab className='page' href='#skills' value={2} style={styles.nav} icon={<PsychologyIcon/>} label="Skills"/>
          <Tab className='page' href='#assets' value={3} style={styles.nav} icon={<SchoolIcon/>} label="Assets"/>
          <Tab className='page' href='#hireme' value={4} style={styles.hire} iconPosition="end" icon={<ArrowRightIcon/>} label="Contact" />
        </Tabs>
      </ThemeProvider>
    </Box>
  )
}
