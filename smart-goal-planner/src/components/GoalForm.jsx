import React, { useState } from 'react';

const GoalForm = ({ onAddGoal }) => {
  const [form, setForm] = useState({
    name: '', targetAmount: '', category: '', deadline: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddGoal({
      ...form,
      id: Date.now().toString(),
      savedAmount: 0,
      createdAt: new Date().toISOString().split('T')[0],
      targetAmount: Number(form.targetAmount)
    });
    setForm({ name: '', targetAmount: '', category: '', deadline: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Goal</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="targetAmount" value={form.targetAmount} onChange={handleChange}
             placeholder="Target Amount" type="number" required />
      <input name="category" value={form.category} onChange={handleChange}
             placeholder="Category" required />
      <input name="deadline" value={form.deadline} onChange={handleChange}
             type="date" required />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;
