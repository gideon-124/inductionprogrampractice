import React from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => { 
    const saveDataHandler=(expenseValues)=>{ 
       const expensesData={
        ...expenseValues,  
        id:Math.random().toString()
       }
    //    console.log(expensesData)
       props.onData(expensesData)
       }
    
  return (
    <div className='new-expense'> 
      <ExpenseForm onSaveData={saveDataHandler}/>
    </div>
  )
}

export default NewExpense