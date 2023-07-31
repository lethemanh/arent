import React, { useMemo, useState } from 'react';
import { CircularProgress } from '@mui/material';
import useStyle from './style';

export function AchievementRate() {
  const classes = useStyle();
  const [achievementRate] = useState(10);

  const percentage = useMemo(() => {
    return Math.round((achievementRate / 21) * 100);
  }, [achievementRate]);

  return (
    <div className={classes.container}>
      <CircularProgress
        size={180}
        thickness={0.5}
        className={classes.progressCircle}
        variant="determinate"
        value={percentage}
      />
      <div className={classes.text}>
        <div className={classes.textWrapper}>
          <div className={classes.achievementText}>{achievementRate}/21</div>
          <div className={classes.percentageText}>{percentage}%</div>
        </div>
      </div>
    </div>
  );
}
