import React from 'react';
import css from 'styled-jsx/css'
const styles = css`
label input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
label .icon {
  position: relative;
  width: 48px;
  height: 48px;
  background: #18191f;
  color: #555;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
  box-shadow:
  -1px 1px 4px rgba(255,255,255, 0.05),
  4px 4px 6px rgba(0,0,0, 0.2),
  inset 1px 1px 4px rgba(255,255,255, 0.05),
  inset 1px 1px 1px rgba(0,0,0, 1);
  overflow: hidden;
  border-radius: 10px;
}

label input[type="checkbox"]:checked ~ .icon {
  color: #00f3ff;
  /*text-shadow: 0 0 15px #00f3ff,
  0 0 25px #00f3ff;
  animation: colors 5s linear infinite;*/
}
`

export default function ToggleButton(props) {
  const { children, ...others } = props

  return (
    <>
      <label>
        <input type="checkbox" {...others} />
        <div className="icon">
          {children}
        </div>
      </label>
      <style jsx>{styles}</style>
    </>
  )
}