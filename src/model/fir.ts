import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user";

@Entity()
export class Fir{
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    date_lodged : Date

    @Column()
    inscident_date : Date

    @Column()
    place : string

    @ManyToOne(() => Users, (User) => User.id)
    petitioner : Users;
}