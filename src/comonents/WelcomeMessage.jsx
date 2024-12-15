import { useContext} from "react"
import {languageContext} from "../contexts/languageContext"
import "../styles/WelcomeMessage.css"

export const WelcomeMessage=()=>{
    const messages={
        GER:"Hallo Welt",
        ENG:"Hallo world",
        TUR: "Selam Dünya",
        PER:"سلام دنیا",
        FRE: "Bonjour le monde!",
        SPA: "Hola Mundo!",
    }
    const{language}=useContext(languageContext)
    return(
        <div className="msg">
            <p>{messages[language]}</p>
        </div>
    );
};