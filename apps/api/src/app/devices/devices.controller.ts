import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DevicesService } from './devices.service';
import {
  DeviceCreateIfNotExistsDto,
  DevicePutTemperatureDto,
} from '@hydro-garden-monorepo/utils/interfaces';
import { RoomsService } from '../rooms/rooms.service';

@Controller('devices')
export class DevicesController {
  constructor(
    private devicesService: DevicesService,
    private roomsService: RoomsService
  ) {}

  @Get()
  list() {
    return this.devicesService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.devicesService.read(id);
  }

  @Post()
  attendance(@Body() createIfNotExists: DeviceCreateIfNotExistsDto) {
    return this.devicesService.createIfNotExists({
      macAddress: createIfNotExists.macAddress,
      description: createIfNotExists.description ?? '',
      roomId: createIfNotExists.roomId ?? '',
    });
  }

  @Put('/temp')
  async temperature(@Body() putTemperature: DevicePutTemperatureDto) {
    const device = await this.devicesService.read(putTemperature.macAddress);
    const { temp, humid } = putTemperature;
    return this.roomsService.putTemperature(device.roomId, { temp, humid });
  }
}
