import { gameInfo } from "../interfaces/gameInfo";
import {GetStaticProps} from 'next';
import { openDB } from "../openDB";

export interface HomeProps{
    gameinfos:gameInfo[];
}


const Home = ({gameinfos}:HomeProps)=>{

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
                <img src="/test.png"/>
            </div>
        </div>
    );
}
export default Home

export const getStaticProps:GetStaticProps = async () =>{

    console.log('load static props');
    const db = await openDB();
    const gameinfos = await db.all(`
        select * from GAMEINFO
    `);

    return {props:{gameinfos}};

}