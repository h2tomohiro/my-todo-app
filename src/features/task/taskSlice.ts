import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import firebase from "firebase/app";
import { RootState } from "../../app/store";
import { db } from "../../firebase";

interface TaskState {
  idCount: number;
  tasks: { id: string; title: string; completed: boolean }[];
  selectedTask: { id: string; title: string; completed: boolean };
  isModalOpen: boolean;
}

const initialState: TaskState = {
  idCount: 1,
  tasks: [],
  selectedTask: { id: "", title: "", completed: false },
  isModalOpen: false,
};

export const fetchTasks = createAsyncThunk("task/getAllTasks", async () => {
  const res = await db.collection("tasks").orderBy("dateTime", "desc").get();

  const allTasks = res.docs.map((doc) => ({
    id: doc.id,
    title: doc.data().title,
    completed: doc.data().completed,
  }));

  const taskNumber = allTasks.length;
  const passData = { allTasks, taskNumber };
  return passData;
});

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<string>) => {
      // state.idCount++;
      // const newTask = {
      //   id: state.idCount,
      //   title: action.payload,
      //   completed: false,
      // };
      // state.tasks = [newTask, ...state.tasks];
    },

    editTask: (state, action) => {
      // const task = state.tasks.find((t) => t.id === action.payload.id);
      // if (task) {
      //   task.title = action.payload.title;
      // }
    },

    deleteTask: (state, action) => {
      // state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },

    selectTask: (state, action) => {
      state.selectedTask = action.payload;
    },

    handleModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },

    completeTask: (state, action) => {
      // const task = state.tasks.find((t) => t.id === action.payload.id);
      // if (task) {
      //   task.completed = !task.completed;
      // }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload.allTasks;
      state.idCount = action.payload.taskNumber;
    });
  },
});

export const {
  createTask,
  editTask,
  deleteTask,
  selectTask,
  handleModalOpen,
  completeTask,
} = taskSlice.actions;

export const selectTasks = (state: RootState): TaskState["tasks"] =>
  state.task.tasks;

export const selectIsModalOpen = (state: RootState): TaskState["isModalOpen"] =>
  state.task.isModalOpen;

export const selectSelectedTask = (
  state: RootState
): TaskState["selectedTask"] => state.task.selectedTask;

export default taskSlice.reducer;
