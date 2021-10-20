import * as toolkit from "@reduxjs/toolkit";
import {
  addTask,
  changeStatus,
  currentFilter,
  removeTask,
  sliceState,
  Status,
  todoReducer,
} from "../TodoSlice";

const { nanoid } = toolkit;
const mockNanoid = jest.fn(() => nanoid());

describe("TodoSlice actions most: ", () => {
  let initState: sliceState = {
    todo: [
      {
        id: "1id",
        title: "1",
        description: "1 description",
        status: Status.Active,
      },
      {
        id: "2id",
        title: "2 title",
        description: "2 description",
        status: Status.Active,
      },
      {
        id: "3id",
        title: "3 title",
        description: "3 description",
        status: Status.Completed,
      },
      {
        id: "4id",
        title: "4 title",
        description: "4 description",
        status: Status.Completed,
      },
    ],
    currentFilterValue: "",
  };
  afterAll(() => {
    initState = {
      todo: [
        {
          id: "1id",
          title: "1 title",
          description: "1 description",
          status: Status.On_Hold,
        },
        {
          id: "2id",
          title: "2 title",
          description: "2 description",
          status: Status.Active,
        },
        {
          id: "3id",
          title: "3 title",
          description: "3 description",
          status: Status.Active,
        },
        {
          id: "4id",
          title: "4 title",
          description: "4 description",
          status: Status.Completed,
        },
      ],
      currentFilterValue: "",
    };
  });
  test("addTask-action added task", () => {
    let reducedInitState = todoReducer(
      initState,
      addTask({ title: "title", description: "description" })
    );

    expect(reducedInitState.todo.length).toBe(5);
  });
  test("removeTask-action not delete task because unCorrect id", () => {
    let reducedInitState = todoReducer(initState, removeTask("unCorrect id"));
    expect(reducedInitState.todo.length).toBe(3);
  });
  test("removeTask-action delete task", () => {
    let reducedInitState = todoReducer(initState, removeTask("1id"));
    expect(reducedInitState.todo.length).toBe(2);
  });
  test("changeStatus-action upgrade ", () => {
    let reducedInitState = todoReducer(
      initState,
      changeStatus({ Status: Status.On_Hold, id: "2id" })
    );
    expect(reducedInitState.todo[1].status).toBe(Status.On_Hold);
    expect(reducedInitState.todo[0].status).not.toBe(Status.On_Hold);
  });
  test("currentFilter-action add current filter", () => {
    let reducedInitState = todoReducer(
      initState,
      currentFilter(Status.Completed)
    );
    expect(reducedInitState.currentFilterValue).toBe(Status.Completed);
  });
  test("currentFilter-action nothing to do because unCorrect value", () => {
    let reducedInitState = todoReducer(initState, currentFilter(""));
    expect(reducedInitState.currentFilterValue).toBe("");
  });
});
