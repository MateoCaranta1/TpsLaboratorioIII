import './App.css'
import Tablex from './components/tablex/Tablex';


const netIncomes = [
  { brand: 'McDonalds', income: 1291283 },
  { brand: 'Burger King', income: 1927361 },
  { brand: 'KFC', income: 1098463 }
];

function App() {
  
  return (
    <>
      <Tablex netIncomes ={netIncomes}/>
    </>
  )
}

export default App
