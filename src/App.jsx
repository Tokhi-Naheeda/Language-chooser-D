import {useState} from "react"
import "./App.css"
import {languageContext} from "./contexts/languageContext"
import {Header } from "./comonents/Header"
import {Content} from "./comonents/Content"
function App() {
const [language, setLanguage]=useState(" ");
  return (
  <languageContext.Provider value={{language, setLanguage}}>
    <Header/>
    <Content/>

  </languageContext.Provider>
  )
}

export default App;
