import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TaskStatus = 'Pending' | 'In Progress' | 'Completed' | 'Archived';
// type Theme = 'background' | 'text' | 'primary' | 'secondary' | 'accent';

type Task = {
    title: string,
    description: string,
    status: TaskStatus
    // theme: Theme
}

type TaskAction = {
    updateTaskTitle: (title: Task['title']) => void
    updateTaskDescription: (description: Task['description']) => void
    updateTaskStatus: (state: Task['status']) => void
}

type taskList = Task[]

type TaskListAction = {
    addTask: (task: Task) => void
}

//create the store, which includes boths state and actions
//a store is a set of state variables and functions that can be used to udpate the state

const useTaskStore = create<Task & TaskAction>((set) => ({
    title: '',
    description: '',
    status: 'Pending',
    // theme: 'primary',
    updateTaskTitle: (title: string) => set(() => ({ title: title })),
    updateTaskDescription: (description: string) => set(() => ({ description: description })),
    updateTaskStatus: (status: TaskStatus) => set(() => ({ status: status })),
}))

// const useTaskStore = create<Task & TaskAction & { taskList: Task[] }>((set) => ({
//     title: '',
//     description: '',
//     status: 'Pending',
//     taskList: [],
//     // theme: 'primary',
//     updateTaskTitle: (title: string) => set(() => ({ title: title })),
//     updateTaskDescription: (description: string) => set(() => ({ description: description })),
//     updateTaskStatus: (status: TaskStatus) => set(() => ({ status: status })),
//     addTask: (task: Task) => set((state) => ({ taskList: [...state.taskList, task] }))
// }))


const useTaskListStore = create(
    persist<{ taskList: Task[] } & TaskListAction>(
        (set, get) => ({
            taskList: [] as Task[],
            addTask: (task: Task) => set({ taskList: [...get().taskList, task] })
        }),
        {
            name: "taskList", //name of the item in localStorage
            storage: createJSONStorage(() => localStorage)
        },
    ),
);


function GenerateTaskList() {
    const {
        title, description, status, updateTaskTitle, updateTaskDescription, updateTaskStatus
    } = useTaskStore()

    const {
        taskList, addTask
    } = useTaskListStore()

    const taskStatus = ['Pending', 'In Progress', 'Completed', 'Archived']
    const taskTheme = ['background', 'text', 'primary', 'secondary', 'accent']

    return (
        <div>
            <label>
                Task Title:
                <input
                    //update the "task title" state 
                    onChange={(e) => updateTaskTitle(e.target.value)}
                    value={title}
                />
                <p>{title}</p>
            </label>
            <label>
                Task Description:
                <input
                    //update the "task title" state 
                    onChange={(e) => updateTaskDescription(e.target.value)}
                    value={description}
                />
                <p>{description}</p>
            </label>
            <label>
                Task Status:
                <select
                    value={status}
                    onChange={(e) => updateTaskStatus(e.target.value as TaskStatus)}>
                    {
                        taskStatus.map((statusOption, index) => (
                            <option key={index} value={statusOption}>
                                {statusOption}
                            </option>
                        ))
                    }
                </select>
            </label>
            <button onClick={() => addTask({ title, description, status })} className="border rounded-lg p-2 my-2 shadow-sm">
                Add Task
            </button>
            {
                taskList.map((task, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg p-4 my-2 shadow-sm">
                        <h3 className="mb-2">Title: {task.title}</h3>
                        <p className="mb-2">Description: {task.description}</p>
                        <span className="inline-block px-2 py-1 bg-gray-200 rounded">Status: {task.status}</span>
                    </div>
                ))
            }
        </div >
    )
}

export default GenerateTaskList