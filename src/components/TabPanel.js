import React from 'react';
import PropTypes from 'prop-types';

export default function TabPanel(props) {
  const { children, index, isActive, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={!isActive}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
};
