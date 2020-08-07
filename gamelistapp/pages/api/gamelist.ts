import { NextApiRequest, NextApiResponse } from 'next';
import { getGameList } from "../../database/getGameList";

export default async function gamelist(
    req:NextApiRequest,
    res:NextApiResponse
){
    const gamelist = await getGameList();

    res.json(gamelist);
}