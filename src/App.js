import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


function App() { 
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const data=[
    {
      id:1, 
      name:"Chetan", 
      price:"10",
      date:10-12-2023
    },
    {
      id:2, 
      name:"Babu", 
      price:"20",
      date:10-12-2023
    },
    {
      id:3,  
      name:"karthik", 
      price:"30",
      date:10-12-2023
    }
  ] 
  const dataHandler=(mainData)=>{ 
    // const expenseData={
    //   ...mainData,
    //   id:Math.random().toString()
    // } 
    console.log(mainData)

  }
  return (
    <div>   
      <NewExpense onData={dataHandler}/>
      {expenses.map((i)=>{
       return <Expenses title={i.title} amount={i.amount} date={i.date}/>
      })}
      {/* <Expenses/> */}
      {/* {data.map((n)=>{
        return <Expenses name={n.name} price={n.price} date={n.date}/>
      })} */}
      
    </div>
  );
}

export default App;
