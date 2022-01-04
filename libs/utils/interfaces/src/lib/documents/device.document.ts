export class DeviceDocument {
  static collectionName = 'devices';

  macAddress!: string; // id
  roomId?: string; // ref id to room

  description?: string;
}
