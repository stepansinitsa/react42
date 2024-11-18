import React, { ChangeEvent, useState } from "react";

interface FormProps {
  addTraining: (training: ITraining) => void;
}

interface ITraining {
  distance: number;
  date: string;
}

const StepsForm: React.FC<FormProps> = ({ addTraining }) => {
  const [form, setForm] = useState<ITraining>({ date: "", distance: 1 });
  const handlerChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value =
      event.target.name === "date"
        ? new Date(event.target.value).getTime()
        : +event.target.value;
    setForm({ ...form, [event.target.name]: value });
  };

  const handlerSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    addTraining(form);
    event.target.reset();
  };

  return (
    <div className="steps">
      <form className="formSteps" onSubmit={handlerSubmit}>
        <label className="contData">
          <span className="spanText">Дата (ДД.ММ.ГГ)</span>
          <input
            className="inputData"
            type="date"
            name="date"
            onChange={handlerChange}
            required
          />
        </label>
        <label className="contDistance">
          <span className="spanText">Пройдено км</span>
          <input
            className="inputDistance"
            type="number"
            name="distance"
            onChange={handlerChange}
            required
          />
        </label>
        <input className="btn" type="submit" value="OK" />
      </form>
    </div>
  );
};

export default StepsForm;
