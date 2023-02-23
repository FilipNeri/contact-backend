import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  id_person: number;

  @Column()
  whatsapp: string;

  @Column()
  phone: string;

  @Column()
  email: string;
}

export default Contact;
