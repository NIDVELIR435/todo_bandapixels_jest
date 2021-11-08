type Task = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const getAllTask = (): Promise<Array<Task>> =>
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .catch(console.log.bind(console));
