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

  const MenuToggle = (e) => {
    const aside = document.querySelector('.aside');
    aside.classList.toggle('slide');
    aside.firstElementChild.classList.toggle('aside-main')
  }

  return (
    <div className="container">
      <nav className='nav'>
        <button 
          onClick={MenuToggle}
          className="menu-icon">
          menu
        </button>
      </nav>

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
    </div>
  )
}

export default App
