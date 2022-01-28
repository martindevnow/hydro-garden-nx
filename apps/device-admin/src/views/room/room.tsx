import React from 'react';
import { doc, DocumentData, getDoc, getDocs } from '@firebase/firestore/lite';
import { useParams } from 'react-router-dom';
import { collection } from 'firebase/firestore/lite';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';

import { db } from '../../firebase/firebase.config';

const Room = () => {
  const params = useParams();
  const [room, setRoom] = React.useState<DocumentData | undefined>(undefined);
  const [temperatures, setTemperatures] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    const getRooms = async () => {
      const roomRef = doc(db, `rooms/${params.roomId}`);
      const roomSnap = await getDoc(roomRef);
      const roomD = roomSnap.data();

      if (roomD) {
        const tempsRef = collection(db, `rooms/${params.roomId}/temp`);
        const tempsSnap = await getDocs(tempsRef);
        const temps = tempsSnap.docs;
        const res = temps.map((snap) => snap.data());
        setTemperatures(res);
      }
      setRoom(roomD);
    };
    getRooms();
  }, [params.roomId]);

  return (
    <div>
      <h1>Room: {room?.name}</h1>
      <ResponsiveContainer width={'100%'} height={400}>
        <LineChart
          data={temperatures}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="time" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="temp" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="humid" stroke="#387908" yAxisId={1} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Room;
