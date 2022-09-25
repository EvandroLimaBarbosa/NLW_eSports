<<<<<<< Updated upstream
import express, { request, response } from "express";
=======
import express from "express";
import cors from 'cors'

import { PrismaClient } from "@prisma/client";
import { convertHourStringToMinutes } from "./utils/convert-hour-string-to-minutes";
import { convertMinutesToHourString } from "./utils/convert-minutes-to-hour-string";
>>>>>>> Stashed changes

const app = express();

// primeiro entre na pasta server e
// depois digite no terminal
// npm run dev

// colocar no hoppscotch
// localhost:3333/ads

app.get('/games', (request, response) => {
  return response.json([]);
});

app.post('/ads', (request, response) => {
  return response.status(201).json(['']);
});


app.get("/games/:id/ads", (request, response) => {
  //const gameId = request.params.id;

  return response.json([
    { id: 1, name: "Anuncio 1" },
    { id: 2, name: "Anuncio 2" },
    { id: 3, name: "Anuncio 3" },
    { id: 4, name: "Anuncio 4" },
    { id: 5, name: "Anuncio 5" },
  ]);
});

app.get("/ads/:id/discord", (request, response) => {
  //const adId = request.params.id;

  return response.json([
  ]);
});

app.listen(3333);
