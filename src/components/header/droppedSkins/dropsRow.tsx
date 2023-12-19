import { Drop } from "./singleDrop";
import { RecentDropsProps } from "./types";

export function DropsRow(props: RecentDropsProps) {
    return( 
        <div className="flex flex-row-reverse overflow-hidden" >
            {props.items.map((value, index)=>{
                 return(
                 <Drop name={value}/>
                 )
            })}
    </div>
    )
}
