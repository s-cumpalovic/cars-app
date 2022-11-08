import React, { useState } from "react";
import CreateCarForm from "../components/CreateCarForm";
import CarsService from "../services/CarsService";
import { useHistory } from "react-router-dom";

export default function AddCar() {
  const history = useHistory();
  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: "",
    maxSpeed: "",
    numberOfDoors: "",
    isAutomatic: false,
    engine: "",
  });

  const handleCreateNewCar = async (e) => {
    e.preventDefault();

    const newCarResponse = await CarsService.add(newCar);

    if (newCarResponse.status === 200) {
      history.push("/cars");
    }
  };

  return (
    <div>
      <CreateCarForm
        newCar={newCar}
        setNewCar={setNewCar}
        onCreateNewCar={handleCreateNewCar}
      />
    </div>
  );
}
