import searchIcon from "../../assets/icons/search.svg";
function Searchbar() {
  return (
    <div className="w-full relative">
      <label
        htmlFor="search"
        className="absolute z-20 top-1/2 -translate-y-1/2 left-4 cursor-pointer"
      >
        <img src={searchIcon} />
      </label>
      <input
        id="search"
        name="search"
        className="w-full h-10 relative z-10 border-[1px] rounded-[8px] border-solid border-[#E8E8E8] px-10 outline-lightGreen text-dark"
        type="text"
        placeholder="Type something"
      />
    </div>
  );
}

export default Searchbar;
