import React, { useState } from "react";
import styled from "styled-components";

const CharFilmContainer = styled.div`
        padding: 0.5rem;
    `,CharFilmButton = styled.div`
        padding: 1rem;
        border-bottom: 1px solid gray;
        border-left: 1px solid gray;
        font-weight: bold;

        &:hover {
            background-color: gray;
            cursor: pointer;
        }
    `,
    CharFilmDetail = styled.ul`
        list-style-type: none;
        margin: 0;
        padding: 0.5rem 1rem 1rem 1rem;

        & > li {
            padding: 0.5rem;
            text-align: justify;

            & > span{
                font-weight: bold;
            }
        }
    `;

const Film = ({film}) => {
    const [toggle, setToggle] = useState(false);

    return(
        <CharFilmContainer>
            <CharFilmButton onClick={() => setToggle(!toggle)}><span>Episode {film.episode_id}: {film.title}</span></CharFilmButton>
            {
                toggle &&
                <CharFilmDetail>
                    <li>{film.opening_crawl}</li>
                    <li><span>Directed by:</span> {film.director}</li>
                    <li><span>Produced by:</span> {film.producer}</li>
                    <li><span>Release Date:</span> {film.release_date}</li>
                </CharFilmDetail>
            }
        </CharFilmContainer>
    )
}

export default Film;