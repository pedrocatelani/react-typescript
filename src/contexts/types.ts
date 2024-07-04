export type Person = {
  name: string;
  gender: string;
  another?: string;
};

export type PersonContextProps = {
  person: Person | null;
  setPerson: React.Dispatch<React.SetStateAction<Person | null>>;
};
