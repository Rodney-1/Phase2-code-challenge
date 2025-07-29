import React from 'react';
import GoalCard from './GoalCard';

const GoalList = ({ goals, onUpdateGoal, onDeleteGoal }) => (
  <div className="goal-list">
    {goals.map(goal => (
      <GoalCard
        key={goal.id}
        goal={goal}
        onUpdateGoal={onUpdateGoal}
        onDeleteGoal={onDeleteGoal}
      />
    ))}
  </div>
);

export default GoalList;
