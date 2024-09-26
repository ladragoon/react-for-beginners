import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();

    useEffect(() => {
        const getMovie = async () => {
            const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
            const json = await response.json();
            console.log(json);
        };
        getMovie();
    }, [])

    return <h1>Detail {id}</h1>;
}
export default Detail;