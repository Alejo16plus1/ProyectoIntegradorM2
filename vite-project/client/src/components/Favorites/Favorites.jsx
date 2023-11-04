import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions"
import { useState } from "react";

const Favorites = (props) =>{
    const {myFavorites} = props;
    const [aux, setAux] = useState(false);
    const dispatch = useDispatch();

    const handleOrder = (e) => {
      dispatch(orderCards(e.target.value));
      setAux(!aux);
    };

    const handleFilter = (e) => {
      dispatch(filterCards(e.target.value));
    };

    return (

        <div>
            <div>
               <select onChange={handleOrder}>
                  <option value="A">Ascendente</option>
                  <option value="D">Descendente</option>
               </select>

               <select onChange={handleFilter}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Genderless">Genderless</option>
                  <option value="unknown">Unknown</option>
               </select>
           </div>
           {myFavorites.map((character)=>{
           return (
              <Card          
                 key={character.id} 
                 name={character.name} 
                 status={character.status} 
                 species={character.species} 
                 gender={character.gender} 
               //   origin={character.origin.name}
                 image={character.image}
                //  onClose={onClose}
                 id={character.id}
              />
              );
           })}
        </div>
        );
};

const mapStateToProps = (state) => {
    return {myFavorites: state.myFavorites}
}

export default connect(mapStateToProps, null)(Favorites);