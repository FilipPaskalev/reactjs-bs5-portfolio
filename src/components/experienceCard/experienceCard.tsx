import { CiLink } from 'react-icons/ci'
import { IoCalendarNumberOutline } from 'react-icons/io5'

// TODO add icons after position in header (icons should be connected skills with position )
type Props = {
  position: string
  company: {
    name: string
    website: string
  }
  description: string[]
  startDate: string
  endDate: string
}

const ExperienceCard = ({
  position,
  company,
  description,
  startDate,
  endDate
}: Props) => {
  return (
    <article className='d-flex flex-column flex-md-row justify-content-between mb-5'>
      <div className='flex-grow-1'>
        <h3 className='mb-0 text-primary'>{position}</h3>
        <h4 className='subheading mb-3'>
          {company.name}{' '}
          <a href={company.website} target='_blank'>
            <CiLink />
          </a>
        </h4>
        {description.map((desc, index) => (
          <p key={index} className='my-0 py-0'>
            {desc}
          </p>
        ))}
      </div>
      <footer className='flex-shrink-0 pt-3'>
        <p className='text-primary'>
          <IoCalendarNumberOutline className='mb-1' /> {startDate} - {endDate}
        </p>
      </footer>
    </article>
  )
}

export default ExperienceCard
