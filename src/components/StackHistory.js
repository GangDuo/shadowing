import React, { useState } from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { FixedSizeList } from 'react-window';

const NUMBER_OF_ROWS = 7

const Row = ({ index, style, data }) => {
  const { histories, selectedIndex, setSelectedIndex, onChange } = data;
  const handleClick = _ => {
    setSelectedIndex(index)
    histories[index] && onChange && onChange({target:{value: histories[index]}})
  }

  return (
    <ListItem button style={style} key={index} selected={selectedIndex === index} onClick={handleClick}>
        <ListItemText primary={histories[index]} />
    </ListItem>
  )
}

export default function StackHistory(props) {
  const { title, histories, onChange, size } = props
  const [selectedIndex, setSelectedIndex] = useState(null)

  return (
    <div>
      <p>{title}</p>
      <FixedSizeList
        height={size * NUMBER_OF_ROWS}
        itemCount={histories.length}
        itemSize={size}
        width={"100%"}
        itemData={{histories, selectedIndex, setSelectedIndex, onChange}}
      >
        {Row}
      </FixedSizeList>
    </div>
  )
}

StackHistory.defaultProps = {
  title: '履歴',
  size: 35,
};