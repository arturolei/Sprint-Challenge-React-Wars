import React from 'react';
import './StarWars.css';
import SWCharacterCard from './SWCharacterCard';

const SWCharList = props => {
    return (
        <div className="sw-list-body">
            {props.swCharData.map(SWCharacter => 
                <SWCharacterCard key={SWCharacter.created} characterData={SWCharacter}/>
                )}
        </div>
    )
}

export default SWCharList;