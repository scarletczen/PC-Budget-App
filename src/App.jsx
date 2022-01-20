import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';

const App = () => {
	//STYLING
	const containerstyle = "mt-3 container border border-1 rounded-3 shadow p-3 mb-5 bg-body rounded";
	
	return (
		<AppProvider>
			<div className={containerstyle}>
				<h1 className='mt-3'> PC Build Budget Calculator</h1>
				<div className='row mt-3'>
					<div className='col-sm '>
						<Budget />
					</div>
					<div className='col-sm'>
						<RemainingBudget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
				<h3 className='mt-3'>Components</h3>
				<div className='row '>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Add Component</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
				<div className='footer'>
					<a href="https://github.com/abhinavthapa1998" target="_blank"><img className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" /></a>
				</div>
			</div>
		</AppProvider>
			
	);
};

export default App;