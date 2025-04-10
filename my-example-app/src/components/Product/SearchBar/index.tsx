import SearchBarInterface from "../../../interfaces/searchBar";

const SearchBar = ({filterText, inStockOnly}: SearchBarInterface) => {
  return (
    <form>
      <input type="text" placeholder="Search..." value={filterText} />
      <label>
        <input type="checkbox" checked={inStockOnly} />
        <span>Only show products in stock</span>
      </label>
    </form>
  );
}

export default SearchBar;