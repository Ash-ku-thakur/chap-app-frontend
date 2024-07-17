import { CiSearch } from "react-icons/ci";
import OtherUsers from "./OtherUsers";
const Sidebar = () => {
  return (
    // flex flxe-col  sabhi ko ek col me rekh raha hai joki default rakhta hihai meger 
    // OtherUsers joki overflow-auto hai es ki vajaha se firkh dikega
    <div className="border-r border-slate-300 p-4 flex flex-col">
      <form action="" className="flex items-center gap-1">
        <input
          type="text"
          className="input input-bordered rounded-md"
          placeholder="search..."
        />

        <button type="submit" className="btn">
          <CiSearch size="24px" className="outline-none" />
        </button>
      </form>

      <hr className="my-4" />

      {/*other users */}
      <OtherUsers />
      <div className="my-2">
        <button className="btn btn-sm">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
