import useGetOtherUsers from "../hooks/useGetOtherUsers";
import MassageContainer from "./MassageContainer";
import Sidebar from "./Sidebar";

const HomePage = () => {

  useGetOtherUsers();

  return (
    <div className="sm:h-[450px] md:h-[450px] flex rounded-lg overflow-hidden bg-gray-300  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100">
      <Sidebar />
      <MassageContainer />
    </div>
  );
};

export default HomePage;
