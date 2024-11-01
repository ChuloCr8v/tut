import { Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="border rounded p-4 shadow max-w-[400px] w-full space-y-4">
        <div className="flex flex-col items-start gap-2">
          <label>Username:</label>
          <input
            type="email"
            className="border px-2 py-1 rounded w-full"
            placeholder="enter email"
            name="email"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <label>password</label>
          <input
            className="border px-2 py-1 rounded w-full"
            type="password"
            placeholder="enter password"
            name="password"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </div>
        <Button onClick={handleLogin} className="w-full" type="primary">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Home;
