import { Menu } from "lucide-react"
import logo from "../assets/logo.png"
export function PageHeader(){
    return <div className='flex gap-10 lg:gap-20 justify-between'>
        <div className='flex gap-4 items-center flex-shrink-0'>
            <button>
                <Menu />
            </button>
                <a href="/">
                    <img src={logo} className='h-6' alt="2ndTube homepage" title="2ndTube homepage"></img>
                </a>
            
        </div>
        <div></div>
        <div></div>
    </div>
}