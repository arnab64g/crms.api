import internal from "stream";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryColumn()
    id : string

    @Column()
    name : string

    @Column()
    username : string

    @Column()
    contact : string

    @Column()
    password : string

    @Column()
    role : string;
}

export interface UserLogin{
    username : string;
    password : string;
}

export interface LoginResult{
    successed : boolean;
    message : string;
    token : string;
}
