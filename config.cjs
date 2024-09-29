// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUdUVUpkaHZZdTlvNWJmVlNaNHRyQzcweUNwQVZVQlVuRjh4V1NUTGZtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHlpUkQ3aGdmZzg5WlVXQ0tLZVFRZXY2TXBCWFFWbSthQjYzUG50YTV6ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRkF2eW1nQzM1Y254WWdSU1Q1VzhQTkNxUWwwTGFVOFhVbk1EMjlUVEc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUZ25MQjlWdzMrcXdXZkhKQm9uZmZydThEOTJPK1ZIQjdKK1cvR0RqcVg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBaVF4ZDNqY0daS3JrTFV4VGdBQjBmbFVGSVNzdUF6WC9reUloYmd3MjQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxHNFc2ZjZuV2JHMHA5UzR4WFhrZEJrTXBxQi9MS2M0d0hISlVPTENOMmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUhXRnRHQXR4eC8rUThNUkpJaFlUdjJrYzZnTWFWTytsbjU1ZmlrNHkyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTNTRnFQTTB3V3NrS2JqdTZNUWM4YXFobFlJZ01mbUx3TldLODJIa0kxRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZyazFyQ1QxMUhMUkFaaDd3VWlpeEIyQW1hc3l6NWk4RS9lUjE5NXJmYWhQb0tFbmZndk5yVGI5Mnh0NVgwVVNMNjJBa2V2bjE1UGdJK3U0TzhrRGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoicjZCbngyTGVnN1ZpQUcwalVKbVZvYzlkWEVtc0pMQU4vL0RRRXlaTmZ0Yz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoialk2VTNseWRTaHlrdDZib0lDcmlVUSIsInBob25lSWQiOiJhMWM0YzFmZi1hZjRlLTRmYmYtYjM5Ny00ODUzOTFjYjM1YmUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGE4cWkrbkhwZkRYVUl5WjlHeXFNandhdEtRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imxza0xyR3hxRmNMTFZOeFVGeERyRWIxUWxlOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNSlpCODQ2SiIsIm1lIjp7ImlkIjoiOTQ3NTc1ODY5MTE6MThAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B1Tzc5OEVFS2VRNWJjR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjdwMHpaQktDUUZiK21PTDVSYlViSmNNTDluNDYzczRMUFk2T3AwR0FFVU09IiwiYWNjb3VudFNpZ25hdHVyZSI6IlQxRklzZ2h6R0RENzFRZE94dGlZdnRhbG9xNEdQbVp3U0ZWUHI2dDBoVHFnVTY4bllhL1ZDbS8yclVFOFBXSko0bkJQRE5oVWVGTlZjc3JSVzhzT0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkYTBNcG9ROXVCV29ScjZWWVRKcTIwWW5oWVZrN1lvc3FWUGhmMWZyTnhLVk9WTWpSLzR5Z1FlSjZBZVg4dTkwVlRnbTdxa1J3TytaTXpTT0szR2lpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzU3NTg2OTExOjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmU2ZE0yUVNna0JXL3BqaStVVzFHeVhEQy9aK090N09DejJPanFkQmdCRkQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc2MTI5ODAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRFh0In0=",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : true,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "private",
  OWNER_NAME: process.env.OWNER_NAME || "🍂🖤𝗞𝗜𝗡𝗚 𝗔𝗡𝗝𝗔𝗡𝗔 𝗕𝗕𝗛 💦🥵🍂",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94760105256",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
