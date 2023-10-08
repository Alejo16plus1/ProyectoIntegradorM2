import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards({characters, onClose}) {
   return (
   <div className={styles.wrapperCards}>
      {characters.map((character)=>{
      return (
         <Card          
            key={character.id} 
            name={character.name} 
            status={character.status} 
            species={character.species} 
            gender={character.gender} 
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
            id={character.id}
         />
         );
      })}
   </div>
   );
}
