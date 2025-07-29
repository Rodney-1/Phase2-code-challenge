import React from 'react';

function daysBetween(dateStr) {
    return Math.ceil((new Date(dateStr) - new Date()) / (1000 * 60 * 60 * 24));
}

const GoalCard = ({ goal, onDeleteGoal }) => {
    const { id, name, targetAmount, savedAmount, deadline } = goal;
    const daysLeft = daysBetween(deadline);
    const isComplete = savedAmount >= targetAmount;

    return (
        <div className="goal-card">
            <h3>{name}</h3>
            <p>Target: ${targetAmount}</p>
            <p>Saved: ${savedAmount}</p>
            <p>Days Left: {daysLeft}</p>
            <p>Status: {isComplete ? 'Complete' : 'In Progress'}</p>
            <button onClick={() => onDeleteGoal(id)}>Delete</button>
        </div>
    );
};

export default GoalCard;
