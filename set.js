const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID |Gifted;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZXU3dReVFzREkwZXZBSUd3NXdIQk4vd1FBUDg2UUFVMTl6YXZNL0pWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDU1YmJET0w1TitnbWEyR1VCQWh3bmVNWGp4N25QSE5FejkrbEZCa3BFbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSkJzOENEZ3hScFdOZnNZWmgxNEFRNTZjekJNV3JxTlFSMmd5VFBiMDNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0ZHhUMjhENSt5Uk8wemdrY0hZT0ZEeEhEVXZGYWVqcGt6V1QvVWNldmtNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBCVUtnN1c4MWN6ZkJianZzUGtlSHNGQXVRNHBFSTRQYUdmZ0RTZ1YxRkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVNaG1xYTFuVkpLT3V5UDJSSm9EWWJxdCtxaFlNc3l6OTZ0SXFSeXYrMTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FPSTRzc2VBQTRvU283NXg5bnJ3NG9vYW1FRzNaMkFTdXJxWUpuNStsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMktkVzBNUWt1Y2JuTmlXdlJmdk1WK2VXRHczU0dGRzZ4U2FNME9KRjFoTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxSZWdvZEdxU2FLM2txNHREMk5sVVMrYzBhMkxieGlHVVMzeE41NGttMHpvbzU2K3JLamNOSldPQ1plNXUrYkxCb0hhL3dQQkdmblM0SEdvNHYvTkNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiJjSWJhS01HemZROVUvc2tEZlBHRUdMQlV2bE43dkhLcXRPWTFUTFV2dHBNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJczEtQW5BMFF5YWpzTC1rYjdFYkRnIiwicGhvbmVJZCI6ImQyODc2ZjRmLWRmNzMtNGE4Yy1hNWVlLWY0ZDE0Y2EzZGMxYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoUU85NkFOZ1NZWDZreVRLYkt5dy91TENYRUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmxicVg0UTI4KzhCS0lqL3ZmU0d0RWxnYi93PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQzSzFOS0EyIiwibWUiOnsiaWQiOiIyNTQ3OTUyOTc4NTU6NzZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ0hBRFdJQ0sgSE9SQUNFIOKcqPCfkqsifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0liRitPMEhFTTNvczdJR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZ6ZTZCUmgxWU1NbUpYbm9yV0RRNmhFMTEvTmtNR24vVUUvNUFEUkJUa1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitlL0ZoSVl6ZHRTV1hZS1lEZzNMQWZ6OW5LWGRyQk1Lak1tZ093dGFuejJqQXZZTGhyNFl1RUtEbmk4SDBHUno4S2Y1Sm9HK3hwOUFiRDlrRU9LRkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOenFSaFRKbkxOcFdmU1hnbFVhUWkvZVJtWnpudFBzck5KT3I3dGVzK3VPS21QWG5JR1E0bE5ad3RVUE1XTytjeERHTUQvMW9sbjI0YlZmVEQxbmlEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5NTI5Nzg1NTo3NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSYzN1Z1VZZFdEREppVjU2SzFnME9vUk5kZnpaREJwLzFCUCtRQTBRVTVGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE2MzE5MzIyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9UOCJ9| 'Gifted;;;',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Gifted Tech",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "254762016957,254728782591", 
             
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
AUTOREAD_MESSAGES: process.env.AUTO_READ_MESSAGES || "no",
CHATBOT: process.env.CHAT_BOT || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ɢɪғᴛᴇᴅ-ᴍᴅ',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    PRESENCE : process.env.PRESENCE || 'online',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
