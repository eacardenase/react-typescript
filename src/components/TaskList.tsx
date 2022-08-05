import { ITask } from '../interfaces/Task';
import { TaskCard } from './TaskCard';

interface IProps {
    tasks: ITask[];
    deleteTask: (id: number) => void;
}

export const TaskList = ({ tasks, deleteTask }: IProps) => {
    return (
        <>
            {tasks.map((task) => (
                <div key={task.id} className="col-md-4 p-2">
                    <TaskCard task={task} deleteTask={deleteTask} />
                </div>
            ))}
        </>
    );
};
