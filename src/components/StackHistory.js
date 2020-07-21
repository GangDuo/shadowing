import React from 'react';

export default function StackHistory(props) {
  const { title, histories, onChange, size } = props

  return (
    <div>
      <label htmlFor="histories">{title}</label>
      <select id="histories" size={size}
              onChange={e => {e.target.value && onChange && onChange(e)}}>
        {histories.map((x, i) => <option key={i} value={x}>{x}</option>)}
      </select>

      <style jsx>{`
      label {display: block;}
      #histories {width: 80%;}
      `}</style>
    </div>
  )
}

StackHistory.defaultProps = {
  title: '履歴',
  size: 5,
};