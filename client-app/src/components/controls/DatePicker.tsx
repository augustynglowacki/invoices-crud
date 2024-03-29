import React from 'react'
import { MuiPickersUtilsProvider, DatePicker as KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";



export default function DatePicker(props:any) {

    const { name, label, value, onChange,error=null } = props

    const convertToDefEventPara = (name:any, value:any) => ({
        target: {
            name, value
        }
    })

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker inputVariant="outlined" margin="none"
                label={label}
                format="dd-MM-yyyy"
                name={name}
                value={value}
                onChange={date =>onChange(convertToDefEventPara(name,date))}
                {...(error && {error:true, helperText:error})}
            />
        </MuiPickersUtilsProvider>
    )
}