import StudentCard from "./StudentCard";

export default function StudentList({ students, onDelete }) {
  if (students.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
        <div className="text-5xl mb-4">📚</div>
        <h2 className="text-xl font-bold text-gray-800">
          No Students Found
        </h2>
        <p className="text-gray-500 mt-2">
          All student records have been deleted.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}