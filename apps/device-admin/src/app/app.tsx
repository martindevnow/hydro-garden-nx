import styled from 'styled-components';
import { Header } from '@hydro-garden-monorepo/web/ui-shared';
import { RoomDocument } from '@hydro-garden-monorepo/utils/interfaces';

import React from 'react';
import { collection, getDocs } from '@firebase/firestore/lite';
import { db } from '../firebase/firebase.config';
import { Link, Route, Routes } from 'react-router-dom';
import Room from '../views/room/room';

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
          <button>{room.name}</button>
        </Link>
      ))}
      <Routes>
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
