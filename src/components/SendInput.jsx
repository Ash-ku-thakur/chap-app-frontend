import { IoSend } from "react-icons/io5";
const SendInput = () => {
  return (
    <div className="px-4 my-3">
      <form action="" className="w-full relative">
        <input
          type="text"
          placeholder="Send a Massage..."
          className="p-3 border-zinc-500 border text-sm rounded-lg block w-full bg-gray-600 text-white"
        />

        

        <button className="absolute flex items-center inset-y-0 end-0 pr-4">
          <IoSend />
        </button>
      </form>
    </div>
  );
};

export default SendInput;
