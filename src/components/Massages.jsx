import useGetOtherUsers from "../hooks/useGetOtherUsers";
import MassageRapper from "./MassageRapper";

const Massages = () => {
  useGetOtherUsers();

  return (
    <div className="px-4 flex-1 overflow-auto">
      <MassageRapper />
      <MassageRapper />
      <MassageRapper />
      <MassageRapper />
      <MassageRapper />
      <MassageRapper />
      <MassageRapper />
      <MassageRapper />
      <MassageRapper />
      <MassageRapper />
      <MassageRapper />
    </div>
  );
};

export default Massages;
