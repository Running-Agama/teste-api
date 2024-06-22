import express from 'express'
const app = express()
const porta = 2000

const coisa =[{
    id: 21,
    nome: 'imagem1',
    img: 'https://cdn.discordapp.com/attachments/1253701707028889714/1254089484694458448/d62508fa-29ee-4b32-be14-1852655b036f.png?ex=66783959&is=6676e7d9&hm=cf1389b19bc672f04560382bf78da0d9cd0266d260bc9029832d1bd021d975fc&'
}]

app.get('/', (req,res)=> {
    res.send(coisa)
})

app.listen(porta,()=>{
    console.log('Ta tudo lindo na porta 2000')
})

