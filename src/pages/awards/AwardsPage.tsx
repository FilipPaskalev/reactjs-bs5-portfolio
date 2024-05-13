import { FaTrophy } from 'react-icons/fa6'

import AWARDS from '../../data/awards.json'

const AwardsPage = () => {
  return (
    <section className='resume-section' id='awards'>
      <div className='resume-section-content'>
        <h2 className='mb-5'>Awards</h2>
        <ul className='fa-ul mb-5 list-unstyled'>
          {AWARDS.map((award, index) => (
            <li key={index} className='pb-4'>
              <FaTrophy className='text-warning' />{' '}
              {award.ranking.position.toString()}
              {award.ranking.suffix} Place - {award.event.name}{' '}
              <span className='text-primary'>{award.event.date}</span>
              <div>{award.event.location}</div>
              <p className='pt-2'>{award.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AwardsPage
