import { ITask } from '../interfaces/Task';

interface IProps {
    task: ITask;
    deleteTask: (id: number) => void;
}

export const TaskCard = ({ task, deleteTask }: IProps) => {
    return (
        <div className="card card-body bg-secondary rounded-0 text-dark">
            <h2>{task.title}</h2>
            <p>{task.id}</p>
            <p>{task.description}</p>
            <button
                className="btn btn-danger"
                onClick={() => {
                    deleteTask(task.id);
                }}
            >
                Delete
            </button>
        </div>
    );
};
