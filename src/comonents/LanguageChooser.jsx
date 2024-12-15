import { useContext } from "react";
import "../styles/LanguageChooser.css"
import {languageContext} from "../contexts/languageContext"
import Flag from 'react-world-flags';

export const LanguageChooser=()=>{
    const {language, setLanguage}=useContext(languageContext)
    const handleSelectChange = (event) => {
        setLanguage(event.target.value);
    }
    console.log(language)
    return(
        <div>
        <select id="languages" value={language} onChange={handleSelectChange}>
            <option value="GER">{'\uD83C\uDDE9\uD83C\uDDEA' }&nbsp;&nbsp;German</option>
            <option value="ENG">{'\uD83C\uDDFA\uD83C\uDDF8' }&nbsp;&nbsp;English</option>
            <option value="TUR">{ '\uD83C\uDDF9\uD83C\uDDF7' }&nbsp;&nbsp;Turkish</option>
            <option value="PER">{ '\uD83C\uDDEE\uD83C\uDDF7' }&nbsp;&nbsp;Persian</option>
            <option value="FRE">{ '\ud83c\udde8\ud83c\uddf5' }&nbsp;&nbsp;French</option>
            <option value="SPA">{ '\ud83c\uddea\ud83c\uddf8' }&nbsp;&nbsp;Spanish</option>
        </select>
    </div>
    ) 
}