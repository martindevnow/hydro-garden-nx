import { Button } from '@hydro-garden-monorepo/web/ui-shared';
import { addDoc, collection, Firestore } from 'firebase/firestore/lite';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/firebase.config';
// import { useHistory } from 'react-router-dom';

const RoomCreate = () => {
  const navigate = useNavigate();

  const [name, setName] = React.useState<string>('');
  const save = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const roomsRef = collection(db, 'rooms');
    await addDoc(roomsRef, { name });
    navigate('/');
  };

  return (
    <div>
      <h1>Create a new Room</h1>
      <form onSubmit={(e) => save(e)}>
        <label>Name: </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <Button>Save</Button>
      </form>
    </div>
  );
};

export default RoomCreate;
