import React, { useEffect, useState } from "react";
import CarsService from "../services/CarsService";

export default function AppCars() {
  const [cars, setCars] = useState([
    {
      brand: "tesla",
      model: "string",
      year: 2010,
      maxSpeed: 300,
      isAutomatic: true,
      engine: "string",
      numberOfDoors: 4,
      id: 1,
    },
  ]);

  const handleCarsData = async () => {
    const data = await CarsService.getAll();
    setCars(data);
  };

  // useEffect(() => {
  //   handleCarsData();
  // }, []);

  return (
    <div>
      <h2>Cars showcase:</h2>
      {cars &&
        cars.map((car) => (
          <div key={car.id}>
            <hr />
            <p>Car brand: <strong>{car.brand}</strong></p>
            <p>Car model: <strong>{car.model}</strong></p>
            <p>Car year: <strong>{car.year}</strong></p>
            <p>Car maxSpeed: <strong>{car.maxSpeed}</strong></p>
            <p>Car isAutomatic: <strong>{car.isAutomatic}</strong></p>
            <p>Car engine: <strong>{car.engine}</strong></p>
            <p>Car numberOfDoors: <strong>{car.numberOfDoors}</strong></p>
            <hr />
          </div>
        ))}
    </div>
  );
}
