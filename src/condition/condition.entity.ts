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
    temperature: number;

    @Column()
    humidity: number;

    @Column()
    clouds: number;

    @Column()
    wind_speed: number;

    @Column()
    wind_deg: number;
}