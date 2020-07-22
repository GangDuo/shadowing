import React, { useState } from 'react';
import { ListItem, ListItemText, ListItemIcon, Checkbox, IconButton } from '@material-ui/core';
import { FixedSizeList } from 'react-window';
import { TrashSign, CircleSign } from './app-icons';

const NUMBER_OF_ROWS = 7

const Row = ({ index, style, data }) => {
  const { histories, selectedIndex, setSelectedIndex, onChange, toggleItemRemove } = data;
  const handleClick = _ => {
    setSelectedIndex(index)
    histories[index] && onChange && onChange({target:{value: histories[index].sentence}})
  }
  const handleChange = e => {
    const checked = e.target.checked
    toggleItemRemove && toggleItemRemove({checked, index})
  }

  return (
    <ListItem button style={style} key={index} selected={selectedIndex === index} onClick={handleClick}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={!!histories[index].willRemove}
          icon={<CircleSign color="#1976d2" />}
          disableRipple
          onChange={handleChange}
        />
      </ListItemIcon>
      <ListItemText primary={histories[index].sentence} />
    </ListItem>
  )
}

export default function StackHistory(props) {
  const { title, histories, onChange, size, onRemove, toggleItemRemove } = props
  const [selectedIndex, setSelectedIndex] = useState(null)

  return (
    <div>
      <div className="stack-history-header">
        <span>
          {(histories.filter(x => x.willRemove).length > 0) &&
            <IconButton onClick={onRemove}><TrashSign /></IconButton>
          }
        </span>
        <p>{title}</p>
      </div>

      <FixedSizeList
        height={size * NUMBER_OF_ROWS}
        itemCount={histories.length}
        itemSize={size}
        width={"100%"}
        itemData={{histories, selectedIndex, setSelectedIndex, onChange, toggleItemRemove}}
      >
        {Row}
      </FixedSizeList>
      <style jsx>{`
      .stack-history-header { position: relative; }
      .stack-history-header span {
        position: absolute;
        right: 10px;
      }
      `}</style>
    </div>
  )
}

StackHistory.defaultProps = {
  title: '履歴',
  size: 35,
};