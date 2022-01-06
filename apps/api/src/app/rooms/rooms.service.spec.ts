import { RoomDocument } from '@hydro-garden-monorepo/utils/interfaces';
import { Test, TestingModule } from '@nestjs/testing';
import { RoomsService } from './rooms.service';

describe('RoomsService', () => {
  let service: RoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoomsService,
        {
          provide: RoomDocument.collectionName,
          useValue: {
            get: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile();

    service = module.get<RoomsService>(RoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return empty', async () => {
    expect(await service.findAll()).toMatchObject([] as unknown as any);
  });
});
