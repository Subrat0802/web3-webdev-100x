import Twitter from "../icons/twitter"
import Youtube from "../icons/Youtube"
import SidebarItem from "./SidebarItem"

const SideBar = () => {
    return (
        <div className="h-screen bg-white border-r 
            w-72 fixed left-0 top-0 z-10 border-r-gray-100 outline-4">
            <h1 className="text-3xl p-2 gap-2 m-2">
                🧠 Brainly
            </h1>
            <SidebarItem  icon={<Twitter />} text={"Twitter"}/>
            <SidebarItem  icon={<Youtube />} text={"YouTube"}/>
        </div>
    )
}

export default SideBar