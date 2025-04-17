const express=require('express');
require('dotenv').config()
const aiRoutes=require('./src/routes/ai.routes')
const app=express();
const cors=require('cors');

app.use(cors());

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use('/ai',aiRoutes);

app.listen(3000,()=>{
    console.log(`Server is running: http://localhost:3000`)
})