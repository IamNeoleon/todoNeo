import React from 'react';
import './Task.scss';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

const Task = ({ tasks }) => {
    const { id } = useParams(); // Получение параметра из URL
    const filteredTasks = tasks.filter(task => task.id === Number(id)); // Фильтрация заданий для данного маршрута
    const task = filteredTasks.length > 0 ? filteredTasks[0] : null;

    if (!task) {
        return <div>Задача не найдена</div>; // или любое другое сообщение об ошибке
    }

    return (
        <div className="task-details">
            <h2>{task.title}</h2>
            <ul>
            </ul>
        </div>
    );
};

export default Task;