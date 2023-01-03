import { atom, useAtom } from "jotai";

type RaspAtom = {
  id: string;
  name: string;
  isOn: boolean;
};


const raspAtom = atom<RaspAtom[]>([]);


export const useRaspAtom = () => {
  const [rasp, setRasp] = useAtom(raspAtom);
  return [rasp, setRasp] as const;
}
