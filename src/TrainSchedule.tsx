import React, { useEffect, useState } from 'react';
import './TrainSchedule.css';
import trainImage from 'C:/Users/NIHAARIKA/react-app/train.png';
interface Train {
  trainName: string;
  trainNumber: string
  departureTime: bigint;
  seatsAvailable: BigInteger;
  price: bigint;
  delayedBy: BigInt;
}

const TrainSchedule = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetchTrainSchedule();
  }, []);

  const fetchTrainSchedule = async () => {
    try {
      const response = await fetch('/api/trains');
      const data = await response.json();
      setTrains(data);
    } catch (error) {
      console.error('Error fetching train schedule:', error);
    }
  };

  return (
    <div>
      <h1>Train Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>trainName</th>
            <th>trainNumber</th>
            <th>departureTime</th>
            <th>seatsAvailable</th>
            <th>price</th>
            <th>delayedBy</th>
          </tr>
        </thead>
        <tbody>
          {trains.map(train => (
            <tr key={train.trainNumber}>
              <td>{train.trainName}</td>
              <td>{train.trainNumber}</td>
              <td>{train.departureTime}</td>
              <td>{train.seatsAvailable}</td>
              <td>{train.price}</td>
              <td>{train.delayedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <img src={trainImage} alt="Train" className="train-image" />
    </div>
  );
};

export default TrainSchedule;
