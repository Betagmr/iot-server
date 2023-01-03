import * as React from "react";
import { fetchRaspExist } from "src/services/raspiservice";
import { useRaspAtom } from "src/store/atoms";
import { Button } from "../Button";
import { InputField } from "./InputField";


type RpiFormProps = {
  closeModal: () => void;
};

export const RpiForm = ({ closeModal }: RpiFormProps) => {
  const [rasp, setRasp] = useRaspAtom()
  const [name, setName] = React.useState<string>('');
  const [id, setId] = React.useState<string>('');



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let exists: boolean = false;
    try {
      const data = await fetchRaspExist(id);
      if (data) exists = true;
    } catch (error) { }

    if (exists) setRasp(rasp.concat({ name, id, isOn: false }));
    closeModal();
  };

  return (
    <form className="flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
      <InputField label="Name" value={name} onChange={(e) => setName(e.currentTarget.value)} />
      <InputField label="ID" value={id} onChange={(e) => setId(e.currentTarget.value)} />
      <div className="flex justify-around">
        <Button variant="inverseRed" onClick={closeModal}>Cancel</Button>
        <Button type="submit">ADD New Raspberry</Button>
      </div>
    </form>
  );
};