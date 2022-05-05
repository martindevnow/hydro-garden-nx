import { Button } from '@hydro-garden-monorepo/web/ui-shared';
import { addDoc, collection, Firestore } from 'firebase/firestore/lite';
import React from 'react';
import { db } from '../../firebase/firebase.config';
import { useHistory } from 'react-router-dom';

const RoomCreate = () => {
  const history = useHistory();
  const [name, setName] = React.useState<string>('');
  const save = async () => {
    const roomsRef = collection(db, 'rooms');
    const res = await addDoc(roomsRef, { name });
    return;
  };
  return (
    <div>
      <h1>Create a new Room</h1>
      <form>
        <label>Name: </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <Button onClick={() => save()}>Save</Button>
      </form>
    </div>
  );
};

export default RoomCreate;
