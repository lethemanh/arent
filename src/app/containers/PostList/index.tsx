import React, { useMemo } from 'react';
import { ButtonPrimary } from 'app/components/ButtonPrimary';
import Column1 from 'assets/images/column-1.jpg';
import Column2 from 'assets/images/column-2.jpg';
import Column3 from 'assets/images/column-3.jpg';
import Column4 from 'assets/images/column-4.jpg';
import Column5 from 'assets/images/column-5.jpg';
import Column6 from 'assets/images/column-6.jpg';
import Column7 from 'assets/images/column-7.jpg';
import Column8 from 'assets/images/column-8.jpg';
import useStyle from './style';
import { Typography } from '@mui/material';

export function PostList() {
  const classes = useStyle();

  const posts = useMemo(
    () => [
      {
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        thumbnail: Column1,
        date: '2021.05.17',
        time: '23:25',
        tag: '#魚料理  #和食  #DHA',
      },
      {
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        thumbnail: Column2,
        date: '2021.05.17',
        time: '23:25',
        tag: '#魚料理  #和食  #DHA',
      },
      {
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        thumbnail: Column3,
        date: '2021.05.17',
        time: '23:25',
        tag: '#魚料理  #和食  #DHA',
      },
      {
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        thumbnail: Column4,
        date: '2021.05.17',
        time: '23:25',
        tag: '#魚料理  #和食  #DHA',
      },
      {
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        thumbnail: Column5,
        date: '2021.05.17',
        time: '23:25',
        tag: '#魚料理  #和食  #DHA',
      },
      {
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        thumbnail: Column6,
        date: '2021.05.17',
        time: '23:25',
        tag: '#魚料理  #和食  #DHA',
      },
      {
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        thumbnail: Column7,
        date: '2021.05.17',
        time: '23:25',
        tag: '#魚料理  #和食  #DHA',
      },
      {
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
        thumbnail: Column8,
        date: '2021.05.17',
        time: '23:25',
        tag: '#魚料理  #和食  #DHA',
      },
    ],
    [],
  );

  return (
    <>
      <div className={classes.container}>
        {posts.map(post => (
          <div className={classes.postContainer}>
            <div className={classes.thumbnailContainer}>
              <img className={classes.postThumbnail} src={post.thumbnail} />
              <div className={classes.postedAt}>
                {post.date} {post.time}
              </div>
            </div>
            <Typography className={classes.postTitle}>{post.title}</Typography>
            <Typography className={classes.postTag}>{post.tag}</Typography>
          </div>
        ))}
      </div>
      <div className={classes.btn}>
        <ButtonPrimary text="記録をもっと見る" />
      </div>
    </>
  );
}
