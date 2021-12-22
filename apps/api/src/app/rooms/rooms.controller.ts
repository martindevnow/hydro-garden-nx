import { CreateRoomDto } from '@hydro-garden-monorepo/utils/interfaces';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private roomsService: RoomsService) {}

  @Get()
  listAllRooms() {
    return this.roomsService.findAll();
  }

  @Post()
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
  }
}
