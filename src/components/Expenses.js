import React, {useState} from 'react'
import './Expenses.css'
import Date from './Date';
const Expenses = (props) => { 
    // const month = props.date.toLocaleString('en-US', { month: 'long' });
    // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    // const year = props.date.getFullYear();  
    const [title,setTitle]=useState(props.title) 
    console.log("cc, bb, aa")
    const handlerClick=()=>{ 
        setTitle('updated!!!!')
        console.log(title)
    }
   
  return (
    <div className='expense-item'>
       <Date date={props.date}/>
    {/* <div>{props.date.toISOString()}</div> */}
    <div className='expense-item__description'>
      <h2>{title}</h2>
      <div className='expense-item__price'>${props.amount}</div> 
      <button onClick={handlerClick}> change tab </button>
    </div>
  </div>
    // <div className='expense-item'>
    //   <div>{expenseDate.toISOString()}</div>
    //   <div className='expense-item__description'>
    //     <h2>{expenseTitle}</h2>
    //     <div className='expense-item__price'>${expenseAmount}</div>
    //   </div>
    // </div>
    // <div className='expense-item'>  
    // <div> {props.date}</div>
    //     <div className='expense-item__description'>
    //          <h2>{props.name}</h2>
    //    </div>
    //    <div className='expense-item__price'> {props.price}</div>
    // </div>
  )
}

export default Expenses