import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div class={`alert p-4 shadow-sm ${alertType}`}>
			<span>Remaining: Rs. {(budget - totalExpenses).toLocaleString('en')}</span>
		</div>
	);
};

export default RemainingBudget;