import { getCustomRepository } from "typeorm";
import Contact from "../models/Contact";
import ContactsRepository from "../repositories/ContactsRepository";

interface Request {
  id: number;
  id_person: number;
  email: string;
  phone: string;
  whatsapp: string;
}
class CreateEstabelecimentoService {
  public async execute({
    id,
    id_person,
    email,
    phone,
    whatsapp,
  }: Request): Promise<Contact> {
    const contactsRepository = getCustomRepository(ContactsRepository);

    const contact = contactsRepository.create({
      id,
      id_person,
      email,
      phone,
      whatsapp,
    });
    await contactsRepository.save(contact);
    return contact;
  }
}
export default CreateEstabelecimentoService;
