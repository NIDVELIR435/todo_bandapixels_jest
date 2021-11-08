import { Status } from "../../../Types/EnumStatus";

export type TodoType = {
  id: string;
  title: string;
  description: string;
  status: Status;
};
