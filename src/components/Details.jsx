import { XMarkIcon } from "@heroicons/react/16/solid";

const Details = ({ selected, closeDetail }) => {
	return (
		<section className="detail container p-4">
			<div className="content block w-full h-screen fixed top-0 left-0 p-8 bg-slate-100 dark:bg-[#120e16] text-[#120e16] dark:text-slate-100 overflow-y-scroll">
				<h2 className="text-5xl p-8 pt-0 pb-2 font-semibold">{selected.Title}</h2>
				<span className="text-2xl ml-8 mb-12 font-light">{selected.Year}</span>
				<p className="rating text-2xl mt-4 mb-8 ml-8">
					Rating: {selected.imdbRating}
				</p>

				<div className="about flex flex-col sm:flex-row flex-wrap mx-8">
					<img 
						src={selected.Poster}
						width={200}
						style={{height: "350px", objectFit: "contain"}}
						// height={250}
						className="w-full sm:w-1/2 rounded-xl"
						alt="Movie Poster"
					/>

					<p className="w-full sm:w-1/2 text-2xl mt-12 sm:pl-4 sm:mt-0">{selected.Plot}</p>
				</div>

				<button
					className="absolute top-2 right-2 d-flex justify-center items-center float-right text-xl font-bold m-aut  border-none outline-none appearance-none cursor-pointer"
					onClick={closeDetail}
				>
					 <XMarkIcon  className="h-8 w-8 text-[#120e16] dark:text-slate-100"/>
				</button>
			</div>
		</section>
	);
}

export default Details;