import { AbstractEntity } from "src/database/abstract.entity";
import { Location } from "src/locations/entities/location.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Condition extends AbstractEntity<Condition> {
    @Column()
    recorded: string;
    
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

    @ManyToOne(() => Location, (location) => location.conditions, { cascade:true })
    location: Location;
}
