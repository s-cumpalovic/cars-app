import React, { useEffect, useState } from "react";
import CarsService from "../services/CarsService";
import { Link } from "react-router-dom";
import SingleCar from "../components/SingleCar";

export default function AppCars() {
  const [cars, setCars] = useState();
  const handleCarsData = async () => {
    const carsData = await CarsService.getAll();
    setCars(carsData);
  };

  useEffect(() => {
    handleCarsData();
  }, []);

  return (
    <div>
      <h2>Cars showcase:</h2>
      {cars &&
        cars.map((car) => (
          <div key={car.id}>
            <SingleCar
              key={car.id}
              brand={car.brand}
              model={car.model}
              year={car.year}
              maxSpeed={car.maxSpeed}
              isAutomatic={car.isAutomatic}
              engine={car.engine}
              numberOfDoors={car.numberOfDoors}
            />
            <Link to={`/edit/${car.id}`}>
              <button className="btn btn-warning">Edit</button>
            </Link>
          </div>
        ))}
    </div>
  );
}
