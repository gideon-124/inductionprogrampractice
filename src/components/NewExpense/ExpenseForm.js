import React, {useState} from 'react' 
import "./ExpenseForm.css"

const ExpenseForm = (props) => {  
    // const [input, setInput]=useState({
    //     title:"", 
    //     amount:"", 
    //     date:""
    // })
    const [title, setTitle]=useState("")  
    const[amount,setAmount]=useState("") 
    const [date,setDate]=useState("")
    
    const changeText=(e)=>{ 
        // setInput({
        //     ...input, 
        //     title:e.target.value
        // })
       setTitle(e.target.value) 
    // setInput((previousState)=>{
    //     return ({...previousState,title:e.target.value})
    // })
    } 
    const changeAmount=(e)=>{ 
        // setInput({
        //     ...input, 
        //     amount:e.target.value
        // })
        setAmount(e.target.value) 
        // setInput((previousState)=>{
        //     return ({...previousState,amount:e.target.value})
        // })
    } 
    const changeDate=(e)=>{ 
        // setInput({
        //     ...input, 
        //     date:e.target.value
        // })
       setDate(e.target.value) 
    // setInput((previousState)=>{
    //     return ({...previousState,date:e.target.value})
    // })
    } 
    const handlerSubmit=(e)=>{
       e.preventDefault() 
       const expenses={
        title:title, 
        amount:amount, 
        date: new Date(date)
       } 
       props.onSaveData(expenses)
    //    console.log(expenses, "expenses") 
       setTitle('')
       setAmount('')
       setDate('')
    }
  return ( 
    <form onSubmit={handlerSubmit}> 
    <div className='new-expense__controls'>  
    <div className='new-expense__control'> 
        <label>Title</label> 
        <input type="text" value={title} onChange={changeText}/>
    </div> 
    <div className='new-expense__control'> 
        <label>Amount</label> 
        <input type="number" min="0.01" step="0.01"value={amount} onChange={changeAmount}/>
    </div>
    <div className='new-expense__control'> 
        <label>Date</label> 
        <input type="date" min="2019-01-01" max="2023-12-31" value={date} onChange={changeDate}/>
    </div>
    </div>   
    <div className='new-expense__actions'> 
        <button type="submit">Add expense</button>
    </div>
    </form>
  )
}

export default ExpenseForm