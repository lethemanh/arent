import React, { useMemo } from 'react';
import useStyle from './style';
import IconKnife from 'assets/images/icon_knife.png';
import IconCup from 'assets/images/icon_cup.png';

export function MealType() {
  const classes = useStyle();

  const mealTypes = useMemo(
    () => [
      { name: 'Morning', icon: IconKnife },
      { name: 'Lunch', icon: IconKnife },
      { name: 'Dinner', icon: IconKnife },
      { name: 'Snack', icon: IconCup },
    ],
    [],
  );

  return (
    <div className={classes.container}>
      {mealTypes.map(mealType => (
        <div className={classes.typeContainer} key={mealType.name}>
          <img width="56" src={mealType.icon} />
          <p className={classes.mealName}>{mealType.name}</p>
        </div>
      ))}
    </div>
  );
}
