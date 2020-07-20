import css from 'styled-jsx/css'
const styles = css`
.app {
  text-align: center;
}

#results {
  font-size: 14px;
  font-weight: bold;
  border: 1px solid #ddd;
  padding: 15px;
  text-align: left;
  min-height: 100px;
}

.recognition {position: relative;}

.tools {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
}

.qa {margin: 10px auto;}
.text-left {text-align: left;}
.footer a {
  cursor: pointer;
  color: black;
  text-decoration: none;
}
`

export default styles