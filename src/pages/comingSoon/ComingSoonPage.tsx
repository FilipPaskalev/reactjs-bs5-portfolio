import { useState, useEffect, useCallback } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import WE_ARE_WORKING_ON_IT from '../../assets/gif/we-are-working-on-it.gif'

interface CountdownProps {
  targetDate: Date
}

interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownTimer = ({ targetDate }: CountdownProps) => {
  const calculateTimeLeft = useCallback((): CountdownTime => {
    const difference = +targetDate - +new Date()
    let timeLeft: CountdownTime = { days: 0, hours: 0, minutes: 0, seconds: 0 }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }, [targetDate])

  const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  }, [targetDate, calculateTimeLeft])

  return (
    <div className='text-center mt-4'>
      <h3>Time Left</h3>
      <p className='fs-5'>
        {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes{' '}
        {timeLeft.seconds} seconds
      </p>
    </div>
  )
}

const ComingSoonPage = () => {
  const targetDate = new Date('2024-06-01T00:00:00')

  return (
    <section className='resume-section' id='coming-soon'>
      <div className='resume-section-content'>
        <Container className='mt-5'>
          <Row className='justify-content-center'>
            <Col md={8}>
              <Card className='border-0'>
                <Card.Body>
                  <Card.Title className='text-center fs-3'>
                    Coming Soon
                  </Card.Title>
                  <Card.Text className='text-center fs-5'>
                    Under construction. Please excuse the mess.
                  </Card.Text>
                  <div className='text-center'>
                    <img
                      src={WE_ARE_WORKING_ON_IT}
                      alt='Animated GIF'
                      className='img-fluid'
                    />
                  </div>
                  <CountdownTimer targetDate={targetDate} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default ComingSoonPage
