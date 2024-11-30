import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Fir } from "./fir";
import { Investigation } from "./investigation";
import { Accused } from "./accused";

@Entity()
export class Fcase{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    case_details : string

    @Column()
    case_status : string

    @Column()
    section_of_law : string

    @OneToOne(() => Fir, (Fir) => Fir.id)
    @JoinColumn()
    fir : Fir

    @ManyToOne(() => Investigation, (Investigation) => Investigation.id)
    @JoinColumn()
    investigation : Investigation | null

    @ManyToMany(()=>Accused, (accused)=> accused.id)
    @JoinTable()
    accused : Accused[] | null
}