export interface RootObject {
  info: Info;
  results: Character[];
}

export interface Info {
  count: number;
  next: string;
  pages: number;
  prev: null;
}

export interface Character {
  created: Date;
  episode: string[];
  gender: Gender;
  id: number;
  image: string;
  location: Location;
  name: string;
  origin: Location;
  species: Species;
  status: Status;
  type: string;
  url: string;
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

export interface Location {
  name: string;
  url: string;
}

export enum Species {
  Alien = 'Alien',
  Human = 'Human',
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}

export type ShortCharacter = Pick<
  Character,
  'id' | 'name' | 'status' | 'species' | 'type' | 'gender' | 'image'
>;

export const character: ShortCharacter = {
  id: 1,
  name: '',
  status: Status.Unknown,
  species: Species.Human,
  type: '',
  gender: Gender.Female,
  image: '',
};

export const pageInfo: Info = {
  count: 0,
  pages: 0,
  next: 'https://rickandmortyapi.com/api/character?page=2',
  prev: null,
};
