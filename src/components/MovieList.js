import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<>
					<div className='image-container d-flex justify-content-start m-3'>
						<h3 className='overlay d-flex align-items-center justify-content-center' style={{ marginBottom: '90%' }}>Movie : {movie.Title} <br></br>Year : {movie.Year}</h3>
						<img src={movie.Poster} alt='movie'></img>
						<div
							onClick={() => props.handleFavouritesClick(movie)}
							className='overlay d-flex align-items-center justify-content-center'
						>
							<FavouriteComponent />
						</div>
					</div>
				</>
			))}
		</>
	);
};

export default MovieList;
