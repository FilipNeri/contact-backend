import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// decorator - será sempre armazenado na tabela de appointments
// sempre será em cima do que quer relacionar à tabela
@Entity("people")
class Person {
  //primary key gerado automaticamente
  @PrimaryGeneratedColumn("increment") // podreia ser increment
  id: number;

  //coluna tradicional
  @Column() // ja é varchar
  name: string;
}

export default Person;
