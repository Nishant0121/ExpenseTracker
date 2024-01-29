
import {useAddTrans} from "../../hooks/useAddTrans";
import {useState} from "react";
import { useGetUserInfo } from "../../hooks/useGetUserinfo";
import "./addtrans.css";







export const AddTrans =()=>{
    const {addtrans}=useAddTrans();
    const {name}=useGetUserInfo();
    
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState();
    const [type,setType]=useState('expense');
    
    
    const onSubmit = (e)=>{
        e.preventDefault();
        addtrans({
            title,
            amount,
            type
        });

        setTitle("");
        setAmount("");
    }
    
    
    
    return( 
       <div className="add">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <h2 className="navbar-brand">Add Trans</h2>
            <form className="d-flex" role="search">
              <h3>{name}</h3>
            </form>
          </div>
        </nav>
        <div className="form">
          <form onSubmit={onSubmit} className="inputs d-flex">
            <label class="form-label" htmlFor="discription">Discription</label>
              <input class="form-control"  type="text" id="discription" placeholder="Enter Description" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
            <label class="form-label" htmlFor="amount">Amount</label>
              <input class="form-control"  type="number" id="amount" placeholder="Enter Amount" value={amount} onChange={(e)=>setAmount(e.target.value)} required/>
              <div className="radio d-flex">
                <div className="in p-1 m-2">
                  <input
                  class="form-check-input p-1 m-2"
                    type="radio"
                    id="expense"
                    value="expense"
                    checked={type === "expense"}
                    onChange={(e) => setType(e.target.value)}
                  />
                  <label class="form-check-label" htmlFor="expense"> Expense</label>
                </div>
                <div className="ex p-1 m-2">
                  <input
                  class="form-check-input p-1 m-2"
                    type="radio"
                    id="income"
                    value="income"
                    checked={type === "income"}
                    onChange={(e) => setType(e.target.value)}
                  />
                  <label class="form-check-label" htmlFor="income"> Income</label>
                </div>
              </div>
              <button type="submit" className="btn btn-success m-1">Add</button>
              
          </form>
        </div>
       </div>
    )
};