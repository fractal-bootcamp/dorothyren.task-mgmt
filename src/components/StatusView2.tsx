
//keeping track of something uses State 

//1. create a react component 
//2. create a div for the table of tasks
//3. create the table
//4. use the hook useTaskListStore to pull in the tasklist
//5. render the tasks in the table by using map on tasklist
//6. create 4 buttons for each of the task statuses inside the table at the top
//7. create a filteredStatus state
//8. when you click a button setFilteredStatus state to the selected status which is 'pending', and other status options
//9. change display of button that is selected by filteredStatus
//10. create a filteredTasks state bc we need to keep track of filtered tasks based on filtered status
//11. when the filtered status changes/button is clicked, update the filteredTasks state - using useEffect. useEffect is called whenever filteredStatus and the overall taskList changes. useEffect calls setFilteredTasks
//12. setFilteredTasks is set to filteredTasks. which is from taskList.filter((task, index, taskList)=>{filteredStatus == task.status})



//create a view of tasks filtered according to their status

//Part I : pull in the tasklist
//1. create a table component with columns matching the task type elements
//2. define the tasklist by using the global getTaskListStore hook
//3. map the tasklist to render in the table

//Part II : create the status filter
//4. create 4 buttons inside the table div on top of the table for each of the statuses
//5. create a filteredStatus state
//5. when a button is clicked, onClick, set the filteredStatus to the selected status - 'pending' etc. 
//6. change the display of the button that is selected

//Part III : actually filter the task list
//7. keep track of the filtered state of the task list (filteredTasks)
//8. update the filteredTasks state every time a different status button is clicked, this is useEffect=(()=>{},changes whenever filteredStatus or tasklist changes). This useEffect calls setFilteredStatus
//9. set setFilteredStatus to equal the list of filtered tasks. this is done through tasklist.filter((task, index, taskList)=>{filteredStatus === task.status})


//create view of tasks filtered according to status

//1. create table component with columns 
//2. define the taskList by using global hook useTaskListStore
//3. map the taskList into the table 

//4. create 4 buttons for each of the task statuses
//5. keep track of the state of the button - created filteredState
//6. create a handleClick to set the filteredState to equal the selected button
//7. change the display of the button

//8. keep track of the list when it is filtered
//9. update the filteredTask list every time a different status button is selected

