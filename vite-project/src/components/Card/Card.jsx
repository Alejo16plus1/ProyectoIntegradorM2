import styles from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   // const {name, status, species, gender, origin, image} = props
   return (
      <div className={styles.cardContainer}>
         <div className={styles.header}>
            <button onClick={()=>onClose(id)}>X</button>
            <img src={image} alt='imagen' />
         </div>
         <div
         className={styles.wrapperText}>
           <Link to={`/detail/${id}`} >
            <h1 className={styles.name}>{name}</h1>
            </Link>
            {/* <h2>{status}</h2> */}
            <h2>{species}</h2>
            <h2>{gender}</h2>
            {/* <h2>{origin}</h2> */}
         </div> 
      </div>
   );
}
