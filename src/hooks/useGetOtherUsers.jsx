import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlicer";

const useGetOtherUsers = () => {
  useEffect(() => {
    fetchOtherUsers();
  }, []);

  let dispatch = useDispatch();

  let fetchOtherUsers = async () => {
    try {
      let response = await axios.get(
        `http://localhost:8080/api/v1/user/otherUser`,
        { withCredentials: true }
      );
      dispatch(setOtherUsers(response?.data?.otherUsers));
    } catch (error) {
      console.log(error);
    }
  };
};

export default useGetOtherUsers;
