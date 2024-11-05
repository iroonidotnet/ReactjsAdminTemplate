
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Button from '@mui/material/Button';
import { MdOutlineDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Sidebar = () => {
    return (
        //group dar har div ya parent biad mitoni hover ro group-hover:bg-black/70
        <div className="sidebar fixed w-[15%] top-0 left-0 z-[100] group">
            <Link to="/">
                {/* px va py salighee */}
                <div className='logoWrapper py-3 px-3'>
                    <img src={Logo} className='w-100' />
                </div>
            </Link>
            {/* //gap-3 bedoone flex kar nemikone */}
            <div className='sidebarTabs mx-3 gap-3 flex flex-col '>
                <Button className='w-100 group-hover:bg-black/70'>
                    {/* Dashboard vasat nist ,faghat 3 ta bade icon oomad */}
                    <span className='icon w-[25px] h-[25px] mr-3 flex items-center
                     justify-center rounded-md'><MdOutlineDashboard /></span>
                    dashboard
                </Button>

                <Button className='w-100 '>
                    {/* Dashboard vasat nist ,faghat 3 ta bade icon oomad */}
                    <span className='icon w-[25px] h-[25px] mr-3 flex items-center
                     justify-center rounded-md'><FaProductHunt /></span>
                    products
                    <span className='arrow ml-auto w-[25px] h-[25px] flex items-center justify-center'><FaChevronRight /></span>
                </Button>

                <Button className='w-100'>
                    {/* Dashboard vasat nist ,faghat 3 ta bade icon oomad */}
                    <span className='icon w-[25px] h-[25px] mr-3 flex items-center
                     justify-center rounded-md'><MdOutlineDashboard /></span>
                    dashboard
                </Button>
                <Button className='w-100'>
                    {/* Dashboard vasat nist ,faghat 3 ta bade icon oomad */}
                    <span className='icon w-[25px] h-[25px] mr-3 flex items-center
                     justify-center rounded-md'><MdOutlineDashboard /></span>
                    dashboard
                </Button>

                <Button className='w-100'>
                    {/* Dashboard vasat nist ,faghat 3 ta bade icon oomad */}
                    <span className='icon w-[25px] h-[25px] mr-3 flex items-center
                     justify-center rounded-md'><MdOutlineDashboard /></span>
                    dashboard
                </Button>

                <Button className='w-100'>
                    {/* Dashboard vasat nist ,faghat 3 ta bade icon oomad */}
                    <span className='icon w-[25px] h-[25px] mr-3 flex items-center
                     justify-center rounded-md'><MdOutlineDashboard /></span>
                    dashboard
                </Button>


            </div>


        </div>
    )
}
export default Sidebar