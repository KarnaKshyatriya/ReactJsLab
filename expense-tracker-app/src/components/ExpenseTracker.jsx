import React, { useState } from 'react'
import { pushData } from '../services/fetch';

export default function ExpenseTracker() {
    const [payee,setPayee]=useState('ramesh');
    const [price,setPrice]=useState(20);
    const [product,setProduct]=useState();
    const [date,setDate]=useState();
    const submitHandler=async(e)=>{
        e.preventDefault();
    const data=await pushData(payee,date,price,product);
    console.log(data);
    }
  return (
    <div>
        <form onSubmit={e=>{submitHandler(e)}}>
            <p>Name: </p>
            <div>
            <select name="payee" value={payee} onChange={e=>setPayee(e.target.value)}>
                <option value="ramesh">Ramesh</option>
                <option value="rahul">Rahul</option>
            </select>
            </div>
            <div>
                <p>Product Purchased</p>
                <input type="text" name="product" value={product} onChange={e=>setProduct(e.target.value)}/>
            </div>
            <div>
                <p>Price</p>
                <input type="text" name="price" value={price} onChange={e=>setPrice(parseInt(e.target.value))}/>
            </div>
            <div>
                <p>Date</p>
                <input type="date" name="date" value={date} onChange={e=>setDate(e.target.value)}/>
            </div>
            <div>
            <input type="submit"/> 
            </div>
        </form>
        
    </div>
  )
}
