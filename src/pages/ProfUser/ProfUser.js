import React from 'react';
import { Button } from '@material-ui/core';
import s from './ProfUser.module.css';
import ActiveBets from '../ActiveBets/ActiveBets';
import FinishBets from '../FinishBets/FinishBets';

const ProfUser = () => {
  return (
    <div className={s.main}>
      <div className={s.first}>
        <img
          className={s.img}
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ccaf30e-a9ba-40ef-8a47-2e4c840b531e/d7zdt52-2c2db77c-c5c6-43a1-8c84-2aef2dc3f992.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRjY2FmMzBlLWE5YmEtNDBlZi04YTQ3LTJlNGM4NDBiNTMxZVwvZDd6ZHQ1Mi0yYzJkYjc3Yy1jNWM2LTQzYTEtOGM4NC0yYWVmMmRjM2Y5OTIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PPbbeIyFMyT3vCOy8av9xg5Qyq9oIgOQNVkBPznmnew"
          alt=""
        />
        <div className={s.info}>
          <div className={s.lineSecond}>Name: Porky Pig</div>
          <div className={s.lineSecond}>Nick name: Pig</div>
          <div className={s.lineSecond}>Points balance: 100</div>
          <div>
            <Button type="button" className={s.but}>
              ADD BET
            </Button>
          </div>
        </div>
      </div>
      <div className={s.bet}>
        <ActiveBets />
        <FinishBets />
      </div>
    </div>
  );
};

export default ProfUser;
