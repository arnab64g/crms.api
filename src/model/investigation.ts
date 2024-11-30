import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./user";

@Entity()
export class Investigation{
    @OneToOne(()=>Users, (user) => user.id)
    @PrimaryColumn()
    id : string

    @Column()
    rank: string
}