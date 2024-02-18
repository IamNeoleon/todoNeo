import React, { useEffect, useState } from 'react'
import "./index.scss";
import Sidebar from './components/Sidebar/Sidebar';
import Task from './components/Task/Task';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';




function App() {
	const [tasks, setTasks] = useState([]);
	const receivedTasks = [
		{
			id: 1,
			title: 'Покупки',
			color: '#f4f6f8',
			tasks: [
				{
					name: 'Изучить JavaScript',
					checked: false
				},
				{
					name: 'Изучить JavaScript',
					checked: false
				},
				{
					name: 'Изучить JavaScript',
					checked: false
				}
			]
		},
		{
			id: 2,
			title: 'Фронтенд',
			color: '#64c4ed',
			tasks: [
				{
					name: 'Изучить JavaScript',
					checked: false
				},
				{
					name: 'Изучить JavaScript',
					checked: false
				},
				{
					name: 'Изучить JavaScript',
					checked: false
				}
			]
		},
		{
			id: 3,
			title: 'Фильмы и сериалы',
			color: '#ffbbcc',
			tasks: [
				{
					name: 'Изучить JavaScript',
					checked: false
				},
				{
					name: 'Изучить JavaScript',
					checked: false
				},
				{
					name: 'Изучить JavaScript',
					checked: false
				}
			]
		}
	];

	useEffect(() => {
		setTasks(receivedTasks)
	}, [])

	return (
		<>
			<div className="wrapper">
				<div className="todo">
					<Sidebar tasks={tasks} />
					<BrowserRouter>
						<Routes>
							<Route path="/task/:id" element={<Task tasks={tasks} />} />
						</Routes>
					</BrowserRouter>
				</div>
			</div >
		</>
	)
}

export default App
