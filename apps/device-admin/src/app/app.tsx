import styled from 'styled-components';
import { Header } from '@hydro-garden-monorepo/web/ui-shared';
import { RoomDocument } from '@hydro-garden-monorepo/utils/interfaces';

import React from 'react';
import { collection, getDocs } from '@firebase/firestore/dist/lite';
import { db } from '../firebase/firebase.config';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [rooms, setRooms] = React.useState<RoomDocument[]>([]);
  React.useEffect(() => {
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
  return (
    <StyledApp>
      <Header title="Welcome" />
      {rooms.map((room) => (
        <h1 key={room.name}>{room.name}</h1>
      ))}
      <div>Hello 🙂</div>
    </StyledApp>
  );
}

export default App;
