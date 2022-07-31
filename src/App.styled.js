import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 20px;
  background: rgba(246,248,250,255);

  @media (max-width: 767px) {
    display: initial;
    padding: 0 20px;
    background: #FFF;
  }
`