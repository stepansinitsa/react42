type TrainingProps = {
  training: {
    distance: number;
    date: string;
  };
  deleteDataSteps: (date: string) => void;
};
const ResultsInterface: React.FC<TrainingProps> = ({
  training,
  deleteDataSteps,
}) => {
  const date =
    (training.date && new Date(training.date).toLocaleDateString()) || "";

  return (
    <div className="formSteps">
      <div className="results_steps-item spanText">{date}</div>
      <div className="results_steps-item spanText">{training.distance}</div>
      <div>
        <button className="content-btn edit"></button>
        <button
          className="content-btn delete"
          onClick={() => training.date && deleteDataSteps(training.date)}
        ></button>
      </div>
    </div>
  );
};

export default ResultsInterface;
