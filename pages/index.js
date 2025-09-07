import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export default function Home() {
    const router = useRouter()
  const [roomId, setRoomId] = useState('')
  
  const createAndJoin = () => {
    const roomId = uuidv4()
    router.push(`/${roomId}`)
  }

  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`)
    else {
      alert("Please provide a valid room id")
    }
  }
  return (
   <>
   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
  <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md space-y-6">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 tracking-wide">
      RECRTC
    </h1>
    
    <div className="space-y-4">
      <input 
        placeholder="Enter Room ID" 
        value={roomId} 
        onChange={(e) => setRoomId(e?.target?.value)}
        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 text-gray-700 placeholder-gray-400"
      />
      <button
        onClick={joinRoom}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
      >
        Join Room
      </button>
    </div>
    
    <div className="flex items-center justify-center my-6">
      <div className="border-t border-gray-300 flex-grow"></div>
      <span className="px-4 text-gray-500 text-sm font-medium bg-white">
        OR
      </span>
      <div className="border-t border-gray-300 flex-grow"></div>
    </div>
    
    <button
      onClick={createAndJoin}
      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-lg"
    >
      Create a new room
    </button>
  </div>
</div>
   </>
  );
}
