const axios = require('axios')

const URL = process.env.URL;

exports.getCharById = async (req, res) =>{

    try{

        const { id } = req.params;

        const {data} = await axios.get(`${URL}${id}`);

        if(data){
            let character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin.name,
                image: data.image,
                status: data.status,
            };
            res.status(200).json(character);
        }else{
            res.status(404).json({message: "Not found"});
        }

    } catch (error){
        res.status(500).json({message: error.message})
    }
}

// exports.getCharById = (req, res) =>{

//     const { id } = req.params;

//     axios.get(`${URL}${id}`)
//     .then((response) => {
//         if(response.data){
//             const ch = response.data;

//             let character = {
//                 id: ch.id,
//                 name: ch.name,
//                 gender: ch.gender,
//                 species: ch.species,
//                 origin: ch.origin.name,
//                 image: ch.image,
//                 status: ch.status,
//             };
//             res.status(200).json(character);
//         }
//         else{
//             res.status(404).json({message: "Not found"});
//         }
//     })
//     .catch((error) => {
//         res.status(500).json({message: error.message});
//     })
// };


// exports.getCharById = (res, id) =>{

//     axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//         const ch = response.data;

//         return {
//             id,
//             name: ch.name,
//             gender: ch.gender,
//             species: ch.species,
//             origin: ch.origin.name,
//             image: ch.image,
//             status: ch.status,
//         };
//     })
//     .then((response) => {
//         res.writeHead(200, {"Content-Type": "application/json"});
//         res.end(JSON.stringify(response));
//     })
//     .catch((reason) => {
//         res.writeHead(500, {"Content-Type": "text/plain"});
//         res.end(reason.response.data.error)
//     })
// };