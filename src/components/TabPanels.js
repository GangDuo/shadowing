import React from 'react';
import PropTypes from 'prop-types';

export default function TabPanels(props) {
  const { children, value } = props;
  const childrenWithProps = React.Children.map(
    children,
    (child, i) => {
      return React.cloneElement(child, {
        index: i,
        isActive: (value === i),
      });
    },
  );

  return (
  <div className="TabPanels-root">{childrenWithProps}</div>
  )
}

TabPanels.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  value: PropTypes.number,
};

TabPanels.defaultProps = {
  value: 0,
};