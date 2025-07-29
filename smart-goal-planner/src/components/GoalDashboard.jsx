import React, { useState, useEffect } from 'react';
import { fetchGoals, createGoal, updateGoal, deleteGoal } from './api';
import GoalList from './GoalList';
import AddGoalForm from './AddGoalForm';
import DepositForm from './DepositForm';
import OverviewPanel from './OverviewPanel';

const GoalDashboard = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetchGoals().then(setGoals);
  }, []);

  const onAddGoal = async goalData => {
    const added = await createGoal(goalData);
    setGoals(prev => [...prev, added]);
  };

  const onUpdateGoal = async (id, updates) => {
    const updated = await updateGoal(id, updates);
    setGoals(prev => prev.map(g => g.id === id ? updated : g));
  };

  const onDeleteGoal = async id => {
    await deleteGoal(id);
    setGoals(prev => prev.filter(g => g.id !== id));
  };

  return (
    <div>
      <OverviewPanel goals={goals} />
      <AddGoalForm onAddGoal={onAddGoal} />
      <DepositForm goals={goals} onUpdateGoal={onUpdateGoal} />
      <GoalList goals={goals} onUpdateGoal={onUpdateGoal} onDeleteGoal={onDeleteGoal} />
    </div>
  );
};

export default GoalDashboard;
