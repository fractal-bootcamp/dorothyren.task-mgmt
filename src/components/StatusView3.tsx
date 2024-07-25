//create a view of tasks filtered according to their status

//Part I : pull in the tasklist
//1. create a table component with columns matching the task type elements
//2. define the tasklist by using the global getTaskListStore hook
//3. map the tasklist to render in the table

//Part II : create the status filter
//4. create 4 buttons inside the table div on top of the table for each of the statuses
//5. keep track of the state of the button (if it is selected or not) this is done through an onClick that sets the filtered state to 'pending' or other statuses
//6. change the display of the button that is selected

//Part III : actually filter the task list
//7. keep track of the filtered state of the task list (filteredTasks)
//8. change the filteredTasks every time a different status button is clicked, this is useEffect=(()=>{},changes whenever filteredStatus or tasklist changes). This useEffect calls setFilteredStatus
//9. set setFilteredStatus to equal the list of filtered tasks. this is done through tasklist.filter((task, index, taskList)=>{filteredStatus === task.status})



