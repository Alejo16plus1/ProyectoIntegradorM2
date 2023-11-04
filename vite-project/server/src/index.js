require('dotenv').config();
const express = require('express');
const server = express();
const routes = require("./routes/index");



const PORT = process.env.PORT || 3001;

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json())

 server.use("/rickandmorty", routes);

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});


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