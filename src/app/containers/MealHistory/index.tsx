import React, { useMemo } from 'react';
import useStyle from './style';
import M01 from 'assets/images/m01.jpg';
import M02 from 'assets/images/m02.jpg';
import M03 from 'assets/images/m03.jpg';
import S01 from 'assets/images/s01.jpg';
import { ButtonPrimary } from 'app/components/ButtonPrimary';

export function MealHistory() {
  const classes = useStyle();

  const mealHistories = useMemo(
    () => [
      { mealType: 'Morning', image: M01, date: '05.21' },
      { mealType: 'Lunch', image: M02, date: '05.21' },
      { mealType: 'Dinner', image: M03, date: '05.21' },
      { mealType: 'Snack', image: S01, date: '05.21' },
      { mealType: 'Morning', image: M01, date: '05.20' },
      { mealType: 'Lunch', image: M02, date: '05.20' },
      { mealType: 'Dinner', image: M03, date: '05.20' },
      { mealType: 'Snack', image: S01, date: '05.20' },
    ],
    [],
  );

  return (
    <>
      <div className={classes.container}>
        {mealHistories.map(mealHistory => (
          <div
            className={classes.mealHistoryContainer}
            style={{ backgroundImage: `url('${mealHistory.image}')` }}
          >
            <p className={classes.mealInfo}>
              {mealHistory.date}.{mealHistory.mealType}
            </p>
          </div>
        ))}
      </div>
      <div className={classes.btn}>
        <ButtonPrimary text="記録をもっと見る" />
      </div>
    </>
  );
}
