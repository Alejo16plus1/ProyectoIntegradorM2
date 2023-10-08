import { useState } from 'react';
import styles from './Form.module.css'
import validation from './validation';

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setErrors(validation({...userData, [event.target.name]:event.target.value}));
        setUserData({...userData, [event.target.name]:event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return(
        <div className={styles.primerDiv}>
            <form onSubmit={handleSubmit}>
                <div className={styles.segundoDiv}>
                    <h2>Login</h2>
                    <label className={styles.text} htmlFor="email">Email:</label>
                    <input type="text" name="email" value={userData.email} onChange={handleChange}/>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.segundoDiv}>
                    <label className={styles.text} htmlFor="password">Password:</label>
                    <input type="text" name="password" value={userData.password} onChange={handleChange}/>
                    {errors.password &&<span>{errors.password}</span>  }              
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;