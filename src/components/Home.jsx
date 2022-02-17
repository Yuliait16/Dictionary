import { useDispatch, useSelector } from "react-redux";
import { setWord } from "../store/dictionaryReducer";
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

export let word;

const Home = () => {
    const dispatch = useDispatch()
    
    function getInfo(e) {
        e.preventDefault();
        word = document.querySelector(".home__input").value;
        dispatch(setWord(word));
    }

    return (
        <div className="home__wraper">
            <h1 className="home__title">Dictionary</h1>
            <div className="home__content">
                <input className="home__input" type="text" name="word" placeholder="Word to search" />
                <button className="home__button" onClick={(e) => {getInfo(e)}}><NavLink to={`/result`}><SearchIcon/></NavLink></button>
             </div>
        </div>
    )
};

export default Home;



