import axios from 'axios';
import { DB } from './db.interface';

const url = "https://raw.githubusercontent.com/finstory/practicas_codexpert/main/src/pruebas/p_06/db.json";

export const getDB = new Promise<DB>((resolve, reject) => {
    axios.get(url)
        .then((response) => resolve(response.data))
        .catch(error => {
            console.error('Error fetching JSON:', error);
            reject(error);
        });
})

export const getDbFunction = async (): Promise<DB> => {
    const db = await axios.get(url);
    return db.data;
};
