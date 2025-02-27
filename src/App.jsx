import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* main section */}
      <div className="flex">
        <div className="w-2/12">
          {/* sidebar */}
          <Sidebar />
        </div>
        <div className="w-10/12 flex-1 bg-gray-50">
          {/* content */}
          <h1>APP PAGE</h1>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
export default App