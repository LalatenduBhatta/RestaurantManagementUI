import BigCalendar from "../components/BigCalendar"

function Dashboard() {
    return (
        <>
            <div className="parent flex flex-col">
                {/* events section */}
                <div className="flex h-[500px]">
                    {/* calendar */}
                    <div className="w-3/4 content-center text-center">
                        <BigCalendar />
                    </div>
                    {/* events list */}
                    <div className=" w-1/4 bg-pink-600">

                    </div>
                </div>
                {/* chart */}
                <div className="chart h-[400px] bg-blue-800">

                </div>
            </div>
        </>
    )
}
export default Dashboard