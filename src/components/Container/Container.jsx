import PropTypes from 'prop-types';
import styles from './Container.module.css';
const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
Container.protoTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;