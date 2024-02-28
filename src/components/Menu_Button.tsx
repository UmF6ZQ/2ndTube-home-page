import { cva } from "class-variance-authority"
const buttonStyle = cva(["hover: bg-secondary-hover", "transition-colors"], {
    variants:{
        size: {
            default: [],
            icon: ["rounded-full", "w-10"]
        }
    }
})
export function Menu_Button(){
    return <button/>
}