import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  dateOfBirth: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  bio: string;
}
