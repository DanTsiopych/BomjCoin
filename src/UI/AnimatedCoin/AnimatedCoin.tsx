import { useState, useEffect, FC } from 'react'
import { clicked } from '../../features/coinSlice'
import { useAppDispatch } from '../../store/hooks'
import MainCoin from '../../assets/icons/main-coin.svg'
import { AnimatedCoinType } from '../../types/types'
import { useActionContext } from '../../hooks/useActionContext'

export const AnimatedCoin: FC<AnimatedCoinType> = ({ setCoordinates, setAnimationDisplayState, coordinates, actionValue }) => {

    const [animationClass, setanimationClass] = useState('huge-coin-image');
    const dispatch = useAppDispatch();

    useEffect(() => {
        setAnimationDisplayState(true);
        setTimeout(() => setAnimationDisplayState(false), 100)
    }, [coordinates])

    const contextValue = useActionContext()

    return (
        <img
            src={MainCoin}
            className={animationClass}
            alt='coin'
            onClick={(e) => {
                dispatch(clicked(actionValue))
                contextValue.setClickedCoins(actionValue + contextValue.clickedCoins)
                setanimationClass('huge-coin-image animated');
                setCoordinates({
                    coordinateX: e.clientX,
                    coordinateY: e.clientY,
                })
                setTimeout(() => setanimationClass('main-coin'), 50)
            }}
        />
    )
}

