import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CharacterCard from '.';

import {
  ShortCharacter,
  Gender,
  Species,
  Status,
} from '../../model/characters';

describe('App', () => {
  it('Renders hello world', () => {
    const nameMock = 'Character test';
    const genderMock = Gender.Male;
    const speciesMock = Species.Alien;
    const statusMock = Status.Alive;
    const mockCharacter: ShortCharacter = {
      id: 1,
      name: nameMock,
      gender: genderMock,
      species: speciesMock,
      status: statusMock,
      type: 'Test',
      image: 'dfs',
    };
    render(<CharacterCard shortCharacter={mockCharacter} />);
    expect(screen.getByText(nameMock)).toBeInTheDocument();
    expect(screen.getByText(genderMock)).toBeInTheDocument();
    expect(screen.getByText(speciesMock)).toBeInTheDocument();
    expect(screen.getByText(statusMock)).toBeInTheDocument();
  });
});
