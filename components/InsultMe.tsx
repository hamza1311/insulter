import {Insult} from "../models/Insult";
import {Button, createStyles, makeStyles, TextField} from "@material-ui/core";
import {useRef} from "react";
import {useRouter} from "next/router";

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '2em',
        }
    })
)

interface InsultProps {
    insult: Insult,
}

export default function InsultMe({insult}: InsultProps) {
    const data = useRef(new Map())
    const router = useRouter()

    const styles = useStyles()

    const fields = insult.fields.map(field => {
        return (
            <TextField
                onChange={(e) => data.current.set(field.field, e.target.value)}
                placeholder={field.name}
                key={field.field}
            />
        )
    })

    const onClick = async () => {
        let url = `/insults/${insult.id}`
        insult.fields.map(it => it.field).forEach(field => {
            url = url.concat(`?${field}=${data.current.get(field)}`)
        })
        await router.push(url)
    }

    return <div className={styles.container}>
        {fields}
        <Button onClick={onClick} variant="text">Insult</Button>
    </div>
}
