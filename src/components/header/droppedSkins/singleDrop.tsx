import { useRef } from "react";
export function Drop({name}: {name: string}){
    const dropDiv = useRef<HTMLDivElement>(null);
    const contentDiv = useRef<HTMLDivElement>(null);
    const userDiv = useRef<HTMLDivElement>(null);
    setTimeout(()=>{
        if(dropDiv.current){
			dropDiv.current.style.transform = "translateY(0)"
            
			}
    },8)
    const handleHoverEnter = ()=>{
        if(dropDiv && contentDiv.current && userDiv){
            contentDiv.current.style.transform = "translateY(-2.5rem)"
            userDiv.current?.classList.replace("opacity-0","opacity-100")
            }
        }
    const handleHoverQuit = ()=>{
        if(dropDiv && contentDiv.current ){
            contentDiv.current.style.transform = "translateY(2.5rem)"
             }
         }
    
    return(
        <div ref={dropDiv} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverQuit} className="h-40 w-20 bg-red-800 flex flex-col tx-xs 
        transition-all duration-[0.40s] ease-out -translate-y-16 overflow-hidden">
           <div ref={contentDiv} className="h-full translate-y-10 transition-all duration-[0.18s]">
            {/* DropInfo */}
            <div className="h-2/4 bg-blue-800 w-20">
                {name}
            </div>
            {/* UserInfo */}
            <div ref={ userDiv } className="h-2/4 w-20 bg-green-800 opacity-0">
                User
            </div>
            </div>
        </div>
    )
}
