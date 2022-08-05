import { useState } from 'react';

import './App.css';
import logo from './logo.svg';

import { ITask } from './interfaces/Task';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
interface IProps {
    title?: string;
}

function App({ title }: IProps) {
    const [tasks, setTasks] = useState<ITask[]>([
        {
            id: 1,
            title: 'Learn React',
            description: 'Learn React',
            completed: false,
        },
    ]);

    const addNewTask = (task: ITask) => setTasks([...tasks, task]);
    const deleteTask = (id: number) => {
        const finalTasks = tasks.filter((task) => task.id !== id);
        setTasks(finalTasks);
    };

    return (
        <div
            className="bg-dark text-white"
            style={{
                height: '100vh',
            }}
        >
            {/* Navbar */}
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        <img
                            src={logo}
                            alt="react logo"
                            style={{
                                width: '4rem',
                            }}
                        />
                        {title && title}
                    </a>
                </div>
            </nav>

            <main className="container p-4 ">
                <div className="row">
                    <div className="col-md-4">
                        <TaskForm addNewTask={addNewTask} />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <TaskList tasks={tasks} deleteTask={deleteTask} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
