import express from 'express'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
dotenv.config();
import connectDB from './config/db.js';
const port=process.env.PORT || 5000;

connectDB();
const app=express();

app.get('/',(req,res)=>{
    res.send('hello API');
})

app.use('/api/products', productRoutes);


app.listen(port,()=>console.log(`server is running on port ${port}`));