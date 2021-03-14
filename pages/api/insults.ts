// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {NextApiRequest, NextApiResponse} from "next";
import {readInsultsFile} from "../../utils/insults-fs";

export default async (_req: NextApiRequest, res: NextApiResponse) => {
    const insults = await readInsultsFile()
    res.status(200).json(insults)
}


//i'd rather cry because of being alone than because of being hurt
