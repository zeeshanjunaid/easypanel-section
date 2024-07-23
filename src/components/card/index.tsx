import { CardType } from "../../data/cards";
import gridsImg from "../../assets/icons/grids.svg";
function Card({ cardItem }: { cardItem: CardType }) {
  return (
    <div
      style={{ background: cardItem.bg }}
      className="relative flex flex-col items-start overflow-hidden p-4 h-max rounded-[8px] border-[1px] border-solid border-[#E8E8E8] shadow-sm"
    >
      <img src={gridsImg} className="absolute inset-0 z-10 w-full h-full" />
      <div className="border-solid rounded-[9.19px] border-[.57px] border-[#E8E8E8] bg-white relative z-20 w-[60px] h-[60px] flex justify-center items-center overflow-hidden">
        <img src={cardItem.image} />
      </div>
      <div className="flex flex-col gap-y-3 my-4 relative z-20">
        <h4 className="text-dark font-medium text-xl">{cardItem.title}</h4>
        <p className="text-[13px] text-gray leading-[20px]">
          {cardItem.description}
        </p>
      </div>
      <a
        className="hover:underline text-green transition-all relative z-20"
        href="#"
      >
        View docs
      </a>
    </div>
  );
}

export default Card;
