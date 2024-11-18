import { useState } from 'react'
import StepsForm from './Form';
import ResultsInterface from './Result';

interface ITraining {
    distance: number,
    date: any
  }

function StepsLogic() {
  const [trainingList, setTreningList] = useState<ITraining[]>([]); 

  const addTraining = (training: ITraining): void => {
    !trainingList.some(({ date }) => date === training.date)
      ? setTreningList(prev => [...prev, training])
      : changeTraining(training)
  }

  const changeTraining = (training: ITraining): void => {
    setTreningList(prev => prev.map(item => item.date === training.date
      ? {...item, distance: training.distance}
      : item))
  }

  const deleteDataSteps = (date: string): void => {
    setTreningList(trainingList.filter(item => item.date !== date))
  }

  const sortedList = (): ITraining[] => {
    if (trainingList.length === 0) return []
    if (trainingList.length === 1) return trainingList
        return [...trainingList].sort((a, b) => b.date - a.date)
  }
  
  return (
    <div className='app'>
      <StepsForm 
        addTraining={addTraining}
      />
      <div className="containerTwo">
        <div className="results_steps">
          <span className="results_steps-item spanText">Дата (ДД.ММ.ГГ)</span>
          <span className="results_steps-item spanText">Пройдено км</span>
          <span className="results_steps-item spanText">Действия</span>
        </div>
        <div className="list-content">
          {
            sortedList().map(training => 
              <ResultsInterface
                key={training.date}
                training={training}
                deleteDataSteps={deleteDataSteps}
              />
            )
          }
        </div> 
      </div>
    </div>
  )
}

export default StepsLogic