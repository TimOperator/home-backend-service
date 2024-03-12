import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationsDto } from './create-locations.dto';

export class UpdateLocationsDto {
    city: string;
    location: string;
}
