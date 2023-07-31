import React, { useMemo } from 'react';
import { Typography } from '@mui/material';
import { ButtonPrimary } from 'app/components/ButtonPrimary';
import useStyle from './style';

export function Diary() {
  const classes = useStyle();

  const diaryRecords = useMemo(
    () => [
      {
        date: '2021.05.21',
        time: '23:25',
        title: '私の日記の記録が一部表示されます。',
        content:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      },
      {
        date: '2021.05.21',
        time: '23:25',
        title: '私の日記の記録が一部表示されます。',
        content:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      },
      {
        date: '2021.05.21',
        time: '23:25',
        title: '私の日記の記録が一部表示されます。',
        content:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      },
      {
        date: '2021.05.21',
        time: '23:25',
        title: '私の日記の記録が一部表示されます。',
        content:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      },
      {
        date: '2021.05.21',
        time: '23:25',
        title: '私の日記の記録が一部表示されます。',
        content:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      },
      {
        date: '2021.05.21',
        time: '23:25',
        title: '私の日記の記録が一部表示されます。',
        content:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      },
      {
        date: '2021.05.21',
        time: '23:25',
        title: '私の日記の記録が一部表示されます。',
        content:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      },
      {
        date: '2021.05.21',
        time: '23:25',
        title: '私の日記の記録が一部表示されます。',
        content:
          'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      },
    ],
    [],
  );

  return (
    <>
      <div className={classes.container}>
        <Typography className={classes.title}>MY DIARY</Typography>
        <div className={classes.diaryWrapper}>
          {diaryRecords.map(record => (
            <div className={classes.diaryRecordContainer}>
              <Typography className={classes.dateText}>
                {record.date}
              </Typography>
              <Typography className={classes.timeText}>
                {record.time}
              </Typography>
              <Typography className={classes.diaryTitleText}>
                {record.title}
              </Typography>
              <Typography className={classes.contentText}>
                {record.content}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.btn}>
        <ButtonPrimary text="記録をもっと見る" />
      </div>
    </>
  );
}
