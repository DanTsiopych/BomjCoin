import { useState } from 'react'
import './MainPage.scss'

import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'

import Navigation from '../../components/Navigation/Navigation'
import { DissappearedElement } from '../../UI/DissappearedElement/DissappearedElement'
import { AnimatedCoin } from '../../UI/AnimatedCoin/AnimatedCoin'
import { useActionContext } from '../../hooks/useActionContext'

import MainCoin from '../../assets/icons/main-coin.svg'

function MainPage() {
  const numOfCoins = useAppSelector((state) => state.coin.numOfCoins)

  const [coordinates, setCoordinates] = useState({ coordinateX: 0, coordinateY: 0 });
  const [animationDisplayState, setAnimationDisplayState] = useState(false);

  const contextValue = useActionContext()


  return (
    <div className='main-page'>
      <DissappearedElement
        coordinates={coordinates}
        animationDisplayState={animationDisplayState}
        actionValue={contextValue.actionValue}
      />
      <h1 className='main-title'>Bomj Coin</h1>
      <div className='main-content'>
        <div className='coins'>
          <img src={MainCoin} className='little-coin-image' alt='coin' />
          <span className='number-of-coins'>{numOfCoins}</span>
        </div>
        <AnimatedCoin
          setCoordinates={setCoordinates}
          setAnimationDisplayState={setAnimationDisplayState}
          coordinates={coordinates}
          actionValue={contextValue.actionValue}
        />
        <Navigation />
      </div>
      <p className='main-footer'>Done by <Link to='https://t.me/danial2008ts' className='telegram-link'>Dan Tsiopych</Link></p>
    </div>
  )
}

export default MainPage