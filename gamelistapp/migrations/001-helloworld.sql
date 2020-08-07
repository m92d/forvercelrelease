-- FAQ
CREATE TABLE GAMEINFO (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    platform TEXT,
    genre TEXT,
    playcount INTEGER default 0,
    infomation TEXT,
    createDate DATE
);

INSERT INTO GAMEINFO (title, platform, genre,playcount,infomation,createDate) values('1941 Counter Attack', 'AC','シューティング',1,'縦シュー', current_date);
INSERT INTO GAMEINFO (title, platform, genre,playcount,infomation,createDate) values('1942', 'AC','シューティング',1,'縦シュー', current_date);
INSERT INTO GAMEINFO (title, platform, genre,playcount,infomation,createDate) values('1942 改', 'AC','シューティング',1,'縦シュー', current_date);
INSERT INTO GAMEINFO (title, platform, genre,playcount,infomation,createDate) values('1943 midway海戦', 'AC','シューティング',1,'縦シュー', current_date);

INSERT INTO GAMEINFO (title, platform, genre,playcount,infomation,createDate) values('アクトレイザー', 'SFC','アクションシミュレーション',0,'', current_date);
INSERT INTO GAMEINFO (title, platform, genre,playcount,infomation,createDate) values('エイリアンｖｓプレデター', 'SFC','ベルトスクロール',0,'Y：攻撃、B：ジャンプ、Y+B：旋風脚、⇒⇒（おしっぱ）：ダッシュ、X：おしっぱでゲージ貯め、離してスペシャル攻撃', current_date);
INSERT INTO GAMEINFO (title, platform, genre,playcount,infomation,createDate) values('フライングヒーロー', 'SFC','シューティング',1,'B：ショット、Y：ボム、セレクト：スピード変更、L・R：ショット方向斜め方向にする。色彩がきれい。ケーキ３つで武器の強さが１段階上がる', current_date);


-- Down
DROP TABLE GAMEINFO;