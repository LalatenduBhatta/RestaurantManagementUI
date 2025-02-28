import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
function App() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="h-screen fixed z-50 overflow-y-scroll no-scrollbar w-[15%]">
        <Sidebar />
      </div>

      {/* main section */}
      <div className="flex-1 flex flex-col ms-[15%]">
        <div className="">
          {/* navbar */}
          <Navbar />
        </div>
        <div className="flex-1 bg-gray-50">
          {/* content */}
          <Outlet />
        </div>
      </div>

    </div>
  )
}
export default App