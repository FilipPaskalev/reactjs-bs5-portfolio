// Icons
import {
  FaLinkedinIn,
  FaGithub,
  FaSlack,
  FaDiscord,
  FaLocationPin,
  FaSquarePhone,
  FaEnvelope
} from 'react-icons/fa6'

// DATA
import USER_DATA from '../../data/user.json'

// TODO: Add type definitions for DATA
// TODO: Add animations to the social icons on hover

// type HomePageProps = {};

const HomePage = () => {
  const mailTo = `mailto:${USER_DATA.email}`
  const formattedPhoneNumber = USER_DATA.phoneNumber.replace(
    /(\d{2})(\d{4})(\d{3})(\d{3})/,
    '($1) $2 $3 $4'
  )
  const formatterAddress = `${USER_DATA.address.street} · ${USER_DATA.address.city}, ${USER_DATA.address.country} · ${USER_DATA.address.postCode}`

  return (
    <section className='resume-section' id='about-me'>
      <div className='resume-section-content'>
        <h1 className='mb-0'>
          {USER_DATA.firstName}
          <span className='text-primary'>
            <b>{USER_DATA.lastName}</b>
          </span>
        </h1>
        <div className='subheading mb-5'>
          <div>
            <FaLocationPin className='text-primary' />
            {formatterAddress}
          </div>
          <div>
            <FaSquarePhone className='text-primary' />
            <a
              href={`tel:${USER_DATA.phoneNumber}`}
              title='Call me'
              className='text-secondary text-decoration-none'
            >
              {formattedPhoneNumber}
            </a>
          </div>
          <div>
            <FaEnvelope className='text-primary' />{' '}
            <a
              href={mailTo}
              target='_blank'
              title='Send email to me'
              className='text-secondary text-decoration-none'
            >
              {USER_DATA.email}
            </a>
          </div>
        </div>
        <p title='About me' className='lead mb-5'>
          I am experienced in leveraging agile frameworks to provide a robust
          synopsis for high level overviews. Iterative approaches to corporate
          strategy foster collaborative thinking to further the overall value
          proposition. I am experienced in leveraging agile frameworks to
          provide a robust synopsis for high level overviews. Iterative
          approaches to corporate strategy foster collaborative thinking to
          further the overall value proposition.
        </p>
        <div className='social-icons'>
          <a
            data-bs-toggle='tooltip'
            data-bs-placement='top'
            title={USER_DATA.social.linkedin.title}
            className='social-icon'
            href={USER_DATA.social.linkedin.href}
            target='_blank'
          >
            <FaLinkedinIn />
          </a>
          <a
            data-bs-toggle='tooltip'
            data-bs-placement='top'
            title={USER_DATA.social.github.title}
            className='social-icon'
            href={USER_DATA.social.github.href}
            target='_blank'
          >
            <FaGithub />
          </a>
          <a
            data-bs-toggle='tooltip'
            data-bs-placement='top'
            title={USER_DATA.social.discord.title}
            className='social-icon'
            href={USER_DATA.social.discord.href}
            target='_blank'
          >
            <FaDiscord />
          </a>
          <a
            data-bs-toggle='tooltip'
            data-bs-placement='top'
            title={USER_DATA.social.slack.title}
            className='social-icon'
            href={USER_DATA.social.slack.href}
            target='_blank'
          >
            <FaSlack />
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomePage
