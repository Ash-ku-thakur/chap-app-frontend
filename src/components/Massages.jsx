import { useSelector } from "react-redux";
import useGetMassages from "../hooks/useGetMassages";
import MassageRapper from "./MassageRapper";

const Massages = () => {
  useGetMassages();

  let { allMassages } = useSelector((state) => state?.massages); // after redux get all massages

  if (!allMassages) {
    return;
  }

  return (
    <div className="px-4 flex-1 overflow-auto">
      {allMassages != null &&
        allMassages?.map((mass) => (
          <MassageRapper key={mass?._id} massage={mass} />
        ))}
    </div>
  );
};

export default Massages;
