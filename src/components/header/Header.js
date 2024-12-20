import { useState } from 'react';
import logo from '../ui/svgs/list.svg';
import SideRight from '../SideRight/SideRight';



function Header() {

const[isOpen,setIsOpen] = useState(false);

const toggleSideDiv = ()=>{
    setIsOpen(!isOpen);
}

    return (
        <>
            <header className="bg-[#373737] w-full h-[80px] flex text-white px-[10px] items-center justify-between">
                <div className="justify-center items-center flex">
                <img src={logo} onClick={toggleSideDiv}/>
                    <div>
                        <p>WebappPro</p>
                    </div>
                  
                </div>
                <div className="flex flex-wrap justify-center items-center gap-[10px]">

                    <div>
                        <p>HelpSupport</p>
                    </div>
                    <div>
                        <p>Settings</p>
                    </div>
                    <div>
                        <p>UserName</p>
                    </div>
                </div>
            </header>
            <div className="w-full h-[calc(100vh-80px)] flex">
            <SideRight isOpen={isOpen} setIsOpen={setIsOpen} />
                <div>

                    
                </div>
            </div>

        </>
    )
}

export default Header;