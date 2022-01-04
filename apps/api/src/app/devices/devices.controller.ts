import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { CreateIfNotExistsDeviceDto } from '@hydro-garden-monorepo/utils/interfaces';

@Controller('devices')
export class DevicesController {
  constructor(private devicesService: DevicesService) {}

  @Get()
  list() {
    return this.devicesService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.devicesService.read(id);
  }

  @Post()
  attendance(@Body() createIfNotExists: CreateIfNotExistsDeviceDto) {
    return this.devicesService.create({
      macAddress: createIfNotExists.macAddress,
      description: createIfNotExists.description ?? '',
      roomId: createIfNotExists.roomId ?? '',
    });
  }
}
