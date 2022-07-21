import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'


const AddTransaction = () => {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0)


  const {addTransaction} =useContext(GlobalContext)

  const onSubmit =(e) => {
    e.preventDefault()

    if(!text,  !amount){
      alert('Please Add Transaction')
      return
    }

    const newTransaction={
      id:Math.floor(Math.random() *100000000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction)

    setAmount(0)
    setText("")
  }



  return (
    <>
    <h3>Add Tansaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Add Text</label>
          <input type="text" placeholder='Input a Text' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount <br/> (nagative - expense, positive-income)</label>
          <input type="number" placeholder='Input Amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>

        <button className='btn'>Add Transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
