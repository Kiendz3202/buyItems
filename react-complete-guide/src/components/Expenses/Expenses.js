import React from "react"
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import ExpenseForm from "../NewExpense/ExpenseForm";


function Expenses(props){

    return (
        <Card className="expenses">
            {props.items.map((expense) => (
                <ExpenseItem key={expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date}/>
            ))}
            
        </Card>
    )
}

export default Expenses;
      


      
      