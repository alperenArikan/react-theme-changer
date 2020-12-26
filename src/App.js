import './App.css';
import React,{useState,useEffect} from "react"
import Changer from "./Changer"
import moon from "./assets/1670174.png"
import sun from "./assets/pngkit_sun-png_14944.png"
function App() {

  const darkTheme = {
    theme: "dark",
    backgroundColor: "#000",
    color: "#fff",
    borderColor: "green"
  }
  const lightTheme = {
    theme: "light",
    backgroundColor: "#fff",
    color: "#000",
    borderColor: "red"
  }


  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    console.log(theme)
  }, [theme]);

  const themeHandler = () =>{
    setTheme(theme.theme === "dark" ? lightTheme : darkTheme)
    console.log("change")
  }


  return (
    <div style={theme} className="App">
      <Changer themeHandler={themeHandler} theme={theme} />
      {theme.theme === "dark" ?
      <img className="main-moon" src={moon} alt=""/>
      : <img className="main-sun" src={sun} alt=""/> }
      
    </div>
  );
}

export default App;
