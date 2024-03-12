import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Locations {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    city: string;

    @Column()
    location: string;

    constructor(locations: Partial<Locations>) {
        Object.assign(this, locations);
    }
}
