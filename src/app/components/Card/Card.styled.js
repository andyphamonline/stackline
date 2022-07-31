import styled from 'styled-components'

export const CardWrapper = styled.div`
  background: #FFF;
  padding: 10px;

  img {
    width: 60%;
  }

  p {
    padding: 0 1.5em;
    font-size: 0.7em;
  }

  hr {
    margin-top: 1.5em;
  }
`

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;

  span {
    border: 1px solid #c0c2c5;
    border-radius: 5px;
    padding: 3px 10px;
    font-size: 0.7em;
    margin-bottom: 5px;
  }
`