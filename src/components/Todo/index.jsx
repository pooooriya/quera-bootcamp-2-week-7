import { useEffect, useState } from "react";
import TodoInsert from "./TodoInsert";
import TodoItem from "./TodoItem";
import { AXIOS } from "../../configs/axios.configs";

const Todo = () => {
  const [data, setData] = useState([]);
  const handleOnSubmit = (newItem) => {
    setData([...data, newItem]);
  };

  const fetchTodos = async () => {
    const result = await AXIOS.get("/posts");
    setData(result.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="border-gray-200 border-2 rounded-md pt-3">
      <div className="border-gray-200 border-b-2 py-4">
        <TodoInsert onSubmitForm={handleOnSubmit} />
      </div>
      <ul className="p-3">
        {data?.map((item) => (
          <TodoItem title={item.title} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
