import path from "path";
import fs from "fs";
import {Insult} from "../models/Insult";

export async function readInsultsFile(): Promise<Insult[]> {
    const dir = path.join(process.cwd(), "insults.json")
    const fileContents = await fs.promises.readFile(dir, 'utf-8')
    return  JSON.parse(fileContents) as Insult[]
}
