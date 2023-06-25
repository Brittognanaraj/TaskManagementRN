import {useEffect, useState} from 'react';

const useTimer = (delay,stopBol) => {
  const [state, setState] = useState(0);
  const [stop, isSetStop] = useState(stopBol);

  useEffect(() => {
    if (stop) return;
    console.log('TIMER RUNNING=>>>>>>>>>>>',state);
    setTimeout(() => {
      setState(prev => prev + 1);
    }, delay);
  }, [state]);

  return [state, () => isSetStop(true)];
};

export default useTimer;
