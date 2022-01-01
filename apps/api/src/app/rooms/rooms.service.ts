import { Injectable, Inject, Logger } from '@nestjs/common';
import { CollectionReference, WriteResult } from '@google-cloud/firestore';
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
    const roomDoc = await docRef.get();
    const room = roomDoc.data();
    return room;
  }

  async findAll(): Promise<RoomDocument[]> {
    const snapshot = await this.roomsCollection.get();
    const rooms: RoomDocument[] = [];
    snapshot.forEach((doc) => rooms.push(doc.data()));
    return rooms;
  }

  async read(id: string): Promise<RoomDocument> {
    const docRef = this.roomsCollection.doc(id);
    const roomDoc = await docRef.get();
    const room = roomDoc.data();
    return room;
  }

  async delete(id: string): Promise<WriteResult> {
    const docRef = this.roomsCollection.doc(id);
    return docRef.delete();
  }
}
