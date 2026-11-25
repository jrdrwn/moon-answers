import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = `${OUTPUT_DIR}/${OUTPUT_FILE}`;

const MOON_WISHES = "You wished on me for love, money, and a parking space.";
const MOON_ANSWER = " I gave you tides.";
const MOON_SIGNOFF = " You're welcome.";

const ENTRY = [MOON_WISHES, MOON_ANSWER, MOON_SIGNOFF].join("");

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
