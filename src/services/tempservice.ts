import axios from "axios";

type LigthResponse = {
  id: string;
  temperature: number;
  humidity: number;
  timestamp: Date;
  raspberryId: string;
};

export const fetchTempData = async () => {
  const { data } = await axios.get<LigthResponse[]>("/api/sensor/temperature");
  return data;
}

