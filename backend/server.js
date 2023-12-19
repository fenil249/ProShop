import express from 'express'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const port=process.env.PORT || 5000;

connectDB();
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('hello API');
})

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);


app.listen(port,()=>console.log(`server is running on port ${port}`));