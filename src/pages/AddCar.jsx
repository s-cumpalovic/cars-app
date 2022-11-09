import React, { useState } from "react";
import CreateCarForm from "../components/CreateCarForm";
import CarsService from "../services/CarsService";
import { useHistory } from "react-router-dom";

const defaultValue = {
  brand: "",
  model: "",
  year: "",
  maxSpeed: "",
  numberOfDoors: "",
  isAutomatic: false,
  engine: "",
};

export default function AddCar() {
  const history = useHistory();
  const [newCar, setNewCar] = useState(defaultValue);

  const handleCreateNewCar = async (e) => {
    e.preventDefault();
    e.target.reset();

    const newCarResponse = await CarsService.add(newCar);

    if (newCarResponse.status === 200) {
      history.push("/cars");
    }
  };

  const handleResetForm = () => {
    setNewCar(defaultValue);
  };

  const handlePreviewCar = (carData) => {
    const preview = JSON.stringify(carData, null, 2);
    alert(preview);
  };

  return (
    <div>
      <CreateCarForm
        newCar={newCar}
        setNewCar={setNewCar}
        onCreateNewCar={handleCreateNewCar}
        onResetForm={handleResetForm}
        onPreviewCar={handlePreviewCar}
      />
    </div>
  );
}
