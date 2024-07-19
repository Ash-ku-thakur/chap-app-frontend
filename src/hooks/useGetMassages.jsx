import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMassages } from "../redux/massagesSlicer";

const useGetMassages = () => {
  let { selectedUser } = useSelector((state) => state?.user);
  let dispatch = useDispatch();

  useEffect(() => {
    fetchMassages();
  }, [selectedUser]);

  let fetchMassages = async () => {
    try {
      axios.defaults.withCredentials = true;
      let response = await axios.get(
        `http://localhost:8080/api/v1/massage/${selectedUser?._id}`
      );
      dispatch(setMassages(response?.data?.findConversation[0]?.massages));

      // console.log(response?.data?.findConversation[0]?.massages);
    } catch (error) {
      console.log(error);
    }
  };
};

export default useGetMassages;
