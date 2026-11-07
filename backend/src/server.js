import express from 'express'
import cors from 'cors'
const app=express()
app.use(cors())
app.use(express.json())
app.get('/api/health',(req,res)=>res.json({status:'ok', brand:'STANDOUTCLOTHING101', location:'West Legon'}))
app.get('/api/products',(req,res)=>res.json([
  {id:1,name:'Standout Oversized Hoodie',price:350,currency:'GHS',category:'Hoodies',img:'/images/hoodie-black.webp'},
  {id:2,name:'Baggy Denim Jeans',price:420,currency:'GHS',category:'Jeans',img:'/images/jeans-baggy.webp'},
  {id:3,name:'Essential White Tee',price:150,currency:'GHS',category:'Tees',img:'/images/flatlay.webp'},
  {id:4,name:'Cargo Pants',price:380,currency:'GHS',category:'Jeans'},
  {id:5,name:'Street Jacket',price:550,currency:'GHS',category:'Jackets'},
  {id:6,name:'Standout Cap',price:120,currency:'GHS',category:'Caps'}
]))
app.post('/api/orders',(req,res)=>res.json({ok:true, message:'Order received', data:req.body}))
if (!process.env.VERCEL) {
  app.listen(process.env.PORT || 5000, () => console.log('STANDOUTCLOTHING101 Backend running'))
}

export default app
