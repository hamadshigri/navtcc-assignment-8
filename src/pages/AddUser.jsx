import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";

export default function AddUser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("https://dummyjson.com/users/add", formData);
    navigate("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4 text-center">Add User</h1>

      <UserForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}