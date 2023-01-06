import axios from "axios";

type RaspiRespose = {
  id: string;
  value: number;
  timestamp: Date;
};

export const fetchRaspExist = async (id: string) => {
  const { data } = await axios.get<RaspiRespose[]>("/api/raspberry/" + id);
  return data;
};


export const modifyRaspStatus = async (id: string, status: boolean) => {
  const { data } = await axios.post<RaspiRespose>("/api/raspberry/" + id, {
    activator: status,
  });
  return data;
}