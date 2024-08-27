{/*import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react'*/}
import { CloudSunRain } from 'lucide-react'
import { Menu } from 'lucide-react'

export default function BurgerIcon(){
    return(
        <>
            <div className="burgericondiv">
                <div className=' bg-[#171c32] text-white py-4 px-2 flex justify-between items-center sticky top-0 z-10'>
                    <h3 className="bugericonheading flex "><CloudSunRain/>THE WEATHER</h3>
                    <a href='burger'><Menu/></a>                    
                </div>

                {/*<a href='linktothispage'><p className="sidediv my-4 py-2">Weather</p></a>
                <a href='linktoCities'><p className="sidediv my-4 py-2">Cities</p></a>
                <a href='linktoMaps'><p className="sidediv my-4 py-2">Map</p></a>
                <a href='linktoSettings'><p className="sidediv my-4 py-2">Settings</p></a>
                <a href='linktoAccount'><p className="sidediv my-4 py-2">Account</p></a>*/}

                {/*<div className='darkandlightmode w-full flex gap-1'>
                    <button type="button">
                        <Moon classname=""/>
                    </button>
                    <button type="button">
                        <Sun classname=""/>
                    </button>
                </div>*/}
                
            </div>
            
        </>
    )
} 