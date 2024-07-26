import GenerateTaskList from "./components/TaskList"
import TabbedView2 from "./components/StatusView3"
//create is a higher order function that returns another function
//the returned function is the one that takes the state creation logic as its argument


// Create your store, which includes both state and (optionally) actions
// a store is a set of state variables and a set of functions that update the state. 
// set is a function provided by zustand to update the state of the store 
// it performs a shallow merge of the new state with the existing state. 
//it updates specified properties and leaves others unchanged
// global state for selectedTask

// In consuming app
function App() {
  // "select" the needed state and actions, in this case, the firstName value
  // and the action updateFirstName
  // const { firstName, updateFirstName, lastName, updateLastName } = usePersonStore()

  return (
    <main>
      <TabbedView2 />
      <GenerateTaskList />
    </main>
  )
}
export default App
