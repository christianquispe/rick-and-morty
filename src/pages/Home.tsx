import { useEffect, useState } from 'react';

import { Loader, Center } from '@mantine/core';
import CharacterCardList from '../components/CharacterCardList';
import Layout from '../Layout/index';

import { getCharacters } from '../services';
import { Info, pageInfo as initPageInfo } from '../model/characters';

function Home() {
  const [characteres, setCharacters] = useState([]);
  const [pageInfo, setPageInfo] = useState<Info>(initPageInfo);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currPage, setCurrPage] = useState(1);

  const loadCharacters = (page?: number) => {
    setLoading(true);
    getCharacters(page)
      .then((res) => {
        setCharacters(res.data.results);
        setPageInfo(res.data.info);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setHasError(true);
      });
  };

  useEffect(() => {
    loadCharacters(currPage);
  }, [currPage]);

  return (
    <Layout>
      {loading && (
        <Center>
          <Loader />
        </Center>
      )}
      {hasError && <p>An error has occurred :/</p>}
      {!loading && !hasError && (
        <CharacterCardList
          characters={characteres}
          pagination={{
            total: pageInfo.pages,
            onChange: (page) => {
              setCurrPage(page);
            },
            page: currPage,
          }}
        />
      )}
    </Layout>
  );
}

export default Home;
