import React from 'react'

//App
import CommonTitle from '../CommonTitle/CommonTitle';
import CommonButton from '../CommonButton/CommonButton'
type Props = {}

const ProjectsList = (props: Props) => {
  return (
    <div>
        <CommonTitle text='Hottest Project' />
        <div className='flex gap-3' >
         <div>single project</div>
        </div>
        <CommonButton text='see more...' size='small'  />
    </div>
  )
}

export default ProjectsList