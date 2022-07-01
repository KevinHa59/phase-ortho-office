import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import '../Templates.css';
const ButtonStageItem = (props) => {
  const Stages = props.Stages;
  const [currentStageIndex, setCurrentStageIndex] = useState(props.currentStageIndex);
  const [currentStage, setCurrentStage] = useState(Stages[currentStageIndex]);
  function UpdateStageHandler() {
    if (currentStageIndex < Stages.length - 1) {
      setCurrentStageIndex(currentStageIndex + 1);
    }
  }

  useEffect(() => {
    setCurrentStage(Stages[currentStageIndex]);
  }, [currentStageIndex]);

  return (
    <Button variant="text" className={'ButtonItem ' + props.className} onClick={() => UpdateStageHandler()}>
      {currentStage}
    </Button>
  );
};

export default ButtonStageItem;
