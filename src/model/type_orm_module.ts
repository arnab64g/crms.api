import { DataSourceOptions } from "typeorm";
import { Users } from "./user";
import { Fir } from "./fir";
import { Accused } from "./accused";
import { Fcase } from "./fcase";
import { Investigation } from "./investigation";

export const type_orm_module : DataSourceOptions = {
    type : 'postgres',
    host : 'localhost',
    username : 'arnab',
    database : 'crms',
    password : '5656',
    port:5432,
    entities : [
        Users,
        Fir,
        Accused,
        Fcase,
        Investigation
    ],
    synchronize : true,
    migrations : []
}