import { Status } from "../../Types/EnumStatus";

export type Todo = {
  id: string;
  title: string;
  description: string;
  status: Status;
};
