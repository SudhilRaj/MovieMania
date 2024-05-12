import { XCircleIcon } from "@heroicons/react/16/solid";

const Search = ({search, handleChange }) => {
	return (
		<div className="flex items-center justify-center relative w-full md:w-[80%] xl:w-[60%] mx-auto mt-2 mb-8">
			<input
				type="text"
				name="search"
				value={search}
				placeholder="Search for a Movie..."
				className="search block w-full p-3 pe-[26px] sm:p-4 sm:pe-[32px] border-none outline-none bg-none bg-[#120e16] dark:bg-slate-100 text-slate-100 dark:text-[#120e16] rounded-lg font-light text-md sm:text-xl transition duration-300 ease-out focus:shadow-gray-500 focus:shadow-md"
				onChange={(e) => handleChange(e.target.value)}
			/>
			{!!search && (
				<span className="absolute top-[10px] right-[2px] sm:top-[14px] cursor-pointer" onClick={() => handleChange("")}>
					<XCircleIcon className="w-6 h-6 sm:w-8 sm:h-8 text-slate-100 dark:text-[#120e16]"/>
				</span>
			)}
		</div>
	);
}

export default Search;