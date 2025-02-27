import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <h1>APP PAGE</h1>
      <Outlet />
    </div>
  )
}
export default App