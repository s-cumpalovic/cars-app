import React from "react";
import { RadioButton } from "./RadioButton";

function generateArrayOfYears() {
  var max = new Date().getFullYear();
  var min = max - 32;
  var years = [];

  for (var i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
}

export default function CreateCarForm({
  newCar,
  setNewCar,
  onCreateNewCar,
  onResetForm,
}) {
  return (
    <div className="form-group">
      <form onSubmit={onCreateNewCar}>
        <input
          placeholder="brand"
          required
          type="text"
          value={newCar.brand}
          onChange={({ target }) =>
            setNewCar({
              ...newCar,
              brand: target.value,
            })
          }
        />
        <input
          placeholder="model"
          required
          type="text"
          value={newCar.model}
          onChange={({ target }) =>
            setNewCar({
              ...newCar,
              model: target.value,
            })
          }
        />
        <input
          placeholder="max-speed"
          required
          type="number"
          value={newCar.maxSpeed}
          onChange={({ target }) =>
            setNewCar({
              ...newCar,
              maxSpeed: target.value,
            })
          }
        />
        <input
          placeholder="number of doors"
          required
          type="number"
          value={newCar.numberOfDoors}
          onChange={({ target }) =>
            setNewCar({
              ...newCar,
              numberOfDoors: target.value,
            })
          }
        />
        <label>Year of production</label>
        <select
          value={newCar.year}
          onChange={({ target }) =>
            setNewCar({
              ...newCar,
              year: target.value,
            })
          }
        >
          {generateArrayOfYears().map((year, index) => (
            <option key={index}>{year}</option>
          ))}
        </select>
        <label>Is it automatic?</label>
        <input
          type="checkbox"
          onChange={(e) =>
            e.target.checked
              ? setNewCar({
                  ...newCar,
                  isAutomatic: true,
                })
              : setNewCar({
                  ...newCar,
                  isAutomatic: false,
                })
          }
        />
        <RadioButton
          label="diesel"
          value="diesel"
          state={newCar.engine}
          onChange={(value) =>
            setNewCar({
              ...newCar,
              engine: value,
            })
          }
        />
        <RadioButton
          label="petrol"
          value="petrol"
          state={newCar.engine}
          onChange={(value) =>
            setNewCar({
              ...newCar,
              engine: value,
            })
          }
        />
        <RadioButton
          label="electric"
          value="electric"
          state={newCar.engine}
          onChange={(value) =>
            setNewCar({
              ...newCar,
              engine: value,
            })
          }
        />
        <RadioButton
          label="hybrid"
          value="hybrid"
          state={newCar.engine}
          onChange={(value) =>
            setNewCar({
              ...newCar,
              engine: value,
            })
          }
        />
        <button type="submit" className="btn btn-primary">
          Add new car
        </button>
        <button onClick={onResetForm} type="button" className="btn btn-warning">
          Reset form
        </button>
      </form>
    </div>
  );
}
