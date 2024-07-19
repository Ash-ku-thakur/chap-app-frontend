import axios from "axios";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setMassages } from "../redux/massagesSlicer";
const SendInput = () => {
  let [typeMassage, setTypeMassage] = useState("");
  let { selectedUser } = useSelector((state) => state?.user);
  let { allMassages } = useSelector((state) => state?.massages);
  let dispatch = useDispatch();

  let onSubmitHandler = async (e) => {
    e?.preventDefault();
    // console.log(typeMassage);

    try {
      axios.defaults.withCredentials = true;
      let response = await axios.post(
        `http://localhost:8080/api/v1/massage/send/${selectedUser?._id}`,
        { massage: typeMassage }
      );
      dispatch(
        setMassages(
          allMassages == null
            ? [response?.data?.createMassage]
            : [...allMassages, response?.data?.createMassage]
        )
      );
      setTypeMassage("");
      console.log(response?.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-4 my-3">
      <form onSubmit={onSubmitHandler} className="w-full relative">
        <input
          value={typeMassage}
          onChange={(e) => setTypeMassage(e?.target?.value)}
          type="text"
          placeholder="Send a Massage..."
          className="p-3 border-zinc-500 border text-sm rounded-lg block w-full bg-gray-600 text-white"
        />

        <button
          type="submit"
          className="absolute flex items-center inset-y-0 end-0 pr-4"
        >
          <IoSend />
        </button>
      </form>
    </div>
  );
};

export default SendInput;
