/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Center,
  Container,
  Grid,
  Pagination,
  PaginationProps,
} from '@mantine/core';
import { ShortCharacter } from '../../model/characters';

import CharacterCard from '../CharacterCard';

interface CharacterCardListProps {
  characters: ShortCharacter[];
  pagination?: PaginationProps;
}

export default function CharacterCardList({
  characters,
  pagination,
}: CharacterCardListProps) {
  return (
    <Container>
      {pagination && (
        <Center>
          <Pagination {...pagination} />
        </Center>
      )}
      <br />
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        <Grid gutter={10}>
          {characters.map((item) => (
            <Grid.Col key={item.id} xs={6} md={4} lg={3}>
              <li style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                <CharacterCard shortCharacter={item} />
              </li>
            </Grid.Col>
          ))}
        </Grid>
      </ul>
      <br />
      {pagination && (
        <Center>
          <Pagination {...pagination} />
        </Center>
      )}
    </Container>
  );
}
