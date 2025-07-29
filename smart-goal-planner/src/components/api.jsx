import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' });

export const fetchGoals = () => API.get('/goals').then(res => res.data);
export const createGoal = goal => API.post('/goals', goal).then(res => res.data);
export const updateGoal = (id, updates) => API.patch(`/goals/${id}`, updates).then(res => res.data);
export const deleteGoal = id => API.delete(`/goals/${id}`);
