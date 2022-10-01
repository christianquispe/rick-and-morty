import { Card, Image, Text } from '@mantine/core';

import { ShortCharacter } from '../../model/characters';

interface CharacterCardProps {
  shortCharacter: ShortCharacter;
}

function CharacterCard({ shortCharacter }: CharacterCardProps) {
  return (
    <Card shadow="sm" p="xl" component="div">
      <Card.Section>
        <Image src={shortCharacter.image} alt="No way!" />
      </Card.Section>

      <Text weight={500} size="lg" mt="md">
        {shortCharacter.name}
      </Text>

      <Text mt="xs" color="dimmed" size="sm">
        <span>{shortCharacter.gender}</span> -{' '}
        <span>{shortCharacter.species}</span> -{' '}
        <span>{shortCharacter.status}</span>
      </Text>
    </Card>
  );
}

export default CharacterCard;
