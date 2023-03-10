import axios from "axios";

type LigthResponse = {
  id: string;
  value: number;
  timestamp: Date;
  raspberryId: string;
};

export const fetchLigthData = async () => {
  const { data } = await axios.get<LigthResponse[]>("/api/sensor/ligth");
  return data;
};


