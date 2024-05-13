import { FaCheck } from 'react-icons/fa6'

type Props = {
  description: string
}

const WorkflowElement = ({ description }: Props) => {
  return (
    <article>
      <FaCheck className='text-primary mb-1' />
      {` ${description}`}
    </article>
  )
}

export default WorkflowElement
