const express = require('express');


const app = express()
const bodyParse = require('bodyParse');

const jsonParse = bodyParse.json()

const user = [{id:13, nome: 'Lara', sobrenome:'Sampaio'}, {id:14, nome: 'Jeferson', sobrenome:'Gonzales'}];

app.get("/",(req, res)=>{
    res.send(user)
});

app.get('/ user:id', (req, res) =>{
    const {id} = req.params
    const aux = user.find((user) => user.id == id)

    res.send(aux)
})
app.post('/user', jsonParse,(req,res)=>{
    console.log(req.body)
    const novoUser = req.body;
    user.push(novoUser)
    res.send(user)
})

app.delete('/user/:index', jsonParse,(req,res)=>{
    const index = req.params
    user.splice(index, 1)
    
    res.send(user)

})

app.listen(3000)