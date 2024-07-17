import { useSelector } from "react-redux";

const OtherUserRaper = () => {
  let { authUser } = useSelector((state) => state?.user);

  return (
    <div>
      <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-200 hover:text-black rounded-2xl px-3">
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src={`${authUser?.profilePhoto}`} alt="" />
          </div>
        </div>
        <div>
          <p>Ashish</p>
        </div>
      </div>
      <hr className="my-2" />
    </div>
  );
};

export default OtherUserRaper;
