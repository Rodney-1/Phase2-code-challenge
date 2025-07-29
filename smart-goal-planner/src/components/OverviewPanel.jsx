import React from 'react';

function daysBetween(dateStr) {
  return Math.ceil((new Date(dateStr) - new Date()) / (1000 * 60 * 60 * 24));
}

const OverviewPanel = ({ goals }) => {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completed = goals.filter(g => g.savedAmount >= g.targetAmount);

  return (
    <div className="overview-panel">
      <h2>Overview</h2>
      <p>Total goals: {totalGoals}</p>
      <p>Total saved: ${totalSaved}</p>
      <p>Completed: {completed.length}</p>
      <ul>
        {goals.map(g => {
          const daysLeft = daysBetween(g.deadline);
          const isClose = daysLeft <= 30 && daysLeft >= 0;
          const isOverdue = daysLeft < 0 && g.savedAmount < g.targetAmount;
          return (
            <li key={g.id}>
              {g.name}: {isOverdue ? 'Overdue' : isClose ? `${daysLeft} days left!` : `${daysLeft} days left`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OverviewPanel;
