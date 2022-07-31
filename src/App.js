import { useEffect } from 'react'
import { Banner } from './app/components/Banner/Banner'
import { Card } from './app/components/Card/Card'
import { Graph } from './app/components/Graph/Graph'
import { BannerWrapper, Wrapper } from './App.styled'
import { fetchData } from './state/fetch'
// import { data } from './state/data.json'

// console.log(data)

function App() {
  useEffect(() => {
    const data = fetchData()
    console.log(data)
  }, [])

  return (
    <div className="App">
      <BannerWrapper>
        <Banner></Banner>
      </BannerWrapper>
      <Wrapper>
        <Card></Card>
        <Graph></Graph>
      </Wrapper>
    </div>
  );
}

export default App;
