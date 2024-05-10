
const Search = ({search, handleChange }) => {
	return (
		<div className="flex items-center justify-center mx-0 mt-2 mb-8">
			<input
				type="text"
				name="search"
				value={search}
				placeholder="Search for a Movie..."
				className="search block w-full md:w-[80%] xl:w-[60%] p-4 border-none outline-none bg-none bg-[#120e16] dark:bg-slate-100 text-slate-100 dark:text-[#120e16] rounded-lg font-light text-xl transition duration-300 ease-out focus:shadow-gray-500 focus:shadow-md"
				onChange={(e) => handleChange(e.target.value)}
			/>
		</div>
	);
}

export default Search;