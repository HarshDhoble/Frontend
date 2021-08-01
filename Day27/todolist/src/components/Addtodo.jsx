import { useState } from "react";
import {useDispatch} from "react-redux";
import {addItem} from "../actions";
const Addtodo = () =>{
    const [item,setItem] = useState("");
    const dispatch = useDispatch();
    return(
        <div>
            <input type="text" 
            placeholder="Add a tod.."
            value={item}
            onChange={(e)=>{
                setItem(e.target.value);
            }} />
            <button onClick={()=>{
                dispatch(addItem({
                    title:item,
                    done:false,
                }));
                setItem("");
                console.log(item);
            }}>Add</button>

        </div>
    )
}
export default Addtodo;