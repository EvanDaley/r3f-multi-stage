// HTMLContent.js
// Throw all the raw HTML content here. This is all rendered outside the context of the canvas,
// so don't try to do anything fancy with Three.js.

import Menu from './Menu'
import useStore from '../../store'

function Navigation() {
  const selectScene0 = useStore(state => state.selectScene0)
  const selectScene1 = useStore(state => state.selectScene1)
  const selectScene2 = useStore(state => state.selectScene2)
  const selectScene3 = useStore(state => state.selectScene3)

  return (
    <>
      <div className='button-overlay'>
        <div className='flex-container' style={{justifyContent: "space-around"}}>
          <button className="btn" onClick={selectScene0}>frontend</button>
          <button className="btn" onClick={selectScene1}>backend</button>
          <button className="btn" onClick={selectScene2}>analytics</button>
          <button className="btn" onClick={selectScene3}>dev ops</button>
        </div>
      </div>
    </>
  )
}

export default function HTMLContent() {
  return (
    <div className="html-content-container">
      {/* <Menu /> */}
      <Navigation></Navigation>
    </div>
  )
}