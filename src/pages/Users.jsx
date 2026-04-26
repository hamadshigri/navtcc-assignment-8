import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserCard from "../components/UserCard";

export default function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("https://dummyjson.com/users");
    setUsers(res.data.users);
  };

  const deleteUser = async (id) => {
    if (!confirm("Are you sure you want to delete?")) return;

    await axios.delete(`https://dummyjson.com/users/${id}`);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-6">
      
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Users</h1>

        <button
          onClick={() => navigate("/add-user")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add User
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={(id) => navigate(`/edit-user/${id}`)}
            onDelete={deleteUser}
          />
        ))}
      </div>

    </div>
  );
}