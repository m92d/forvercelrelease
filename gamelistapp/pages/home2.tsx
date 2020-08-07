import { gameInfo } from "../interfaces/gameInfo";
import {GetServerSideProps} from 'next';
import { openDB2 } from "../openDB2";

export interface HomeProps{
    gameinfos:gameInfo[];
}


const Home2 = ({gameinfos}:HomeProps)=>{

    return(
        <div>
            this is gamelist from serversideprops
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


export const getServerSideProps:GetServerSideProps = async () =>{

    console.log('load serverside props');
    const db = await openDB2();
    //const gameinfos = await db.all<gameInfo[]>('select * from GAMEINFO');

    const gameinfos =[
        {id:1,title:'title1',platform:'platform',genre:'genre',playcount:1,infomation:'infomation',cratedate:'2099-01-01'},
        {id:2,title:'title1',platform:'platform',genre:'genre',playcount:1,infomation:'infomation',cratedate:'2099-01-01'}
    ];

    return {props:{gameinfos}};

}