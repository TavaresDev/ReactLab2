import React from 'react';
import Styles from './styles';

const Header = ({title, subTitle}) => {
  return (
    <Styles.Header>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </Styles.Header>
  );
}
 
export default Header;