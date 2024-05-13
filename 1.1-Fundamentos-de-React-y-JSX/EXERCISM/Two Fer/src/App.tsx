import React from 'react';

export function TwoFer({ name = 'andres' }: { name?: string }): string {
  return `One for ${name}, one for me.`;
}

export default function TwoFerComponent() {
  return (
    <div>
      <p>{TwoFer({})}</p>
    </div>
  );
}
