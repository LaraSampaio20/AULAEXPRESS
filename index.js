const express = require('express');
const res = require('express/lib/response');

const app = express()

const user = [{id:13, nome: 'Lara', sobrenome:'Sampaio'}, {id:14, nome: 'Jeferson', sobrenome:'Gonzales'}];

app.get("/",(req, res)=>{
    res.send(user)
});

app.get('/ user:id', (req, res) =>{
    const {id} = req.params
    const aux = user.find((user) => user.id == id)

    res.send(aux)
})

app.listen(3000)