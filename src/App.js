import './App.css';
import { Box } from '@mui/material';
import Navbar from "./Js/Navbar";
import About from "./Js/About";
import Projects from "./Js/Projects";
import Skills from "./Js/Skills";
import Assets from "./Js/Assets";
import HireMe from "./Js/HireMe";

const styles = {
  body : {
    // padding : "0.3%",
    background: "#18181b",
  },
};

function App() {
  return (
    <Box style={styles.body} >
      <Navbar/>
      <About/>
      <Projects/>
      <Skills />
      <Assets/>
      <HireMe/>
    </Box>
  );
}

export default App;
