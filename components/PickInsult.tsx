import {Autocomplete} from "@material-ui/lab";
import {TextField} from "@material-ui/core";
import {Insult} from "../models/Insult";

interface InsultPickerProps {
    insults: Insult[],
    pickInsult: (insult: Insult | null) => void
}


export default function PickInsult({insults, pickInsult}: InsultPickerProps) {
    return <>
        <Autocomplete
            className="autocomplete-input"
            options={insults}
            getOptionLabel={(insult) => insult.name}
            autoComplete
            includeInputInList
            renderInput={(params) => <TextField {...params} label="Insult" margin="normal"/>}
            onChange={(_, value) => pickInsult(value)}
        />
    </>
}
