import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { bought } from '../../features/coinSlice';
import { useLocalStorage } from 'usehooks-ts'
import { FC } from 'react';
import { useActionContext } from '../../hooks/useActionContext';
import { BoostType } from '../../types/types';
import Rocket from '../../assets/icons/rocket.svg'

const Boost: FC<BoostType> = ({ title, price, description, boost, id }) => {
    const numOfCoins = useAppSelector((state) => state.coin.numOfCoins)
    const dispatch = useAppDispatch();

    const [boostDone, setBoostDone] = useLocalStorage(`${id}`, false)
    const contextValue = useActionContext()

    function buyBoost() {
        if (numOfCoins >= price && !boostDone) {
            dispatch(bought(price))
            contextValue.setActionValue(contextValue.actionValue + boost)
            setBoostDone(true)
        }
        else if (!boostDone) {
            alert("You haven't anough money!")
        }
    }



    return (
        <div className={boostDone ? 'boost done' : 'boost'} onClick={() => buyBoost()}>
            <div className='boost-content'>
                <p className='boost-title'>{title}</p>
                <p className='boost-price'>[{price}]</p>
                <p className='boost-description'>
                    {description}
                </p>
            </div>
            <img src={Rocket} className='boost-image' alt='rocket' />
        </div>
    )
}

export default Boost