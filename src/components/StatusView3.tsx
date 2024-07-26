import { useEffect, useState } from "react";
import { useTaskListStore } from "../stores/taskStore";

function TabbedView2() {
    const { taskList } = useTaskListStore();
    const [filteredState, setFilteredState] = useState('')
    const [filteredTaskList, setFilteredTaskList] = useState(taskList)

    useEffect(() => {
        const filteredTasks = taskList.filter((task) => task.status === filteredState)
        console.log(filteredState, filteredTaskList)
        setFilteredTaskList(filteredTasks)
    }, [filteredState, taskList])

    const handleClick = (status: string) => {
        setFilteredState(status)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h1> Task List Status </h1>
            <table className="border border-slate-200 bg-white w-96">
                <tr>
                    <td colSpan={3} className="p-2 w-full">
                        <div className="flex flex-row justify-between w-full">
                            <button className={filteredState === 'Pending' ? "bg-green-500 font-bold" : "bg-green-200"} onClick={() => handleClick('Pending')}>Pending</button>
                            <button className={filteredState === 'In Progress' ? "bg-blue-500 font-bold" : "bg-blue-200"} onClick={() => handleClick('In Progress')}>In Progress</button>
                            <button className={filteredState === 'Completed' ? "bg-yellow-500 font-bold" : "bg-yellow-200"} onClick={() => handleClick('Completed')}>Completed</button>
                            <button className={filteredState === 'Archived' ? "bg-red-500 font-bold" : "bg-red-200"} onClick={() => handleClick('Archived')}>Archived</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
                {filteredTaskList.map((task, index) => (
                    <tr key={index}>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.status}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default TabbedView2