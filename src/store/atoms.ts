import { atom, useAtom } from "jotai";

type RaspAtom = {
  id: string;
  name: string;
  isOn: boolean;
};



const raspAtom = atom<RaspAtom[]>([]);
const numAtom = atom<number>(10);


export const useRaspAtom = () => {
  const [rasp, setRasp] = useAtom(raspAtom);
  return [rasp, setRasp] as const;
}

export const useNumAtom = () => {
  const [num, setNum] = useAtom(numAtom);
  return [num, setNum] as const;
}
