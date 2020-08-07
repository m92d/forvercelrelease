const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

async function setup() {
  const db = await sqlite.open({
    filename: 'gamelist.sqlite',
    driver: sqlite3.Database,
  });

  await db.migrate({ force: 'last' });

  const gameinfos = await db.all('SELECT * FROM gameinfo ORDER BY createDate DESC');
  console.log('ALL gamelist', JSON.stringify(gameinfos, null, 2));


}

setup();