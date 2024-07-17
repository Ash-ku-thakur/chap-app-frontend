const MassageRapper = ({ massage }) => {
  console.log(massage);

  // massage show ker raha hai
  return (
    <div className="my-2">
      <div className="chat chat-start">
        <div className="chat-bubble">{massage?.massage}</div>
      </div>
    </div>
  );
};

export default MassageRapper;
