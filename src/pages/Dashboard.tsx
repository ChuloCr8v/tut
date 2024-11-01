import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import AddTaskModal from "../components/modals/AddTaskModal";
import ButtonComponent from "../components/shared/ButtonComponent";
import { BiTrash } from "react-icons/bi";

export interface taskDataType {
  id: number;
  task: string;
  date?: Dayjs;
}

const Dashboard = () => {
  const [addTaskModalIsOpen, setAddTaskModalIsOpen] = useState(false);
  const [tasks, setTasks] = useState<taskDataType[] | []>([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleDelete = (id: number) => {
    const updatedTasks = tasks.filter((item) => item.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <ButtonComponent
        title="add task"
        type="primary"
        className="w-[144px] mb-12"
        onclick={() => setAddTaskModalIsOpen(true)}
      />

      <div className="space-y-3">
        {tasks.map((task) => (
          <div className="flex items-center gap-2">
            <p className="border px-2 py-1 rounded bg-primary border-primary bg-opacity-20">
              {task.task}
            </p>
            <p className="">{dayjs(task.date).format("D/MM/YY h:m")}</p>
            <BiTrash onClick={() => handleDelete(task.id)} />
          </div>
        ))}
      </div>

      <AddTaskModal
        tasks={tasks}
        setTasks={setTasks}
        isOpen={addTaskModalIsOpen}
        setIsOpen={setAddTaskModalIsOpen}
      />
    </div>
  );
};

export default Dashboard;
