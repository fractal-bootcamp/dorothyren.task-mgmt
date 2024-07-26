import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { v4 as uuidv4, v4 } from "uuid";

export type TaskStatus = "Pending" | "In Progress" | "Completed" | "Archived";
// type Theme = 'background' | 'text' | 'primary' | 'secondary' | 'accent';

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  // theme: Theme
};

export type TaskDetails = {
  title: string;
  description: string;
  status: TaskStatus;
  // theme: Theme
};

export type TaskAction = {
  updateTaskTitle: (title: Task["title"]) => void;
  updateTaskDescription: (description: Task["description"]) => void;
  updateTaskStatus: (status: Task["status"]) => void;
};

// type taskList = Task[]

export type TaskListAction = {
  addTask: (task: TaskDetails) => void;
  updateTask: (task: Task) => void;
};

//create the store, which includes boths state and actions
//a store is a set of state variables and functions that can be used to udpate the state

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

type TaskListStoreState = { taskList: Task[] } & TaskListAction;

export const useTaskListStore = create(
  persist<TaskListStoreState>(
    (set, get) => ({
      taskList: [] as Task[],
      addTask: (task: TaskDetails) =>
        set({ taskList: [...get().taskList, { ...task, id: uuidv4() }] }),
      updateTask: (updatedTask: Task) => {
        //get the task list
        // 1. find the index of the task in TaskList that we intend to update.
        const IDTOFIND = updatedTask.id;
        const taskList = get().taskList;
        const indexToReplace = taskList.findIndex((element, index, array) => {
          return IDTOFIND === element.id;
        });
        if (indexToReplace < 0) {
          console.log("no task found");
          return;
        }

        // 2. taskList.toSpliced with the updatedTask spliced over the old task.
        const newTaskList = taskList.toSpliced(indexToReplace, 1, updatedTask);
        // 3. set taskList to the new taskList
        set({ taskList: newTaskList });
      },
    }),
    {
      name: "taskList", //name of the item in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
