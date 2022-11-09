import React from "react";

export default function SingleCar({
  id,
  brand,
  model,
  year,
  maxSpeed,
  isAutomatic,
  engine,
  numberOfDoors,
}) {
  return (
    <div className="cars-container" key={id}>
      <hr />
      <p>
        Car brand: <strong>{brand}</strong>
      </p>
      <p>
        Car model: <strong>{model}</strong>
      </p>
      <p>
        Car year: <strong>{year}</strong>
      </p>
      <p>
        Car maxSpeed: <strong>{maxSpeed}</strong>
      </p>
      <p>
        Car isAutomatic: <strong>{isAutomatic}</strong>
      </p>
      <p>
        Car engine: <strong>{engine}</strong>
      </p>
      <p>
        Car numberOfDoors: <strong>{numberOfDoors}</strong>
      </p>
      <hr />
    </div>
  );
}
