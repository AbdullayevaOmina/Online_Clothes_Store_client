// import { searchIcon } from "@icons";

const Search = () => {
  return (
    <form className="max-w-[550px] min-w-[550px] mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="lg:relative">
        {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {searchIcon}
        </div> */}
        <input
          type="search"
          id="default-search"
          className="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-md dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          placeholder="Qidiruv..."
        />
      </div>
    </form>
  );
};

export default Search;
