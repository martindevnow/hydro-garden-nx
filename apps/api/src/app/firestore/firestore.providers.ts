import { RoomDocument } from '@hydro-garden-monorepo/utils/interfaces';

export const FirestoreDatabaseProvider = 'firestoredb';
export const FirestoreOptionsProvider = 'firestoreOptions';
export const FirestoreCollectionProviders: string[] = [
  RoomDocument.collectionName,
];
