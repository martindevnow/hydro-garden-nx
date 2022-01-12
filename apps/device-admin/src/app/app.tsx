import styled from 'styled-components';
import { Header } from '@hydro-garden-monorepo/web/ui-shared';
import { RoomDocument } from '@hydro-garden-monorepo/utils/interfaces';

import React from 'react';
import { collection, getDocs } from '@firebase/firestore/lite';
import { db } from '../firebase/firebase.config';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [rooms, setRooms] = React.useState<RoomDocument[]>([]);

  React.useEffect(() => {
    // Talk to Firebase to get data
    const getRooms = async () => {
      const roomsCol = collection(db, 'rooms');
      const roomsSnapshot = await getDocs(roomsCol);
      const roomsList = roomsSnapshot.docs.map(
        (doc) => doc.data() as RoomDocument
      );
      setRooms(roomsList);
    };
    getRooms();
  }, []);

  // React.useEffect(() => {
  //   // Talk to API to get data
  //   const getRooms = async () => {
  //     const res = await fetch('http://localhost:3334/rooms');
  //     const roomsList = await res.json();
  //     setRooms(roomsList);
  //   };
  //   getRooms();
  // }, []);

  return (
    <StyledApp>
      <Header title="Rooms" />
      {rooms.map((room) => (
        <button key={room.name}>{room.name}</button>
      ))}
    </StyledApp>
  );
}

export default App;
