import axios from "axios";

type RaspiRespose = {
  id: string;
  value: number;
  timestamp: Date;
};

export const fetchRaspExist = async (id: string) => {
  const { data } = await axios.get<RaspiRespose[]>("/api/raspberry/" + id);
  return data ? true : false;
};
