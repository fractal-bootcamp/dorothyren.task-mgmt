//Edit a task
//need to be able to edit each field - title, description, status

import { useState } from "react";
import { Task } from "../stores/taskStore"

//1. create a component for editing a single task
// 2. pass the taskid prop to the component to identify the task being edited 
//2. define the elements of Task by using global hook useTaskStore to fetch Task
//3. display task details, map
//3. create a state for editing mode (isEditing)
//4. create a state for edited task (editedTask)
//5. create a way to toggle on editing mode, button (handleEditToggle)
//6. ??? create a way to handle changes in input fields (handleInputChange)
//7. create a way to save the changes, button (handleSave)
//how does local storage work? 



// React Components need to know about the data they are being used to manipulate.
// there are two main ways to know about this:
// 1. as INPUT data from the user -- (do you already have the information EVERY TIME the component is created / rendered / put on the screen)
// ^ for react components these inputs are called PROPS
// 2. as STATE data from the user -- (do you need to collect or keep track of information AFTER or DURING the usage of the component)
// BONUS. as GLOBAL application state -- (carefully choose which data deserves to be GLOBAL across your whole application)


// 1. create a react component (with which inputs?) -- the selectedTaskId as a PROP
type EditableTaskProps = {
    task: Task;
}
export const EditableTask = ({ task }: EditableTaskProps) => {
    const [taskBeingEditedToSave, setBeingEditedTaskToSave] = useState<Task | null>(null)


    function cancelEdits() {
        // reset the component back to the oldTask state
        setBeingEditedTaskToSave(null)
    }

    function saveEdits() {
        // save the task to the global tasklist 
        //use updateTask hook to do the above
        setBeingEditedTaskToSave(null)
    }

    return (
        <div key={task.id} className="border border-gray-300 rounded-lg p-2 my-1 shadow-sm max-w-sm" onClick={() => taskBeingEditedToSave ? undefined : setTaskToSave(task)}>
            {taskBeingEditedToSave ? (
                <div>
                    <div className="relative flex justify-end space-x-1">
                        <button
                            className="mr-2"
                            onClick={() => cancelEdits()}
                        >
                            ❌
                        </button>
                        <button
                            onClick={() => saveEdits()}
                        >
                            ✅
                        </button>
                    </div>
                    {/* <input className="mb-1 text-sm">Title: {taskToSave.title}</input>
                    <input className="mb-1 text-sm">Description: {taskToSave.description}</input>
                    <input className="inline-block px-1 py-0.5 bg-gray-200 rounded text-xs">Status: {taskToSave.status} */}
                </div>
            ) :
                (
                    <div>
                        <h3 className="mb-1 text-sm">Title: {task.title}</h3>
                        <p className="mb-1 text-sm">Description: {task.description}</p>
                        <span className="inline-block px-1 py-0.5 bg-gray-200 rounded text-xs">Status: {task.status}</span>
                    </div>
                )
            }

        </div >
    )
}