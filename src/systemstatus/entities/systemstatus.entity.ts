import { AbstractEntity } from "../../database/abstract.entity";
import { Location } from "../../locations/entities/location.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Systemstatus extends AbstractEntity<Systemstatus> {
    @Column()
    recorded: string;

    @Column()
    kernel_temperature: number;

    @Column()
    climatization_status: number;

    @ManyToOne(() => Location, (location) => location.systemstatus, { cascade: true})
    location: Location;
}
