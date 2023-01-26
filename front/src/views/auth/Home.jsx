import React, {useEffect} from 'react'

import { Container, Row, Col} from 'react-bootstrap';

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div>
      
        <Container>
         <Row>
            <Col>
              <div>
                <h2>Welcome to Admin system</h2>
                <p> Comming soon for mas details and working in the front </p>
              </div>
            </Col>
         </Row>
        </Container>
      
      
    </div>
  )
}

export default Home