import { CollectionReference, WriteResult } from '@google-cloud/firestore';
import { DeviceDocument } from '@hydro-garden-monorepo/utils/interfaces';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DevicesService {
  constructor(
    @Inject(DeviceDocument.collectionName)
    private devicesCollection: CollectionReference<DeviceDocument>
  ) {}

  async create({ macAddress, description, roomId }): Promise<DeviceDocument> {
    const docRef = this.devicesCollection.doc(macAddress);
    await docRef.set({
      macAddress,
      description,
      roomId,
    });
    const deviceDoc = await docRef.get();
    const device = deviceDoc.data();
    return device;
  }

  async findAll(): Promise<DeviceDocument[]> {
    const snapshot = await this.devicesCollection.get();
    const devices: DeviceDocument[] = [];
    snapshot.forEach((doc) => devices.push(doc.data()));
    return devices;
  }

  async read(id: string): Promise<DeviceDocument> {
    const docRef = this.devicesCollection.doc(id);
    const deviceDoc = await docRef.get();
    const device = deviceDoc.data();
    return device;
  }

  async delete(id: string): Promise<WriteResult> {
    const docRef = this.devicesCollection.doc(id);
    return docRef.delete();
  }
}
