import { useState } from "react";
import construction from '../ui/svgs/construction.svg';


function SideRight({ isOpen, setIsOpen }) {
    const [elements, setElements] = useState([
        {
            name: "DASHBOARD",
            logo: construction,
            colorBorder: '#ff0000',
        },
        {
            name: "DASHBOARD",
            logo: construction,
            colorBorder: '#00ff00',
        },
        {
            name: "DASHBOARD",
            logo: construction,
            colorBorder: '#ff0000',
        }
    ]);

    return (
        <>
            <div
                className={`${isOpen ? 'flex flex-col' : 'hidden'
                    } bg-[#F2F2EA] w-[300px] border-[#0000ff] border-[1px] border-collapse h-full lg:flex lg:flex-col`}
            >
                {/* <div className="grid grid-cols-3 p-2.5 border-collapse">
                    <div className=" border w-[100%] border-[#b4b4b4] p-2.5 text-2xl text-center">ddd</div>
                    <div className=" border w-[100%] border-[#b4b4b4] p-2.5 text-2xl text-center">fgg</div>
                </div> */}

                    {elements.map((elem,index) => {
                    console.log(elem.name);
                    console.log(elem.logo);
                   return(
                    <div key={index} className="flex flex-col border-collapse">
                    <div className=' flex justify-center items-center gap-[40px] py-[4px] border-[1px] border-[#b5b5b5]'>
                        <div className="w-1/2 flex justify-center items-center border-r-[3px] border-[]">  <img src={elem.logo} className=' rounded-[100%]' /></div>
                        <div className=' w-1/2'><p>{elem.name}</p></div>
                      
                    </div>
                </div>
                   )
                })}

                

            </div>

        </>
    )
}
export default SideRight;