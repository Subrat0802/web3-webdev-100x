import Documents from "../../icons/Documents"
import HomeIcon from "../../icons/HomeIcon"
import LinkIcon from "../../icons/LinkIcon"
import TagIcon from "../../icons/TagIcon"
import Video from "../../icons/Video"
import Logo from "./Logo"
import SidevarItem from "./SidevarItem"

const Sidebar = () => {
    return (
        <div>
            <Logo />
            <div>
                <SidevarItem text="Tweets" icon={<HomeIcon size="md" />} />
                <SidevarItem text="Videos" icon={<Video size="md" />} />
                <SidevarItem text="Documents" icon={<Documents size="md" />} />
                <SidevarItem text="Links" icon={<LinkIcon size="md" />} />
                <SidevarItem text="Tags" icon={<TagIcon size="md" />} />
            </div>

        </div>
    )
}

export default Sidebar