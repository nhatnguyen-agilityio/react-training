const SearchBar = () => {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        <span>Only show products in stock</span>
      </label>
    </form>
  );
}

export default SearchBar;