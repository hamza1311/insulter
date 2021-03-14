// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {NextApiRequest, NextApiResponse} from "next";
import {readInsultsFile} from "../../../utils/insults-fs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("query", req.query)
    const {
        query,
        method,
    } = req

    switch (method) {
        case 'GET':
            const insults = await readInsultsFile()
            const insult = insults.find(it => it.id == query.id)
            if (insult !== undefined) {
                res.status(200).json(insult)
            } else {
                res.status(404).end(`Insult "${query.id}" Not Found`)
            }
            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
