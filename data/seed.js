import dotenv from 'dotenv';
import colors from 'colors';
import { db } from '../config/db.js';
import Services from '../models/Services.js';
import { services } from './medicServices.js';

dotenv.config();

await db();

async function seedDB() {
    try {
        await Services.insertMany(services);
        console.log(colors.cyan.italic.bold('Database seeded!'));
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

async function clearDB() {
    try {
        await Services.deleteMany();
        console.log(colors.magenta.italic.bold('Database cleared!'));
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

if(process.argv[2] === '--import') {
    seedDB();
} else {
    clearDB();
}