'use client'
import { useState } from "react"


export default function money(){
    const [money, setMoney]=useState(0);
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">Amount: ${money}</h1>
        <div className="space-x-4">
          <button
            onClick={() => setMoney(money + 1000)}
            className="px-6 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Child 1
          </button>
          <button
            onClick={() => setMoney(money - 500)}
            className="px-6 py-2 text-white bg-red-500 rounded hover:bg-red-700"
          >
            Child 2
          </button>
        </div>
      </div>
    )
}

