import { FC } from 'react'
import { DissappearedElementType } from '../../types/types'

export const DissappearedElement: FC<DissappearedElementType> = ({ coordinates, animationDisplayState, actionValue }) => {
  return (
    <span className='disappearedElement'
      style={{
        position: 'fixed',
        left: coordinates.coordinateX + 20 + 'px',
        top: coordinates.coordinateY + -40 + 'px',
        display: animationDisplayState ? 'block' : 'none',
        transition: 'all 0.1s ease-in-out',
        fontSize: 26 + 'px',
      }}
    >+{actionValue}</span>
  )
}

