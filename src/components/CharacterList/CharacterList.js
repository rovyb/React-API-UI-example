import { styled } from "@stitches/react";
import {useCharAPI} from '../../lib/useCharAPI'
import {useState} from 'react'
import { CharComponent } from "../CharComponent/CharComponent";
import { DetailsContainer } from "../DetailsContainer/DetailsContainer";

const ContentContainer = styled("div", {
  width: "60%",
  margin: "0 auto",
  zIndex: "10",
  position: "relative",
  height: "auto",
})
export const CharacterList = (props) => {
  const characterList = useCharAPI()
  const [expanded, setExpanded] = useState()
  const [locURL, setLocURL] = useState("")
  
  const expand = (index) => {
    if (index === expanded) {
      setExpanded(null)
    } else { 
      setExpanded(index) 
      getURL(index)
    }

  }

  const getURL = (expanded) => {
    const response = characterList.results[expanded].location.url
    setLocURL(response);
  } 

  return (
    <ContentContainer>
    {characterList ? characterList.results.map((char) => (
      <>
      <CharComponent expand={expand} char={char} expanded={expanded} key={char.id}/>
      {expanded ? <DetailsContainer expanded={expanded} char={char} locURL={locURL} /> : null}
      </>
    )) : <div>Loading</div>}
    </ContentContainer>
  )
}