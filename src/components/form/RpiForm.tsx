import * as React from "react";
import { Button } from "../Button";
import { InputField } from "./InputField";


type RpiFormProps = {
  closeModal: () => void;
};

export const RpiForm = ({ closeModal }: RpiFormProps) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <form className="flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
      <InputField label="Name" />
      <InputField label="ID" />
      <div className="flex justify-around">
        <Button variant="inverseRed" onClick={closeModal}>Cancel</Button>
        <Button type="submit">ADD New Raspberry</Button>
      </div>
    </form>
  );
};