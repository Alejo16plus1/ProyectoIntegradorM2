import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DetailCharacter from "../DetailCharacter/DetailCharacter";

const DetailsCharacters = () => {
    
    const [character, setCharacter] = useState({})
    
    const {id} = useParams()

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
            <DetailCharacter
                name={character?.name}
                status={character?.status}
                species={character?.species}
                gender={character?.gender}
                origin={character?.origin?.name}
                image={character?.image}
            />
        </div>
    )
}

export default DetailsCharacters;