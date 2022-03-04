import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";

const Detail = () => {

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const {id} = useParams();

    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovies(json.data);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);

    console.log(movies);

    return(
        <div>
            {loading ? <h1>loading ...</h1> : null}
            <h1>Detail</h1>
        </div>
    )

};

export default Detail;