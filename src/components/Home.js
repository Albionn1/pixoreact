import React from 'react'
import { CardGroup, Card, Carousel, Button } from 'react-bootstrap'
import '../css/main.css';
const Home = () => {
  return (
    <>
        <div className='p-5 mb-2  custom-bg text-dark'>
            <h2 className="display-7" style={{fontWeight:'bold', textTransform:'uppercase'}}>Porosit ushqimin e deshiruar</h2>
        </div>
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      style={{height:'650px', objectFit:'cover'}}
      className="d-block w-100"
      src="img/burgerCarousel.jpg"
      alt="First slide"
      />
      <Carousel.Caption>
        <h3 className='text-dark'>First slide label</h3>
        <p className='text-dark'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
        style={{height:'650px', objectFit:'cover'}}
      className="d-block w-100"
      src="img/saladCarousel.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className='text-dark'>Second slide label</h3>
      <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
        style={{height:'650px', objectFit:'cover'}}
      className="d-block w-100"
      src="img/veganCarousel.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className='text-dark'>Third slide label</h3>
      <p className='text-dark'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
      <h2 className='display-6 mt-5'>Rekomandimet e sotshme</h2>
      <CardGroup style={{marginTop: '5%'}}>

  <Card>
    <Card.Img variant="top" src="img/burger.jpg" />
    <Card.Body>
      <Card.Title>Hamburger</Card.Title>
      <Card.Text>
        The best burger in town. Right at your door.
        Order by clicking below
      </Card.Text>
    <Button variant="primary">Porosit</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Restaurant Name goes here</small>
    </Card.Footer>
  </Card>
  <Card style={{marginLeft: '2rem'}}>
    <Card.Img variant="top" src="img/burger.jpg" />
    <Card.Body>
      <Card.Title>Hamburger</Card.Title>
      <Card.Text>
      The best burger in town. Right at your door.
        Order by clicking below
      </Card.Text>
    <Button variant="primary">Porosit</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Restaurant Name goes here</small>
    </Card.Footer>
  </Card>
  <Card style={{marginLeft: '2rem'}}>
    <Card.Img variant="top" src="img/burger.jpg" />
    <Card.Body>
      <Card.Title>Hamburger</Card.Title>
      <Card.Text>
      The best burger in town. Right at your door.
        Order by clicking below
      </Card.Text>
      <Button variant="primary">Porosit</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Restaurant Name goes here</small>
    </Card.Footer>
  </Card>
  <Card style={{marginLeft: '2rem'}}>
    <Card.Img variant="top" src="img/burger.jpg" />
    <Card.Body>
      <Card.Title>Hamburger</Card.Title>
      <Card.Text>
      The best burger in town. Right at your door.
        Order by clicking below
      </Card.Text>
      <Button variant="primary">Porosit</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Restaurant Name goes here</small>
    </Card.Footer>
  </Card>
  
</CardGroup>

    </>
  )
}

export default Home
