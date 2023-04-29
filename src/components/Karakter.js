// Karakter bileşeniniz buraya gelecek

import { useEffect, useState } from "react";
import Film from "./Film"
import styled from "styled-components";

const CharContainer = styled.div`
        width: 50%;
        background-color: rgba(255, 255, 255, 0.75);
        padding: 1rem;
    `,
    CharButton = styled.div`
        font-weight: bolder;
        font-size: 1.3rem;
        padding: 1rem;
        border-bottom: 1px solid gray;
        border-left: 1px solid gray;

        &:hover {
            background-color: gray;
            cursor: pointer;
        }
    `,
    CharDetail = styled.div`
        padding: 0.5rem 1rem 1rem 1rem;
    `,
    CharInfo = styled.ul`
        list-style-type: none;
        margin: 0;
        padding: 0;
        font-size: 1.1rem;
        

        & > li {
            padding: 0.5rem;

            & > span {
                font-weight: bold;
            }
        }
    `,
    CharFilms = styled.div`
        padding: 0.5rem;
    `,
    CharFilmsCount = styled.div`
        font-size: 1.1rem;
        font-weight: bolder;
    `,
    CharFilmsList = styled.div`
        padding: 0.5rem 0;
    `;

const Karakter = ({character, films}) => {
    const [toggle, setToggle] = useState(false);
    const [sortedFilms, setSortedFilms] = useState([]);

    useEffect(() => {
        let sorted = character.films.map((film) => {
            let selected = films.filter(f => f.title === film)[0];
            return {episode_id: selected.episode_id, title: selected.title};
        })
        sorted = sorted.sort((a,b) => a.episode_id - b.episode_id);
        setSortedFilms(sorted);
    },[character.films, films])

    return (
        <CharContainer>
            <CharButton onClick={() => setToggle(!toggle)}><span>{character.name}</span></CharButton>
            {
                toggle && 
                <CharDetail>
                    <CharInfo className={toggle ? "active" : "inactive"}>
                        <li><span>Gender:</span> {character.gender}</li>
                        <li><span>Height:</span> {character.height}</li>
                        <li><span>Mass:</span> {character.mass}</li>
                        <li><span>Birth Year:</span> {character.birth_year}</li>
                        <li><span>Eye Color:</span> {character.eye_color}</li>
                        <li><span>Hair Color:</span> {character.hair_color}</li>
                        <li><span>Skin Color:</span> {character.skin_color}</li>
                    </CharInfo>
                    <CharFilms>
                        <CharFilmsCount>Appears in {sortedFilms.length} films</CharFilmsCount>
                        <CharFilmsList>{ sortedFilms.map((film, idx)=> <Film key={idx} film={films.filter(f => f.title === film.title)[0]} />) }</CharFilmsList>
                    </CharFilms>
                </CharDetail>
            }
        </CharContainer>
    )
}

export default Karakter;