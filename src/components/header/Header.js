import { useState } from 'react';
import logo from '../ui/svgs/list.svg';
import user from '../ui/svgs/user.svg';
import SideRight from '../SideRight/SideRight';



function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSideDiv = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header className="bg-[#373737] w-full h-[100px] flex text-white px-[10px] items-center justify-between md:h-[70px]">
                <div className="justify-center h-[100%] items-center flex hover:bg-[#242829] p-[8px]">
                    <img src={logo} onClick={toggleSideDiv} />
                    <div>
                        <p>WebappPro</p>
                    </div>

                </div>
                <div className="flex flex-wrap justify-end items-center gap-[10px] h-[100%]">

                    <div className='hover:bg-[#242829] p-[8px] md:h-[100%] flex justify-center items-center'>
                        <p>HelpSupport</p>
                    </div>
                    <div className='hover:bg-[#242829] p-[8px] md:h-[100%] flex justify-center items-center'>
                        <p>Settings</p>
                    </div>
                    <div className='flex items-center justify-center p-[8px] gap-[8px] hover:bg-[#242829] md:h-[100%]'>
                        <p>UserName</p>
                        <div><img src={user} /></div>
                    </div>
                </div>
            </header>
            <div className="w-full h-[calc(100vh-100px)] border-[1px]  flex md:h-[calc(100vh-70px)]">
                <SideRight isOpen={isOpen} setIsOpen={setIsOpen} />
                <div>


                </div>
            </div>

        </>
    )
}

export default Header;