import { getCustomRepository } from "typeorm";

import Person from "../models/Person";
import PeopleRepository from "../repositories/PeopleRepository";

interface Request {
  id: number;
  name: string;
}
class CreatePersonService {
  public async execute({ id, name }: Request): Promise<Person> {
    const peopleRepository = getCustomRepository(PeopleRepository);

    const person = peopleRepository.create({
      id,
      name,
    });
    await peopleRepository.save(person);
    return person;
  }
}
export default CreatePersonService;
