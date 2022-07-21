import React from 'react'
import './App.css'
import Header from './component/Header'
import Balance from './component/Balance'
import IncomeExpenses from './component/IncomeExpenses'
import TransactionList from './component/TransactionList'
import AddTransaction from './component/AddTransaction'


import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  )
}

export default App
