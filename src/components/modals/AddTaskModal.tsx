import { DatePicker, Input, Modal } from "antd";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { taskDataType } from "../../pages/Dashboard";

type Props = {
  tasks: taskDataType[];
  setTasks: (arg: taskDataType[]) => void;
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
};

const AddTaskModal = (props: Props) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState<Dayjs>();

  const handleAddTask = () => {
    props.setTasks([
      ...props.tasks,
      { id: props.tasks.length, task, date: date },
    ]);

    props.setIsOpen(false);
  };

  return (
    <Modal
      okText="Submit"
      title="Add Task Form"
      open={props.isOpen}
      onCancel={() => props.setIsOpen(false)}
      onOk={handleAddTask}
    >
      <div className="py-6 space-y-2">
        <label>Add Task</label>
        <Input
          type="text"
          placeholder="enter task"
          className="max-w-[500px] w-full"
          onChange={(e) => setTask(e.target.value)}
        />

        <div className="">
          <label>Pick Data and Time</label>
          <DatePicker
            showTime
            className="w-full"
            onChange={(value) => setDate(value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default AddTaskModal;
