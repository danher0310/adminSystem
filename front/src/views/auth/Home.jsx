import React, {useEffect} from 'react'
import Layout from '../../hocs/Layout'
import { Container } from 'react-bootstrap';

function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div>
      <Layout>
        <Container>
          <h1>Home</h1>
        </Container>
      
      </Layout>
    </div>
  )
}

export default Home