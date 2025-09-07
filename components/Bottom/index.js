
import { Mic, Video, PhoneOff, MicOff, VideoOff } from "lucide-react";


const Bottom = ({ muted, playing, toggleAudio, toggleVideo, leaveRoom }) => {

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-gray-900/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-2xl border border-gray-700">
  {muted ? (
    <MicOff
      className="w-14 h-14 text-red-500 bg-red-500/20 hover:bg-red-500/30 p-3 rounded-xl cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
      size={55}
      onClick={toggleAudio}
    />
  ) : (
    <Mic 
      className="w-14 h-14 text-white hover:text-green-400 bg-gray-700 hover:bg-gray-600 p-3 rounded-xl cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95" 
      size={55} 
      onClick={toggleAudio} 
    />
  )}
  
  {playing ? (
    <Video 
      className="w-14 h-14 text-white hover:text-blue-400 bg-gray-700 hover:bg-gray-600 p-3 rounded-xl cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95" 
      size={55} 
      onClick={toggleVideo} 
    />
  ) : (
    <VideoOff
      className="w-14 h-14 text-red-500 bg-red-500/20 hover:bg-red-500/30 p-3 rounded-xl cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
      size={55}
      onClick={toggleVideo}
    />
  )}
  
  <PhoneOff 
    size={55} 
    className="w-14 h-14 text-white hover:text-red-400 bg-red-600 hover:bg-red-700 p-3 rounded-xl cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
    onClick={leaveRoom}
  />
</div>
  );
};

export default Bottom;