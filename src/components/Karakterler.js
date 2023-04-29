import Karakter from "./Karakter"
import styled from "styled-components"

const CharactersList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Karakterler = ({characters, films}) => {
    return (
        <CharactersList>
        {
          characters.map((character, idx) => <Karakter key={idx} character={character} films={films}/>)
        }
      </CharactersList>
    )
}

export default Karakterler;