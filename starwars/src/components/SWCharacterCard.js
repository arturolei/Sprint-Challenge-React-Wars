import React from "react";
import "./StarWars.css";

const SWCharacterCard = props => {
    return(
        <div className="sw-character-card">
        
            <h2>{props.characterData.name}</h2>

            <ul>
                <li><strong>Born:</strong> {props.characterData.birth_year}</li>
                <li><strong>Gender:</strong> {props.characterData.gender}</li>
                <li><strong>Hair Color:</strong> {props.characterData.hair_color}</li>
                <li><strong>Height:</strong> {props.characterData.height}</li>
                <li><strong>Mass:</strong> {props.characterData.mass}</li>
                <li><strong>Skin Color:</strong> {props.characterData.skin_color}</li>
            </ul>

        </div>
    )
}

export default SWCharacterCard