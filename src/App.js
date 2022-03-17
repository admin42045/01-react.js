import './App.css';
import Header from './Components/Header';
import ExpenseItem from './Components/ExpenseItem';
import Footer from './Components/Footer';

function App() {
  let expenses = [
     {
       id: 'e1',
       title: 'Shopping for Clothing',
       price: 750,
       date: new Date(2022,1,21)
     },

     {
       id: 'e2',
       title: 'Mobile Recharge',
       price: 20,
       date: new Date(2022,2,1)
     },

     {
       id: 'e3',
       title: 'Room rent',
       price: 2300,
       date: new Date(2022,3,4)
     },

     {
       id: 'e4',
       title: 'Purchage for laptop',
       price: 29999,
       date: new Date(2022,3,11)
     },
  ];

   return (
     <div>
       <Header/>
       <ExpenseItem date={expenses[0].date} title={expenses[0].title} price={expenses[0].price}></ExpenseItem>
       <ExpenseItem date={expenses[1].date} title={expenses[1].title} price={expenses[1].price}></ExpenseItem>
       <ExpenseItem date={expenses[2].date} title={expenses[2].title} price={expenses[2].price}></ExpenseItem>
       <ExpenseItem date={expenses[3].date} title={expenses[3].title} price={expenses[3].price}></ExpenseItem>
       <Footer/>
     </div>
   );
}

export default App;
