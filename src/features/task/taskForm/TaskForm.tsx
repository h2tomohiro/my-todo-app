import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { createTask } from "../taskSlice";
import styles from "./TaskForm.module.scss";

type Inputs = {
  taskTitle: string;
};

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };
  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit(handleCreate)} className={styles.form}>
        <TextField
          id="outlined-basic"
          label="New Task"
          variant="outlined"
<<<<<<< HEAD
          // inputRef={register}
          name="taskTitle"
=======
          // name="taskTitle"
>>>>>>> redux-toolkit
          className={styles.text_field}
          {...register("taskTitle")}
        />
      </form>
    </div>
  );
};

export default TaskForm;
