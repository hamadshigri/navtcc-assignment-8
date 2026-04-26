export default function UserCard({ user, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition">
      
      <h2 className="text-lg font-bold mb-1">
        {user.firstName} {user.lastName}
      </h2>

      <p className="text-gray-600 text-sm">{user.email}</p>
      <p className="text-gray-600 text-sm mb-3">{user.phone}</p>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(user.id)}
          className="bg-yellow-400 px-3 py-1 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(user.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}