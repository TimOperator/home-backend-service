import { Condition } from "../../conditions/entities/condition.entity";
import { AbstractEntity } from "../../database/abstract.entity";
import { Systemstatus } from "../../systemstatus/entities/systemstatus.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Location extends AbstractEntity<Location> {
    @Column()
    city: string;

    @Column()
    location: string;

    @OneToMany(() => Condition, (condition) => condition.location)
    conditions: Condition[];

    @OneToMany(() => Systemstatus, (systemstatus) => systemstatus.location)
    systemstatus: Systemstatus[];
}
