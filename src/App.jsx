import './App.css'
import BtnGroup from './btnGroup'
import OutlineGroup from './outlineGroup'
import TextGroup from './textGroup'
import DisableShadowGroup from './disableShadow'
import DisabledGroup from './disabledGroup'
import IconGroup from './iconGroup'
import SizeGroup from './sizeGroup'
import ColorGroup from './colorGroup'
import Main from './mainComponent'
import Aside from './asideComponent'

function App() {

  return (
    <div className="App">
      <Main>
        <BtnGroup />
        <OutlineGroup />
        <TextGroup />
        <DisableShadowGroup />
        <DisabledGroup />
        <IconGroup />
        <SizeGroup />
        <ColorGroup />
      </Main>
      <Aside />
    </div>
  )
}

export default App
