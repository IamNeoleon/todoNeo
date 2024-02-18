import React from 'react';
import './Sidebar.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Sidebar = ({ tasks }) => {
    return (
        <>
            <div className="sidebar">
                <div className="all_tasks">Все задачи</div>
                <div className="tasks">

                </div>
            </div>
        </>
    );
};

export default Sidebar;