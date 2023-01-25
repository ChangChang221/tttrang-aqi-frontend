import { DateRangePicker } from "rsuite";
import React, {useState} from 'react'

export default function Index({setState}){
    const styles = { width: 260, display: 'block'};
    const [value, setValue] = useState()
    console.log({value})
    const onChange = (e)=>{
        setValue(e);
        setState({
            startDate: e[0],
            endDate: e[1]
        })
    }
    return (
        <DateRangePicker style={styles} value={value} onChange={(e)=> onChange(e)}/>
    )
}