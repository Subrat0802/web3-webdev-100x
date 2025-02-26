
export interface sideBarItem {
    text: string,
    icon: any
}

const SidevarItem = ({ text, icon }: sideBarItem) => {
    return (
        <div className="flex mb-2 text-lg pl-5 justify-start items-center p-3 gap-3 border-b
         border-gray-100 hover:cursor-pointer transition-all duration-200 rounded-lg hover:bg-purple-100">
            <div>
                {icon}
            </div>
            <div>
                {text}
            </div>
        </div>
    )
}

export default SidevarItem