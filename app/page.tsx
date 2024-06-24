
'use client'
// import { redirect } from "next/navigation";

import { useRouter } from "next/navigation";
export default function Home() {
  const router=useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="mb-8 text-4xl font-bold text-gray-800">Runon Assignment</h1>
      <div className="space-x-4">
        <button
          onClick={() => router.push('/money')}
          className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Money
        </button>
        <button
          onClick={() => router.push('/color')}
          className="px-6 py-2 text-white bg-green-500 rounded hover:bg-green-700"
        >
          Color
        </button>
      </div>
    </div>
  );
}
