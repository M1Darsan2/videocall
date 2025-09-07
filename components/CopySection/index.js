
import { Copy } from "lucide-react";
import CopyToClipboard from "react-copy-to-clipboard";


const CopySection = (props) => {
  const { roomId } = props;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 max-w-md fixed bottom-6 left-6">
  <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
    Copy Room ID:
  </div>
  <hr className="border-gray-300 dark:border-gray-600 mb-4" />
  <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
    <span className="text-gray-700 dark:text-gray-300 font-mono text-sm break-all mr-3">
      {roomId}
    </span>
    <CopyToClipboard text={roomId}>
      <Copy className="w-5 h-5 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 cursor-pointer transition-colors duration-200 hover:scale-110 active:scale-95 flex-shrink-0" />
    </CopyToClipboard>
  </div>
</div>
  );
};

export default CopySection;