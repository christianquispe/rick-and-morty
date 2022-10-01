import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
    height: '100%',
    width: '100%',
  },

  grid: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },

  navItem: {},

  navLink: {
    color: theme.colors.blue[9],
    textDecoration: 'none',
    display: 'block',
    '&:hover': {
      color: theme.colors.blue[6],
      textDecoration: 'underline',
    },
  },
}));

export default useStyles;
