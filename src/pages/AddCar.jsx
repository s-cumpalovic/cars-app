import React, { useState, useEffect } from "react";
import CreateCarForm from "../components/CreateCarForm";
import CarsService from "../services/CarsService";
import { useHistory, useParams } from "react-router-dom";

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
  const { id } = useParams();
  const [newCar, setNewCar] = useState(defaultValue);

  useEffect(() => {
    handleSingleCarData();
  }, []);

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

  const handleSingleCarData = async () => {
    if (id) {
      const carsData = await CarsService.get(id);
      setNewCar(carsData);
    }
  };

  const handleEditCar = async () => {
    const editCarResponse = await CarsService.edit(id, newCar);
    if (editCarResponse.status === 200) {
      history.push("/cars");
      alert("Car updated !");
    }
  };

  return (
    <div>
      <CreateCarForm
        newCar={newCar}
        setNewCar={setNewCar}
        onCreateNewCar={handleCreateNewCar}
        onResetForm={handleResetForm}
        onPreviewCar={handlePreviewCar}
        onEditCar={handleEditCar}
      />
    </div>
  );
}
