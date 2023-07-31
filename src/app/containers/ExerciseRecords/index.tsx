import React, { useMemo } from 'react';
import useStyle from './style';

export function ExerciseRecords() {
  const classes = useStyle();

  const exerciseRecords = useMemo(
    () => [
      { name: '家事全般（立位・軽い', burnedCalories: 26, exerciseTime: 10 },
      { name: '家事全般（立位・軽い', burnedCalories: 26, exerciseTime: 10 },
      { name: '家事全般（立位・軽い', burnedCalories: 26, exerciseTime: 10 },
      { name: '家事全般（立位・軽い', burnedCalories: 26, exerciseTime: 10 },
      { name: '家事全般（立位・軽い', burnedCalories: 26, exerciseTime: 10 },
      { name: '家事全般（立位・軽い', burnedCalories: 26, exerciseTime: 10 },
      { name: '家事全般（立位・軽い', burnedCalories: 26, exerciseTime: 10 },
      { name: '家事全般（立位・軽い', burnedCalories: 26, exerciseTime: 10 },
      { name: '家事全般（立位・軽い', burnedCalories: 26, exerciseTime: 10 },
      { name: '家事全般（立位・軽い', burnedCalories: 26, exerciseTime: 10 },
      { name: '家事全般（立位・軽い', burnedCalories: 26, exerciseTime: 10 },
      { name: '家事全般（立位・軽い', burnedCalories: 26, exerciseTime: 10 },
      { name: '家事全般（立位・軽い', burnedCalories: 26, exerciseTime: 10 },
      { name: '家事全般（立位・軽い', burnedCalories: 26, exerciseTime: 10 },
    ],
    [],
  );

  return (
    <>
      <div className={classes.container}>
        <div className={classes.headerSection}>
          <span className={classes.title}>MY EXERCISE</span>
          <span className={classes.date}>2021.05.21</span>
        </div>
        <div className={classes.recordWrapper}>
          {exerciseRecords.map(record => (
            <div className={classes.exerciseRecordContainer}>
              <div className={classes.exerciseName}>
                <div className={classes.itemDot}></div>
                <div>
                  <p className={classes.exerciseNameText}>{record.name}</p>
                  <p className={classes.burnedCalories}>
                    {record.burnedCalories} kcal
                  </p>
                </div>
              </div>
              <p className={classes.exerciseTime}>{record.exerciseTime} min</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
