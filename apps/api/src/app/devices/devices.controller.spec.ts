import {
  DeviceDocument,
  RoomDocument,
} from '@hydro-garden-monorepo/utils/interfaces';
import { Test, TestingModule } from '@nestjs/testing';
import { DevicesController } from './devices.controller';
import { DevicesService } from './devices.service';

describe('DevicesController', () => {
  let controller: DevicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevicesController],
      providers: [
        DevicesService,
        {
          provide: DeviceDocument.collectionName,
          useValue: {
            get: jest.fn().mockResolvedValue([]),
          },
        },
        {
          provide: RoomDocument.collectionName,
          useValue: {
            get: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile();

    controller = module.get<DevicesController>(DevicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
