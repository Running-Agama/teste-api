import express from 'express'
const app = express()
const porta = 2000

const coisa =[{
    id: 21,
    nome: 'imagem1',
    img: 'https://cdn.discordapp.com/attachments/1253701707028889714/1254089484694458448/d62508fa-29ee-4b32-be14-1852655b036f.png?ex=66783959&is=6676e7d9&hm=cf1389b19bc672f04560382bf78da0d9cd0266d260bc9029832d1bd021d975fc&'
},{
    id:22,
    nome: 'imagem2',
    img: 'https://media.discordapp.net/attachments/1253701707028889714/1254088988721942568/815dd813-b96f-4044-9e86-2312922e393d.png?ex=667838e2&is=6676e762&hm=5df5f706fd83eed01e2980ad4e30db5a826caf23906ccbe9ee92525c9481155d&=&format=webp&quality=lossless&width=498&height=664'
}
    ]


app.get('/', (req,res)=> {
    res.send(coisa)
})



app.post('/post', (req, res) => {
    res.send()
  });

  
app.listen(porta,()=>{
    console.log('Ta tudo lindo na porta 2000')
})

