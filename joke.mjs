#!/usr/bin/env node
import fetch from "node-fetch";

const res = await fetch("https://official-joke-api.appspot.com/jokes/random");
const data = await res.json();
console.log(`😂 ${data.setup}\n👉 ${data.punchline}`);
