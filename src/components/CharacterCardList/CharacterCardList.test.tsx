import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CharacterCardList from '.';
import {
  ShortCharacter,
  Gender,
  Species,
  Status,
} from '../../model/characters';

describe('App', () => {
  it('Renders hello world', async () => {
    const character1: ShortCharacter = {
      id: 1,
      name: 'Character test',
      gender: Gender.Male,
      species: Species.Alien,
      status: Status.Alive,
      type: 'Test',
      image: 'dfs',
    };
    const character2: ShortCharacter = {
      id: 2,
      name: 'Character test',
      gender: Gender.Male,
      species: Species.Alien,
      status: Status.Alive,
      type: 'Test',
      image: 'dfs',
    };
    const character3: ShortCharacter = {
      id: 3,
      name: 'Character test',
      gender: Gender.Male,
      species: Species.Alien,
      status: Status.Alive,
      type: 'Test',
      image: 'dfs',
    };
    const mockList = [character1, character2, character3];
    render(<CharacterCardList characters={mockList} />);
    const listCharac = await screen.findAllByRole('listitem');
    expect(listCharac).toHaveLength(3);
  });
});
