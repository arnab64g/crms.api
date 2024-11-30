import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Fir } from "./fir";
import { Fcase } from "./fcase";

@Entity()
export class Accused {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string

    @Column()
    gender : number

    @Column()
    age : number

    @Column()
    status : string;

    @ManyToMany(()=>Fcase, (fcase)=> fcase.id)
    fcase : Fcase[] 
}