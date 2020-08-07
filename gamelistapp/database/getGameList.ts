import { gameInfo } from '../interfaces/gameInfo';
import {openDB} from "../openDB";


export async function getGameList(){

    const db = await openDB();

    const gamelist = await db.all<gameInfo[]>(`
        select * from GAMEINFO
    `);

    return gamelist;
}