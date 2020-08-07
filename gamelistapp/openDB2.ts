import {open} from 'sqlite';
import sqlite3 from 'sqlite3';

export async function openDB2(){
    return open({
        filename: '/gamelist.sqlite',
        driver: sqlite3.Database
      })
}