import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Condition {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    recorded: string;

    @Column()
    location_id: number;

    @Column()
    imgdata: string;
}