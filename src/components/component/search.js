import { useEffect, useState } from "react"

export default function Search({handleClick}){
    const [input, setInput] = useState("")
    useEffect(()=>{
        
    })
    return (
        <div>
            <div className="search">
                <i  onClick={handleClick} className="fa fa-search" aria-hidden="true"  style={{fontSize:"20px", paddingRight:"5px", color:"#1E90FF", cursor:"pointer"}}/>
                <input
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={this.handleKeyPress}
                placeholder={"Nhập tên thành phố"}
                className="input"
                required/>
            </div>
            <div>

            </div>
        </div>
        
    )
}