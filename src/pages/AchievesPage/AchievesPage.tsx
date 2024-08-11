import './AchievesPage.scss'
import BackButton from '../../UI/BackButton/BackButton'
import Achieve from '../../components/Achieve/Achieve'

function AchievesPage() {
  return (
    <div className='achievesPage'>
      <BackButton />
      <div className='achieves-content'>
        <h3 className='achieves-title'>Achieves</h3>
        <div className='achieves'>
          <Achieve description='1k' reward={100} goal={1000} done={true} id={1}/>
          <Achieve description='5k' reward={500} goal={5000} done={true} id={2}/>
          <Achieve description='25k' reward={5000} goal={25000} done={true} id={3}/>
          <Achieve description='100k' reward={20000} goal={100000} done={true} id={4}/>
        </div>
      </div>
    </div>
  )
}

export default AchievesPage