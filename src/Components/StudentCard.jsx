export default function StudentCard({ student, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xl font-bold">
          {student.name.charAt(0)}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-800">
            {student.name}
          </h3>
          <p className="text-sm text-gray-500">
            ID: {student.id}
          </p>
        </div>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
          Active
        </span>
      </div>

      <div className="border-t border-gray-100 mt-5 pt-4 space-y-3">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-800">Email:</span>{" "}
          {student.email}
        </p>

        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-800">Course:</span>{" "}
          {student.course}
        </p>

        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-800">Year:</span>{" "}
          {student.year}
        </p>
      </div>

      <button
        onClick={() => onDelete(student.id)}
        className="mt-5 w-full bg-red-50 text-red-600 border border-red-200 hover:bg-red-600 hover:text-white font-semibold py-2.5 rounded-xl transition"
      >
        🗑 Delete Student
      </button>
    </div>
  );
}