const validation = (data) => {

    let errors = {};
    
    if(!data.email){
        errors.email = "El mail es requerido"
    } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)){
        errors.email = "Utilizar formato email";
    } else if (data.email.length > 35){
        errors.email = "Máximo de caracteres del email";
    }

    if(!data.password){
        errors.password = "La contraseña es requerida"
    } else if(!/\d/.test(data.password)){
        errors.password = "La contraseña requiere un número"
    } else if (data.password.length < 6  || data.password.length > 10){
        errors.email = "La contraseña debe tener entre 6 y 10 caracteres";
    }

    return errors;

}

export default validation;