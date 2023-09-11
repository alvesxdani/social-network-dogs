import styled from "styled-components"

export const StyledFeedModal = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
background: rgba(0,0,0,0.4);
top: 0px;
left: 0px;
display: flex;
z-index: 1000;
padding: 2rem calc(4rem + 15px) 2rem 4rem;

@media (max-width: 40rem) {
  padding: 2rem calc(2rem + 15px) 2rem 2rem;
}
`