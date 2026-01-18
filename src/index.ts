import * as process from "node:process";

const TOKEN = process.env["TOKEN"];
if (TOKEN !== undefined) {
  console.log(`TOKEN is ${TOKEN}`);
} else {
  console.log(`TOKEN not found in your .env`);
}