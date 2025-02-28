import Documents from "../../icons/Documents"
import HomeIcon from "../../icons/HomeIcon"
import LinkIcon from "../../icons/LinkIcon"
import TagIcon from "../../icons/TagIcon"
import Video from "../../icons/Video"
import Logo from "./Logo"
import SidevarItem from "./SidevarItem"

const Sidebar = () => {
    return (
        <div className="">
            <Logo />
            <div>
                <SidevarItem text="Tweets" icon={<HomeIcon size="lg" />} />
                <SidevarItem text="Videos" icon={<Video size="lg" />} />
                <SidevarItem text="Documents" icon={<Documents size="lg" />} />
                <SidevarItem text="Links" icon={<LinkIcon size="lg" />} />
                <SidevarItem text="Tags" icon={<TagIcon size="lg" />} />
            </div>

        </div>
    )
}

export default Sidebar