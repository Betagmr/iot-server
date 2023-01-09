import axios from "axios"

type MessageResponse = {
  id: string;
  content: string;
  type: string;
  raspberryId: string;
};

export const fetchMessageData = async () => {
  const { data } = await axios.get<MessageResponse[]>("/api/sensor/message");
  return data;
}

export const deleteAllMessages = async () => {
  await axios.delete("/api/sensor/message");
}
