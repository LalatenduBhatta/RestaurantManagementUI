import { useParams } from "react-router-dom"
import employees from "../libs/Employees" //static data

function EmployeeDetails() {
    const { id } = useParams() //to get the dynamic params value from url
    const employee = employees.find(ele => ele.employeeId === id)
    return (
        <>
            <div className="w-[80%] m-auto p-8 bg-white shadow-xl rounded-lg h-[90vh] flex flex-col justify-center">
                <div className="flex justify-between px-10">
                    <h2 className="text-3xl font-bold mb-6 text-blue-700 text-end w-3/5">Employee Details</h2>
                    <button className="text-center bg-red-400 w-16 
                    text-white font-semibold rounded-full h-12 text-lg">EDIT</button>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {Object.entries(employee).map(([key, value]) => (
                        <div key={key} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <p className="text-gray-600 text-sm font-semibold uppercase">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                            </p>
                            <p className="text-lg text-gray-900 font-medium break-words">
                                {value || "N/A"}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default EmployeeDetails