import { IoCalendarNumberOutline } from 'react-icons/io5'
import { FaTrophy } from 'react-icons/fa6'
import { CiLink } from 'react-icons/ci'

type TEducationCardProps = {
  institution: {
    name: string
    website: string
    location: {
      city: string
      country: string
    }
  }
  degree: string
  fieldOfStudy: string
  description: string[]
  grade: string
  startDate: string
  endDate: string
}

const EducationCard = ({
  institution,
  degree,
  fieldOfStudy,
  description,
  grade,
  startDate,
  endDate
}: TEducationCardProps) => {
  return (
    <section className='d-flex flex-column flex-md-row justify-content-between mb-5'>
      <hgroup className='flex-grow-1'>
        <h3 className='mb-0'>
          <a
            href={institution.website}
            target='_blank'
            className='text-decoration-none text-dark mb-0'
          >
            {institution.name}
            <CiLink className='text-primary mb-0' />
          </a>
          {/* <p className='fs-5 text-muted'>
            {institution.location.city}, {institution.location.country}
          </p> */}
        </h3>
        <h4 className='mb-0 text-dark'>{degree}</h4>
        <h6 className='mb-3 fs-5 text-muted'>{fieldOfStudy}</h6>
        {description.map((desc, index) => (
          <p key={index} className='my-0'>
            {desc}
          </p>
        ))}
        <p className='my-3'>
          <FaTrophy className='text-warning mb-1' /> {grade}
        </p>
      </hgroup>
      <footer className='text-primary flex-shrink-0'>
        <p>
          <IoCalendarNumberOutline className='mb-1' /> {startDate} - {endDate}
        </p>
      </footer>
    </section>
  )
}

export default EducationCard
