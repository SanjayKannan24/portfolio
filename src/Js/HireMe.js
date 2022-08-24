import React from 'react';
import { Typography , Box, TextField, Button, Grid} from '@mui/material';
import emailjs from '@emailjs/browser';
import { grey , blue} from '@mui/material/colors';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import email_form from "../img/postcard.jpg";
import SendIcon from '@mui/icons-material/Send';

const theme = createTheme({
    palette:{
        primary : {
            main : blue[800]
        },
        secondary:{
            main: grey[900],
        }
    }
});

const styles = {
    container : {
        paddingTop : "8%",
        textAlign : "center",
        color : grey[50],
    },
    gridContainer : {
        margin : "3% auto auto",
        justifyContent : "center",
    },
    myContact : {
        width : "35%",
        margin : "1%",
        background : "blue"
    },
    emailForm : {
        width : "35%",
        margin : "1%",
        paddingTop : "1%",
        textAlign : "center",
        backgroundImage : `url(${email_form})`,
        backgroundSize : "cover"
    },
    textField : {
        width : "80%",
        margin : "2%",
    },
    tag : {
        color : "black",
        fontSize : "600%",
        fontFamily : "Brush Script MT"
    }
};
export default function HireMe() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_660u0m9', e.target, "pBZU_4yzgrmRXbAow")
            .then((result) => {
                console.log("Success" , result);
            }, (error) => {
            console.log("Failed" , error);
        });
        e.target.reset();
    };

  return (
    <Box id = "hireme" style={styles.container}>
        <ConnectWithoutContactIcon sx={{fontSize : "250%"}}/>
        <Typography variant='h4'>Hire Me</Typography>

        <Grid style={styles.gridContainer} container spacing={0}>
            <Box style={styles.myContact}>
                <Typography>hello</Typography>
            </Box>
            <Box style={styles.emailForm} component={"form"} onSubmit={sendEmail}>
                <Typography style={styles.tag} >Send Me</Typography>
                <ThemeProvider theme={theme}>
                    <TextField style={styles.textField}
                        required
                        focused
                        label="From"
                        name='from_email'
                        color='secondary'
                        />
                    <TextField style={styles.textField} 
                        required 
                        focused
                        color='secondary'
                        label="To" 
                        defaultValue="sanjaykannan389@gmail.com"
                        name='to_email'
                        InputProps={{
                        readOnly : true,
                        }}></TextField>
                    <TextField style={styles.textField} 
                        required 
                        focused
                        color='secondary'
                        label="Company Name" 
                        name='name'/>
                    <TextField style={styles.textField} 
                        required 
                        focused
                        color='secondary'
                        label="Message" 
                        name='message'/>
                    <br/>
                    <Button type='submit' endIcon={<SendIcon/>} 
                    color = "primary"
                    sx={{
                        width : "fitContent" , 
                        margin : "1% 0% 5% 60%",
                        border : "2px solid #1565c0"}}>Send</Button>
                </ThemeProvider>
            </Box>
        </Grid>
        
    </Box>
  )
}
