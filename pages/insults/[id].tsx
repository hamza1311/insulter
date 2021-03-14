import {useRouter} from "next/router";
import {readInsultsFile} from "../../utils/insults-fs";
import {GetStaticPropsContext} from "next";
import {Insult} from "../../models/Insult";
import Card from "../../components/Card";
import Typography from "@material-ui/core/Typography";

export default function ShowInsult({insult}: { insult: Insult }) {
    const router = useRouter()

    let resp = insult.response
    insult.fields.forEach(field => {
        resp = resp.replace(`:${field.field}`, router.query[field.field] as string)
    })

    const onBackPressed = async () => {
        await router.push("/")
    }

    return <Card showBackButton={true} onBackPressed={onBackPressed}>
        <Typography variant="h4" component="p">
            {resp}
        </Typography>
    </Card>
}


export async function getStaticProps({params}: GetStaticPropsContext) {
    if (params === undefined || !params.id) {
        return {
            notFound: true,
        }
    }

    const insults = await readInsultsFile()
    const insult = insults.filter(it => it.id === params.id)[0]
    return {
        props: {
            insult: insult
        }
    }
}

export async function getStaticPaths() {
    const insults = await readInsultsFile();

    const paths = insults.map(insult => {
        return {params: {id: insult.id}}
    })

    return {
        paths,
        fallback: false
    };
}
