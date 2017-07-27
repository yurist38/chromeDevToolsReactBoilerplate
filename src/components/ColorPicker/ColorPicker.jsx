import React from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import styles from './styles';

const ColorPicker = ({ color, onChangeColor }) => (
  <div className={styles.container} style={({backgroundColor: color})}>
    <SketchPicker color={color} onChange={onChangeColor} />
  </div>
);

ColorPicker.propTypes = {
  username: PropTypes.string,
  onChangeColor: PropTypes.func
};

export default ColorPicker;
