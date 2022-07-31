import { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Banner } from './app/components/Banner/Banner'
import { Card } from './app/components/Card/Card'
import { Graph } from './app/components/Graph/Graph'
import { Wrapper } from './App.styled'
import { updateDataOnFetch } from './state/productSlice'
import axios from 'axios'

function App() {
  const dispatch = useDispatch()

  const fetchData = useCallback(async () => {
    try {
      const json = await axios.get('data.json')
      dispatch(updateDataOnFetch(json))
    } catch(e) {
      console.log(e)
    }
  }, [dispatch])

  useEffect(() => {
    fetchData()
    .catch(e => {
      console.log(e)
    })
  }, [fetchData])

  return (
    <div className="App">
      <Banner></Banner>
      <Wrapper>
        <Card></Card>
        <Graph></Graph>
      </Wrapper>
    </div>
  );
}

export default App;
