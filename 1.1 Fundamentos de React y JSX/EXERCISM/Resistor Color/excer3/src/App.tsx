import React from 'react';

const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export function colorCode(): void {
  COLORS.forEach((color, index) => {
    console.log(`${color}: ${index}`);
  });
}

export default function ColorCodeComponent() {
  return (
    <div>
      {COLORS.map((color, index) => (
        <p key={color}>{`${color}: ${index}`}</p>
      ))}
    </div>
  );
}
