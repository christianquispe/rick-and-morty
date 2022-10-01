import { Link } from 'react-router-dom';

import { Container, Navbar as NavbarMantine } from '@mantine/core';

import useStyles from './styles';

function Navbar() {
  const { classes } = useStyles();

  return (
    <NavbarMantine height={60}>
      <Container className={classes.container}>
        <div className={classes.grid}>
          <h1>Rick And Morty</h1>
          <ul className={classes.navList}>
            <li className={classes.navItem}>
              <Link to="/" className={classes.navLink}>
                Characters
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </NavbarMantine>
  );
}

export default Navbar;
