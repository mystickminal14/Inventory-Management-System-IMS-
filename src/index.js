import dotenv from 'dotenv';
import {dbInstance} from './database/instance.js';
dotenv.config({
    path:'./env'
})
dbInstance();