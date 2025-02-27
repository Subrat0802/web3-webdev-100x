import { ReactElement } from "react"

const SidebarItem = ({text, icon} : {
    text:String,
    icon: ReactElement;
}) => {
  return (
    <div className="flex p-2 hover:bg-gray-100 transition-all duration-300 cursor-pointer gap-2 m-2 border rounded-md">
        {icon}{" "}{text}
    </div>
  )
}

export default SidebarItem