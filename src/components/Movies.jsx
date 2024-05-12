import { useState } from "react";
import axios from "axios";
import { useDebouncedCallback } from "use-debounce";
import Search from "./Search";
import Details from "./Details";
import { CardBody, CardContainer, CardItem } from "../utils/3dCard";
import PlaceHolder from "/watching.svg";
import toast from "react-hot-toast";

const Movies = () => {
	const [movies, setMovies] = useState({
		results: [],
		selected: {},
	});
	const [search, setSearch] = useState("");
	const apiurl = `${import.meta.env.VITE_APP_API_URL}/?apikey=${import.meta.env.VITE_APP_API_KEY}`;

	const handleChange = (value) => {
		setSearch(value);
		searchHandler(value.trim());
	};

	const searchHandler = useDebouncedCallback((search) => {
		if(search.trim() !== ""){
			axios(`${apiurl}&s=${search}`)
				.then(({ data }) => {
						if(data.Response === "True"){
							const results = data.Search;
	
							setMovies((prevState) => {
								return {
									...prevState,
									results: results,
								};
							});	
						}else{
							switch(data.Error){
								case "Too many results.":
									toast.error("There are too many results, Please provide a more specific name.", {position: "bottom-center"});
									break;
								default:
									toast.error(data.Error, {position: "bottom-center"});
							}
							setMovies((prevState) => {
								return {
									...prevState,
									results: [],
									selected: {},
								};
							});	
						}
					}
				)
				.catch(error => {
					console.log(error);
				});
		}else{
			setMovies({
				results: [],
				selected: {},
			})
		}
	}, 800);

	const openDetail = (id) => {
		axios(`${apiurl}&i=${id}&plot=full`)
			.then(({ data }) => {
				const result = data;

				setMovies((prevState) => {
					return { ...prevState, selected: result };
				});
			})
			.catch(error => {
				console.log(error);
			});
	};

	const closeDetail = () => {
		setMovies((prevState) => {
			return { ...prevState, selected: {} };
		});
	};

	return (
	<>
		<Search
			search={search}
			handleChange={handleChange}
		/>

		<div className="flex flex-row flex-wrap justify-center gap-6">
			{movies.results.length > 0 ? (
				<>
				{movies.results.map((movie) => (
					<div
						key={movie.imdbID}
						className="flex flex-col items-center gap-2 text-left cursor-pointer"
						onClick={() => openDetail(movie.imdbID)}
					>
						{/* <img
							className="rounded-lg border-2 border-white hover:border-cyan-600"
							width={200}
							style={{height: "250px", objectFit: "cover"}}
							// height={250}
							src={movie.Poster}
							alt="Movie Poster"
						/>
						<h3 className="text-white">
							{movie.Title}
						</h3> */}

						<CardContainer className="inter-var">
							<CardBody className="bg-slate-50 dark:bg-[#1c1722] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] rounded-xl p-4 border">
								<CardItem
									translateZ="50"
									className="text-lg sm:text-xl font-bold text-neutral-800 dark:text-slate-100 truncate w-full"
								>
									{movie.Title}
								</CardItem>
								<CardItem translateZ="100" className="w-full mt-4">
									<img
										src={movie.Poster}
										width={200}
										style={{height: "250px", objectFit: "cover"}}
										// height={250}
										className="w-full rounded-xl group-hover/card:shadow-xl border border-slate-100 dark:border-[#120e16]"
										alt="Movie Poster"
									/>
								</CardItem>
							</CardBody>
						</CardContainer>
					</div>
				))}
				</>
			) : (
				<img src={PlaceHolder} alt="Placeholder" width={500}/>
			)}
		</div>

		{typeof movies.selected.Title !== "undefined" && (
			<Details
				selected={movies.selected}
				closeDetail={closeDetail}
			/>
		)}
	</>	
	);
}

export default Movies;
