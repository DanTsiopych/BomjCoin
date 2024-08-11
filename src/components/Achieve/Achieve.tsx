import { FC, useEffect } from 'react'
import './Achieve.scss'
import Prize from '../../assets/icons/cup.svg'
import { useAppDispatch } from '../../store/hooks'
import { AchieveType } from '../../types/types'
import { clicked } from '../../features/coinSlice';
import { useActionContext } from '../../hooks/useActionContext'

const Achieve: FC<AchieveType> = ({ description, reward, goal }) => {

    const dispatch = useAppDispatch();

    const contextValue = useActionContext()
    useEffect(() => {
        if (contextValue.clickedCoins >= goal) {
            dispatch(clicked(reward))
        }
    }, [])
    return (
        <div className={contextValue.clickedCoins >= goal ? 'achieve done' : 'achieve'}>
            <div className='achieve-content'>
                <p className='achieve-description'>Click {description}</p>
                <p className='achieve-reward'>Reward: {reward}</p>
                <p className='progress'>Progress {contextValue.clickedCoins} / {goal} </p>
            </div>
            <div className='achieve-prize'>
                <img src={Prize} className='achieve-prize-img' alt='prize' />
                <p className='achieve-condition'>{contextValue.clickedCoins >= goal ? 'Done' : 'Not done'}</p>
            </div>
        </div>
    )
}

export default Achieve