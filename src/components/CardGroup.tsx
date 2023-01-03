import * as React from 'react';
import { Card } from './Card';

export type Card = {
  id: string;
  name: string;
  isOn: boolean;
};

type CardGroupProps = {
  cards: Card[];
};

export const CardGroup = ({ cards }: CardGroupProps) => {
  return (
    <div className="flex items-center justify-start gap-2 flex-wrap">
      {cards.map((card, i) => (
        <Card
          key={i}
          id={card.id}
          name={card.name}
          isOn={card.isOn}
        />
      ))}
    </div>
  );
};