export default function UserForm({ formData, setFormData, handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-5 shadow rounded flex flex-col gap-3"
    >
      <input
        className="border p-2"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />

      <input
        className="border p-2"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) =>
          setFormData({ ...formData, lastName: e.target.value })
        }
      />

      <input
        className="border p-2"
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <input
        className="border p-2"
        placeholder="Phone"
        value={formData.phone}
        onChange={(e) =>
          setFormData({ ...formData, phone: e.target.value })
        }
      />

      <button className="bg-green-500 text-white py-2 rounded">
        Submit
      </button>
    </form>
  );
}