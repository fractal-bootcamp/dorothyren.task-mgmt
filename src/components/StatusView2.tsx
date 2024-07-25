
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