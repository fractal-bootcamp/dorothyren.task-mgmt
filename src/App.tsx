import { create } from "zustand"
import GenerateTaskList from "./components/TaskList"
//create is a higher order function that returns another function
//the returned function is the one that takes the state creation logic as its argument

type State = {
  firstName: string
  lastName: string
}

type Action = {
  updateFirstName: (firstName: State["firstName"]) => void
  updateLastName: (lastName: State['lastName']) => void
}

// Create your store, which includes both state and (optionally) actions
// a store is a set of state variables and a set of functions that update the state. 
// set is a function provided by zustand to update the state of the store 
// it performs a shallow merge of the new state with the existing state. 
//it updates specified properties and leaves others unchanged
const usePersonStore = create<State & Action>((set) => ({
  firstName: '',
  lastName: '',
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}))

// In consuming app
function App() {
  // "select" the needed state and actions, in this case, the firstName value
  // and the action updateFirstName
  const firstName = usePersonStore((state) => state.firstName)
  const updateFirstName = usePersonStore((state) => state.updateFirstName)
  const lastName = usePersonStore((state) => state.lastName)
  const updateLastName = usePersonStore((state) => state.updateLastName)

  return (
    <main>
      {/* <label>
        First name
        <input
          // Update the "firstName" state
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>
      <label>
        Last name
        <input
          //Update the "lastName" state
          onChange={(e) => updateLastName(e.currentTarget.value)}
          value={lastName}
        />
      </label>
      <p>
        Hello, <strong>{firstName}!</strong>
      </p> */}

      <GenerateTaskList />
    </main>
  )
}
export default App
