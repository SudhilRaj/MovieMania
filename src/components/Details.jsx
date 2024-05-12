import { XMarkIcon } from "@heroicons/react/16/solid";

const Details = ({ selected, closeDetail }) => {
	return (
		<section className="detail container p-4">
			<div className="content block w-full h-screen fixed top-0 left-0 p-8 bg-slate-100 dark:bg-[#120e16] text-[#120e16] dark:text-slate-100 overflow-y-scroll">
				<h2 className="text-4xl sm:text-5xl p-8 pt-0 pb-2 font-semibold">{selected.Title}</h2>
				<span className="text-xl sm:text-2xl font-light ml-8 mb-12">{selected.Year}</span>
				<p className="rating text-xl sm:text-2xl font-light ml-8 mt-4 mb-8 ">
					Rating: {selected.imdbRating}
				</p>

				<div className="about flex flex-col sm:flex-row flex-wrap mx-8">
					<div className="w-full sm:w-1/2 lg:w-[40%]">
						<img 
							src={selected.Poster}
							width={220}
							style={{objectFit: "contain"}}
							// height={250}
							className="rounded-xl"
							alt="Movie Poster"
						/>
					</div>
					<div className="w-full sm:w-1/2 lg:w-[60%] mt-8 sm:mt-0">
						<p className="text-xl sm:text-2xl font-light">{selected.Plot}</p>
					</div>
				</div>

				<button
					className="absolute top-2 right-2 d-flex justify-center items-center float-right text-xl font-bold m-auto  border-none outline-none appearance-none cursor-pointer"
					onClick={closeDetail}
				>
					<XMarkIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[#120e16] dark:text-slate-100"/>
				</button>
			</div>
		</section>
	);
}

export default Details;