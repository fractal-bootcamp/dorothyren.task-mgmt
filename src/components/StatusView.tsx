import { useEffect, useState } from "react"
import { useTaskListStore } from "../stores/taskStore"

//add a filter
//if statement for different statuses

function TabbedView() {
    const { taskList } = useTaskListStore()
    const [filteredStatus, setFilteredStatus] = useState('')
    const [filteredTasks, setFilteredTasks] = useState(taskList)

    useEffect(() => {
        const _filteredTasks = taskList.filter((task) => task.status === filteredStatus)
        console.log(filteredStatus, filteredTasks)
        setFilteredTasks(_filteredTasks)
    }, [filteredStatus, taskList])

    return (
        <table className="border border-slate-200 bg-white w-96">
            <tr>
                <td colSpan={3} className="p-2  w-full">
                    <div className="flex flex-row justify-between w-full">
                        <button className={filteredStatus === 'Pending' ? "bg-green-400 font-bold" : "bg-green-200"} onClick={(e) => setFilteredStatus('Pending')}>Pending</button>
                        <button className={filteredStatus === 'In Progress' ? "bg-blue-400 font-bold" : "bg-blue-200"} onClick={(e) => setFilteredStatus('In Progress')}>In Progress</button>
                        <button className={filteredStatus === 'Completed' ? "bg-yellow-400 font-bold" : "bg-yellow-200"} onClick={(e) => setFilteredStatus('Completed')}>Completed</button>
                        <button className={filteredStatus === 'Archived' ? "bg-red-400 font-bold" : "bg-red-200"} onClick={(e) => setFilteredStatus('Archived')}>Archived</button>
                    </div>
                </td>
            </tr>
            <tr>
                <th>Task</th>
                <th>Description</th>
                <th>Status</th>
            </tr>
            {filteredTasks.map((task, index) => (
                <tr key={index}>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.status}</td>
                </tr>
            ))}
        </table>
    )
}

export default TabbedView