import styled from 'styled-components';
import { Button, Header } from '@hydro-garden-monorepo/web/ui-shared';
import { RoomDocument } from '@hydro-garden-monorepo/utils/interfaces';

import React from 'react';
import { collection, getDocs } from '@firebase/firestore/lite';
import { db } from '../firebase/firebase.config';
import { Link, Route, Routes } from 'react-router-dom';
import Room from '../views/room/room';
import RoomCreate from '../views/room-create/room-create';

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

  return (
    <StyledApp>
      <Header title="All Rooms" />
      {rooms.map((room) => (
        <Link key={room.name} to={`/room/${room.name}`}>
          <Button>{room.name}</Button>
        </Link>
      ))}
      <Link to={`/room-create`}>
        <Button>New Room</Button>
      </Link>
      <Routes>
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/room-create" element={<RoomCreate />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
