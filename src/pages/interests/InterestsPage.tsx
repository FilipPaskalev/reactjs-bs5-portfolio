import INTERESTS_PARAGRAPHS from '../../data/interests.json'

const InterestsPage = () => {
  return (
    <section className='resume-section' id='interests'>
      <div className='resume-section-content'>
        <h2 className='mb-5'>Interests</h2>
        {INTERESTS_PARAGRAPHS.map((paragraph, index) => (
          <p key={index} className='lead mb-5'>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

export default InterestsPage
