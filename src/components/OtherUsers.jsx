import { useSelector } from "react-redux";
import OtherUserRaper from "./OtherUserRaper";

const OtherUsers = () => {
  let { otherUsers } = useSelector((state) => state?.user);

  if (!otherUsers) {
    // urly return if not present otherUsers
    return null;
  }
  return (
    <div className="overflow-auto flex-1">
      {otherUsers?.map((users) => (
        <OtherUserRaper key={users?._id} data={users} />
      ))}
    </div>
  );
};

export default OtherUsers;