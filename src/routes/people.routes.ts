import { response, Router } from "express";
import { getCustomRepository, Table } from "typeorm";

import PeopleRepository from "../repositories/PeopleRepository";
import CreatePersonService from "../services/CreatePersonService";

const peopleRouter = Router();

/* //array do tipo pontos turisticos
const person:PontosTuristico[] =[] */

peopleRouter.post("/", async (request, response) => {
  const { id, name } = request.body;

  const createPerson = new CreatePersonService();
  const person = await createPerson.execute({
    id,
    name,
  });
  return response.json(person);
});
peopleRouter.put("/", async (request, response) => {
  const { id, name } = request.body;

  const peopleRepository = getCustomRepository(PeopleRepository);
  const person = await peopleRepository.update(id, {
    id,
    name,
  });
  return response.json(person);
});
peopleRouter.delete("/", async (request, response) => {
  const { id } = request.body;

  const peopleRepository = getCustomRepository(PeopleRepository);
  const person = await peopleRepository.delete(id);
  return response.json(person);
});
peopleRouter.get("/", async (request, response) => {
  const peopleRepository = getCustomRepository(PeopleRepository);
  const person = await peopleRepository.find();
  return response.json(person);
});
/* peopleRouter.patch('/image', upload.single('image'), async (request, response) => {
    return response.json({ ok: true })
}) */
export default peopleRouter;
