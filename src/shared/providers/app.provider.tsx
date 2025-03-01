'use client';

import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AppProviderProps extends React.PropsWithChildren {}

export const AppProvider: React.FC<AppProviderProps> = (props) => {
  const { children } = props;

  return <>{children}</>;
};
