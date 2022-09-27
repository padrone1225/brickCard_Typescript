type BrickCardProps = {
  index: number;
  item: {
    color: string;
    width: number;
  };
  handleSize: (index: number, width: number) => void;
};

const BrickCard: React.FC<BrickCardProps> = ({ item, handleSize, index }) => {
  return (
    <div
      className={`${item.color} ${
        item.width === 15 ? "w-[15%]" : item.width === 10 ? "w-[10%]" : "w-[5%]"
      }`}
    >
      <button
        className="bg-[#f2f2f2] text-sm text-black font-bold p-1 m-1 rounded-sm"
        onClick={() => handleSize(index, 5)}
      >
        5
      </button>
      <button
        className="bg-[#f2f2f2] text-sm text-black font-bold p-1 m-1 rounded-sm"
        onClick={() => handleSize(index, 10)}
      >
        10
      </button>
      <button
        className="bg-[#f2f2f2] text-sm text-black font-bold p-1 m-1 rounded-sm"
        onClick={() => handleSize(index, 15)}
      >
        15
      </button>
      <p className="text-xl font-bold text-white">width: {item.width}</p>
    </div>
  );
};

export default BrickCard;
