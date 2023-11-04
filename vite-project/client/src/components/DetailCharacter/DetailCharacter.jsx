import styles from './DetailCharacter.module.css'
const DetailCharacter = ({name, status, species, gender, origin, image}) => {
    return(
        <div className={styles.primerDiv}>
            <div className={styles.imagen}>
                <img src={image}/>
            </div>
            <div className={styles.datos}>
                <h2>Name: {name}</h2>
                <h3>Status: {status}</h3>
                <h3>Species: {species}</h3>
                <h3>Gender:{gender}</h3>
                <h3>Origin: {origin}</h3>
            </div>
        </div>
    )
}

export default DetailCharacter;