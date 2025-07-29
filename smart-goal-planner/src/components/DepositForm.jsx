import React, { useState } from 'react';

const DepositForm = ({ goals, onUpdateGoal }) => {
  const [selected, setSelected] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!selected || !amount) return;
    const goal = goals.find(g => g.id === selected);
    if (!goal) return;
    onUpdateGoal(selected, { savedAmount: goal.savedAmount + Number(amount) });
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Deposit</h2>
      <select value={selected} onChange={e => setSelected(e.target.value)} required>
        <option value="">Select goal</option>
        {goals.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
      </select>
      <input type="number" placeholder="Amount" value={amount}
             onChange={e => setAmount(e.target.value)} required />
      <button type="submit">Deposit</button>
    </form>
  );
};

export default DepositForm;
