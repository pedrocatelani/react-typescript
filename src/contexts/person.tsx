import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { PersonContextProps } from './types';

const PersonContext = createContext<PersonContextProps | undefined>(undefined);
PersonContext.displayName = 'Person';

export function PersonProvider({ children }: PropsWithChildren<{}>) {
  const [person, setPerson] = useState<PersonContextProps['person']>(null);

  return <PersonContext.Provider value={{ person, setPerson }}>{children}</PersonContext.Provider>;
}

export function usePersonContext() {
  const context = useContext(PersonContext);

  if (!context) {
    throw new Error('missing PersonProvider!');
  }

  const { person, setPerson } = context;

  return { person, setPerson };
}
