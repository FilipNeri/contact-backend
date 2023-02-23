import { response, Router } from "express";
import { getCustomRepository } from "typeorm";

import ContactsRepository from "../repositories/ContactsRepository";
import CreateEstabelecimentoService from "../services/CreateContactService";

const contactsRouter = Router();

/* //array do tipo pontos turisticos
const contacts:PontosTuristico[] =[] */

contactsRouter.post("/", async (request, response) => {
  const { id, id_person, email, phone, whatsapp } = request.body;

  const createEstabelecimento = new CreateEstabelecimentoService();
  const contacts = await createEstabelecimento.execute({
    id,
    id_person,
    email,
    phone,
    whatsapp,
  });
  return response.json(contacts);
});
contactsRouter.put("/", async (request, response) => {
  const { id, id_person, email, phone, whatsapp } = request.body;

  const contactsRepository = getCustomRepository(ContactsRepository);
  const contacts = await contactsRepository.update(id, {
    id,
    id_person,
    email,
    phone,
    whatsapp,
  });
  return response.json(contacts);
});
contactsRouter.delete("/", async (request, response) => {
  const { id } = request.body;

  const contactsRepository = getCustomRepository(ContactsRepository);
  const contacts = await contactsRepository.delete(id);
  return response.json(contacts);
});
contactsRouter.get("/", async (request, response) => {
  const contactsRepository = getCustomRepository(ContactsRepository);
  const contacts = await contactsRepository.find();
  return response.json(contacts);
});
/* contactsRouter.patch('/image', upload.single('image'), async (request, response) => {
    return response.json({ ok: true })
}) */
export default contactsRouter;
