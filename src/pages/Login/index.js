import { useFormik } from "formik";
import * as yup from "yup";
import { AXIOS } from "../../configs/axios.configs";
import { useNavigate } from "react-router";

const validationSchema = yup.object({
  username: yup.string().required("لطفا نام کاربری خود را وارد کنید"),
  password: yup.string().required("لطفا رمز عبور خود را وارد کنید"),
});
const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (data) => {
      AXIOS.post("/auth/login", data).catch((error) => {
        const token =
          "EYYYYYYEYYYYYYEYYYYYYEYYYYYYEYYYYYYEYYYYYYEYYYYYYEYYYYYYEYYYYYYEYYYYYYEYYYYYYEYYYYYYEYYYYYYEYYYYYYEYYYYYYEYYYYYYEYYYYYY";
        // context api => isAuthenticated :true;
        AXIOS.defaults.headers.common.Authorization = "Bearer " + token;
        localStorage.setItem("token", token);
        navigate("/");
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="[&_input]:my-3 flex flex-col justify-center items-center">
        <input
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          placeholder="نام کاربری"
          className="border-b-[1px] border-gray-200 outline-none focus:border-gray-500 p-2 rounded-md"
        />
        {formik.touched && formik.errors.username && (
          <h6 className="text-red-700 text-sm">{formik.errors.username}</h6>
        )}
        <input
          name="password"
          value={formik.values.password}
          type="password"
          onChange={formik.handleChange}
          placeholder="کلمه عبور"
          className="border-b-[1px] border-gray-200 outline-none focus:border-gray-500 p-2 rounded-md"
        />
        {formik.touched && formik.errors.password && (
          <h6 className="text-red-700 text-sm">{formik.errors.password}</h6>
        )}
        <button type="submit" className="mt-5 bg-gray-400 px-5 py-2 rounded-md">
          ورود
        </button>
      </div>
    </form>
  );
};

export default Login;
