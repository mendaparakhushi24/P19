import { useState } from "react";
import Header from "./Components/Header";
import StudentList from "./Components/StudentList";

const initialStudents = [
  {
    id: "STU101",
    name: "Aarav Patel",
    email: "aarav@example.com",
    course: "BCA",
    year: "1st Year",
  },
  {
    id: "STU102",
    name: "Diya Shah",
    email: "diya@example.com",
    course: "B.Sc. IT",
    year: "2nd Year",
  },
  {
    id: "STU103",
    name: "Krish Mehta",
    email: "krish@example.com",
    course: "BCA",
    year: "3rd Year",
  },
  {
    id: "STU104",
    name: "Anaya Desai",
    email: "anaya@example.com",
    course: "B.Com",
    year: "1st Year",
  },
  {
    id: "STU105",
    name: "Rohan Joshi",
    email: "rohan@example.com",
    course: "B.Sc. IT",
    year: "2nd Year",
  },
  {
    id: "STU106",
    name: "Meera Trivedi",
    email: "meera@example.com",
    course: "BCA",
    year: "3rd Year",
  },
];

export default function App() {
  const [students, setStudents] = useState(initialStudents);

  const deleteStudent = (id) => {
    setStudents((previousStudents) =>
      previousStudents.filter((student) => student.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="max-w-7xl mx-auto px-5 py-8 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Manage Students
            </h2>
            <p className="text-gray-500 mt-2">
              View and manage all student records.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 px-6 py-4">
            <p className="text-sm text-gray-500">Total Students</p>
            <p className="text-3xl font-bold text-indigo-700 mt-1">
              {students.length}
            </p>
          </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-7">
          <p className="text-indigo-800 text-sm">
            <strong>Instructions:</strong> Click the Delete Student
            button on any card to remove that student from the list.
          </p>
        </div>

        <StudentList
          students={students}
          onDelete={deleteStudent}
        />

        <footer className="text-center text-gray-500 text-sm mt-10 pb-5">
          StudentHub © 2026 | Student Management System
        </footer>
      </main>
    </div>
  );
}