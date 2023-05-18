import { useState } from "react";
import { AXIOS } from "../../../configs/axios.configs";

const TodoInsert = ({ onSubmitForm }) => {
  const [form, setForm] = useState({
    title: "",
  });

  const handleOnChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = () => {
    if (form.title) {
      AXIOS.post("/posts", form).then((x) => {
        onSubmitForm(x.data);
        setForm({ title: "" });
      });
    }
  };

  return (
    <div className="flex justify-center items-center [&_button]:mr-5">
      <input
        required
        id="title"
        name="title"
        value={form.title}
        onChange={handleOnChange}
        placeholder="کارهایت را وارد کن"
        className="border-b-[1px] border-gray-200 outline-none focus:border-gray-500"
      />
      <button
        onClick={handleOnSubmit}
        className="bg-blue-400 text-gray-200 px-3 rounded-md hover:bg-blue-500 active:bg-blue-700"
      >
        ثبت کار
      </button>
    </div>
  );
};

export default TodoInsert;
