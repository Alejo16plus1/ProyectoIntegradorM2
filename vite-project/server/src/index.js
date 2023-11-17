const server = require("./server");
const PORT = process.env.PORT || 3001;
const {conn} = require('./DB_connection');

// conn.sync({})
// .then(() => {
//     server.listen(PORT, () => {
//         console.log('Server raised in port: ' + PORT);
//      });
// })
// .catch((error) => console.log(error))

try {
    server.listen(PORT, async () => {
        console.log("Server raised in port: " + PORT);
        await conn.sync({})
    });
} catch (error) {
    console.log(error)
}




// const http = require('http');
// const PORT = 3001
// const characters = require("./utils/data")

// const {getCharById} = require('./controllers/getCharById')

// http
//     .createServer((req, res) =>{
//     const { url } = req;

//     res.setHeader('Access-Control-Allow-Origin', '*');

    // if(url.includes("/rickandmorty/character")){
    //     let urlArray = url.split("/")
    //     let id = Number(urlArray.pop())

    //     let foundCharacter = characters.find((ch)=> ch.id === id)

    //     if(foundCharacter){
    //     res.writeHead(200, {"Content-Type": "application/json"});
    //     res.end(JSON.stringify(foundCharacter))
    //     } else {
    //     res.writeHead(404, {"Content-Type": "application/json"});
    //     res.end(JSON.stringify({error: "character not found"}))
    //     }
    // }

//     if(url.includes("/rickandmorty/character")){
//         let urlArray = url.split("/");
//         let id = Number(urlArray.pop());
//         getCharById(res, id)
//     }
// })
// .listen(PORT, 'localhost');