import { PartialType } from '@nestjs/mapped-types';
import { CreateSystemstatusDto } from './create-systemstatus.dto';

export class UpdateSystemstatusDto extends PartialType(CreateSystemstatusDto) {}
