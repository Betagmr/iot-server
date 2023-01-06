import Image from 'next/image';
import { Switch } from '@headlessui/react';
import { useRaspAtom } from 'src/store/atoms';
import { modifyRaspStatus } from 'src/services/raspiservice';

type Props = {
  id: string;
  name: string;
  isOn: boolean;
};

const StateIndicator = ({ isOn }: { isOn: boolean }) => {
  return (
    <div className={`-mb-1 px-2 py-0.5 text-xs font-semibold rounded-full border ${!isOn ? 'bg-green-100 text-green-800 border-green-600' : 'bg-red-100 text-red-800 border-red-600'}`}>
      {isOn ? 'On' : 'Off'}
    </div>
  );
};


type ToggleProps = {
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
};

const Toggle = ({ enabled, setEnabled }: ToggleProps) => {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-violet-600' : 'bg-neutral-200'}
          relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${enabled ? 'translate-x-5' : 'translate-x-0'}
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switch>
  );
}

export const Card = ({ id, name, isOn }: Props) => {
  const [rasp, setRasp] = useRaspAtom();

  const setIsOn = (isOn: boolean) => {
    const newRasp = rasp.map((r) => {
      if (r.id === id) {
        r.isOn = isOn;
        modifyRaspStatus(r.id, r.isOn);
      }
      return r;
    });

    setRasp(newRasp);
  };

  return (
    <div className="rounded-lg shadow-md bg-white w-96 h-40 p-4 hover:shadow-2xl transition-shadow">
      <div className="flex flex-col items-center justify-center gap-4 h-full">
        <div className="grid grid-cols-3 grid-rows-1 gap-4 h-full items-center justify-center">
          <div className="col-span-1">
            <Image
              src="/rpi.jpg"
              alt="Raspberry Pi"
              height={150}
              width={150}
            />
          </div>
          <div className="col-span-2 h-full p-2 flex flex-col items-start justify-center">
            <h3 className="font-bold text-2xl">{name}</h3>
            <div className="flex items-center justify-start gap-2">
              <p className="text-lg">Alarma:</p>
              <StateIndicator isOn={isOn} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-xs text-gray-600">{id}</p>
          <Toggle enabled={isOn} setEnabled={setIsOn} />
        </div>
      </div>
    </div>
  );
};