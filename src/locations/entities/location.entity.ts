import { Condition } from "src/conditions/entities/condition.entity";
import { AbstractEntity } from "src/database/abstract.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Location extends AbstractEntity<Location> {
    @Column()
    city: string;

    @Column()
    location: string;

    @OneToMany(() => Condition, (condition) => condition.location)
    conditions: Condition[];
}
