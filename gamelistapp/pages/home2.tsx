import { gameInfo } from "../interfaces/gameInfo";
import {GetServerSideProps} from 'next';
import { openDB } from "../openDB";

export interface HomeProps{
    gameinfos:gameInfo[];
}


const Home2 = ({gameinfos}:HomeProps)=>{

    return(
        <div>
            this is gamelist
            <div>
                {gameinfos.map(gameinfo=>{
                    return(
                        <div key={gameinfo.id}>
                            {gameinfo.id} : {gameinfo.title}:{gameinfo.playcount}
                        </div>

                    );
                })}
            </div>
        </div>
    );
}
export default Home2

export const getServerSideProps:GetServerSideProps<HomeProps> = async () =>{

    console.log('load serverside props');
    const db = await openDB();
    const gameinfos = await db.all(`
        select * from GAMEINFO
    `);

    return {props:{gameinfos}};

}