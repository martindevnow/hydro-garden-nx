import { Injectable, Inject, Logger } from '@nestjs/common';
import { CollectionReference } from '@google-cloud/firestore';
import { RoomDocument } from '@hydro-garden-monorepo/utils/interfaces';

@Injectable()
export class RoomsService {
  private logger: Logger = new Logger(RoomsService.name);

  constructor(
    @Inject(RoomDocument.collectionName)
    private roomsCollection: CollectionReference<RoomDocument>
  ) {}

  async create({ name }): Promise<RoomDocument> {
    const docRef = this.roomsCollection.doc(name);
    await docRef.set({
      name,
    });
    const todoDoc = await docRef.get();
    const todo = todoDoc.data();
    return todo;
  }

  async findAll(): Promise<RoomDocument[]> {
    const snapshot = await this.roomsCollection.get();
    const rooms: RoomDocument[] = [];
    snapshot.forEach((doc) => rooms.push(doc.data()));
    return rooms;
  }
}
