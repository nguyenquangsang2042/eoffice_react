import { Column, PrimaryColumn } from "typeorm";
import { Entity } from "typeorm/browser";

@Entity()
export class DBVariable{
    @PrimaryColumn({type:"nvarchar"})
    id!:string;
    @Column({type:'nvarchar'})
    value!:string;
}