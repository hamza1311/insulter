import {readInsultsFile} from "../utils/insults-fs";
import {Insult} from "../models/Insult";
import {useState} from "react";
import PickInsult from "../components/PickInsult";
import InsultMe from "../components/InsultMe";
import Card from "../components/Card";
import {Collapse} from "@material-ui/core";

interface HomeProps {
    insults: Insult[]
}

export default function Home({insults}: HomeProps) {

    const [currentInsult, setCurrentInsult] = useState<Insult | null>(null)

    return (
        <>

            <Card showBackButton={false}>
                <PickInsult insults={insults} pickInsult={setCurrentInsult}/>

                <Collapse in={currentInsult !== null}>
                    {currentInsult && <InsultMe insult={currentInsult}/>}
                </Collapse>
            </Card>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            insults: await readInsultsFile()
        }
    }
}
