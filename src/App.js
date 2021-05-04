import './App.css'
import ApolloClient from 'apollo-boost'
//named component import
import {ApolloProvider} from '@apollo/react-hooks'
import {PokemonsContainer} from './containers/PokemonsContainers'

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/'
  })
  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  )
}

export default App;
