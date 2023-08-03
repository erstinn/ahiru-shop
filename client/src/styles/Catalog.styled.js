import styled from "styled-components";

export const StyledCatalog = styled.div`
  display: grid;
  border: 1px solid transparent;
  border-radius: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 27%; //suggested not to do numbers divisible by 100 to easily see that content overflow 
  place-items: center;
  margin-inline: 5rem;
  overflow-x: auto; //puts the scroll on the div
  overscroll-behavior: contain; //contains scroll inside the div so you dont scroll the whole website instead
  scroll-snap-align: start; //snap thingy when you scroll esp on mobile
  scroll-padding-inline: 1rem;
  gap: 1rem;
`

export const StyledCatalogItem = styled.div`
  //max-height: 20rem; //todo put constraint on small screens
  border: 1px solid transparent;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 1rem;

  & img {
    border: inherit;
    border-radius: inherit;
    inline-size: 100%; //logical property for width
    aspect-ratio: 4/3;
    object-fit: cover; //crops images
  }
`
export const StyledCatalogGroup = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
`

export const StyledArrow = styled.div`
  height: 46px;
  width: 46px;
  position: absolute;
  text-align: center;
  line-height: 46px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  
  &.left {
    left: 5%;
    filter: drop-shadow(0 0 50px 100px black);
    
  }
  &.right {
    right: 5%;
    filter: drop-shadow(0 0 50px 100px black);
    
  }
`