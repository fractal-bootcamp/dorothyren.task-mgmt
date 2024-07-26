import { useState } from "react"
import { useTaskListStore, TaskStatus, TaskDetails } from "../stores/taskStore"
import { EditableTask } from "./EditTask"

function GenerateTaskList() {
    const [task, setTask] = useState<TaskDetails>({
        title: "",
        description: "",
        status: "Pending",
    })

    const [selectedTask, setSelectedTask] = useState<string | null>(null)

    const {
        taskList, addTask
    } = useTaskListStore()

    const taskStatus: Array<TaskStatus> = ['Pending', 'In Progress', 'Completed', 'Archived']
    // const taskTheme = ['background', 'text', 'primary', 'secondary', 'accent']
    console.log(taskList)

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center">
                <div className="border border-gray-300 rounded-lg p-2 my-2 shadow-sm max-w-sm bg-gray-100">
                    <h1 className="text-lg font-bold">Create New Task</h1>
                    <label>
                        Task Title:
                        <input
                            //update the "task title" state 
                            onChange={(e) => setTask({ ...task, title: e.target.value })}
                            value={task.title}
                            className="border border-gray-200 rounded-md"
                        />

                    </label>
                    <label>
                        Task Description:
                        <input
                            //update the "task description" state 
                            onChange={(e) => setTask({ ...task, description: e.target.value })}
                            value={task.description}
                            className="border border-gray-200 rounded-md"
                        />
                    </label>
                    <label>
                        Task Status:
                        <select
                            value={task.status}
                            onChange={(e) => setTask({ ...task, status: e.target.value as TaskStatus })}
                            className="border border-gray-200 rounded-md"
                        >
                            {
                                taskStatus.map((statusOption, index) => (
                                    <option key={index} value={statusOption}>
                                        {statusOption}
                                    </option>
                                ))
                            }
                        </select>
                    </label>
                    <button onClick={() => addTask(task)} className="border rounded-lg p-2 my-2 shadow-sm hover hover:bg-yellow-200">
                        Add Task
                    </button>
                </div>
                {
                    taskList.map((task) => (
                        <EditableTask task={task} />
                    ))
                }
            </div >

        </div >
    )
}

export default GenerateTaskList