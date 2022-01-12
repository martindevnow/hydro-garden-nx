import { Injectable, Inject, Logger } from '@nestjs/common';
import { CollectionReference, WriteResult } from '@google-cloud/firestore';
import {
  DevicePutTemperatureDto,
  RoomDocument,
} from '@hydro-garden-monorepo/utils/interfaces';

interface TempData {
  humid: string;
  temp: string;
}
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

  async putTemperature(
    roomId: string,
    putTemperature: Pick<DevicePutTemperatureDto, 'humid' | 'temp'>
  ) {
    const { humid, temp } = putTemperature;
    const time = new Date(Date.now()).toISOString().split('.')[0];
    return this.roomsCollection.doc(roomId).collection('temp').doc(time).set({
      temp,
      humid,
      time,
    });
  }

  async getTemperatures(roomId: string): Promise<Array<TempData>> {
    const tempDocs = await this.roomsCollection
      .doc(roomId)
      .collection('temp')
      .get();
    const temps: TempData[] = [];
    tempDocs.forEach((doc: FirebaseFirestore.QueryDocumentSnapshot<TempData>) =>
      temps.push(doc.data())
    );
    return temps;
  }
}
