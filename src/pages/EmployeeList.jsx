import { FaPlus } from "react-icons/fa";
import AddEmployee from "../components/AddEmployee";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import employees from "../libs/Employees"; //stock data(static)
function EmployeeList() {
    const [isModal, setIsModal] = useState(false)
    const navigate = useNavigate()
    function showDetails(empId) {
        //navigate to employee details page
        navigate(`/employee/${empId}`)
    }
    return (
        <div className="overflow-x-auto">
            {isModal && <AddEmployee />}
            <button className="btn btn-primary fixed bottom-4 right-4
             h-16 w-16 rounded-full text-4xl z-50"
                onClick={() => setIsModal(!isModal)}>
                <FaPlus />
            </button>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Department</th>
                        <th>Emp ID</th>
                        <th>Join Date</th>
                        <th>Salary</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(ele => {
                            return (
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{ele.firstName + " " + ele.lastName}</div>
                                                <div className="text-sm opacity-50">{ele.city}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{ele.department}</td>
                                    <td>{ele.employeeId}</td>
                                    <td>{ele.dateOfHire}</td>
                                    <td>{ele.salary} ₹</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs"
                                            onClick={() => showDetails(ele.employeeId)}>details</button>
                                    </th>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
export default EmployeeList