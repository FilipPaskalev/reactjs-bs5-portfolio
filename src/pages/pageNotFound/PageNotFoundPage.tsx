import { Container, Row, Col, Alert } from 'react-bootstrap'

const PageNotFoundPage = () => {
  return (
    <section className='resume-section' id='page-not-found'>
      <div className='resume-section-content mt-5 d-flex justify-content-center align-items-center'>
        <Container>
          <Row className='justify-content-center'>
            <Col xs={12} md={8}>
              <Container className='text-center my-3'>
                <h2>Page Not Found</h2>
                <div className='text-center'>
                  <img
                    src='https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif'
                    alt='404 GIF'
                    className='img-fluid'
                  />
                </div>
                <p className='mt-3 text-center fs-4'>
                  The page you are looking for might have been removed, had its
                  name changed, or is temporarily unavailable.
                </p>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default PageNotFoundPage
