import { useRef, useState } from 'react'
import axios from 'axios';
import MovieDisplay from '../Moviedisplay/MovieDisplay';
import styles from './Searchbox.module.css'

const Searchbox = () => {

    let InputText = useRef();
    const [initalMovieList, setMovielist] = useState([]);

    const baseUrl = "https://api.tvmaze.com/search/shows?q="

    const handelOnSubmit = (event) => {
        event.preventDefault();
        const seachtext = InputText.current.value;
        console.log(seachtext);
        axios.get(baseUrl + seachtext)
            .then((res) => {
                console.log(res.data);
                setMovielist(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

        InputText.current.value = "";
    }
    return (

        <section className={styles.sectionClass}>
            <h1 >Movie Search Application</h1>
            <div>
                <form onSubmit={handelOnSubmit}>
                    <input type="text" placeholder="Seach here ||" ref={InputText} />
                    <button type="submit">Search</button>
                </form>
            </div>


            {initalMovieList.map((movie) => {

                if (movie.show !== null && movie.show.image !== null && movie.show.image.medium !== null) {
                    return (
                        <MovieDisplay img={movie.show.image.medium} />

                    )
                }
            })}


        </section>

    )
}


export default Searchbox
