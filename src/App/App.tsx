import React, {useState} from 'react';
import './App.scss'
import Button from '../Button/Button';
import DropDown from '../DropDown/DropDown';


function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [type, setType] = useState<string>('primary');
  const [min, setMin] = useState<boolean>(false);
  const [large, setLarge] = useState<boolean>(false);
  const [block, setBlock] = useState<boolean>(false);
  const [outlined, setOutlined] = useState<boolean>(false);
  const [text, setText] = useState<boolean>(false);

  return (
    <div className='app'>
      <div className='app__body'>
        <div className='app__panel'>
          <h1 className='app__header'>Choose effect</h1>
          <div className='app__buttons'>
            <Button className='app__button' click={() => setLoading(!loading)}>LOADING</Button>
            <Button className='app__button' click={() => setDisabled(!disabled)}>DISABLED</Button>
            <DropDown className='app__button' array={['primary', 'danger', 'success', 'warning']} callBack={setType}>TYPE</DropDown>
            <Button className='app__button' click={() => setMin(!min)}>MIN</Button>
            <Button className='app__button' click={() => setLarge(!large)}>LARGE</Button>
            <Button className='app__button' click={() => setBlock(!block)}>BLOCK</Button>
            <Button className='app__button' click={() => setOutlined(!outlined)}>OUTLINED</Button>
            <Button className='app__button' click={() => setText(!text)}>TEXT</Button>
          </div>
        </div>
        <div className='app__example'>
          <Button
            disabled={disabled}
            loading={loading}
            type={type}
            min={min}
            large={large}
            block={block}
            outlined={outlined}
            text={text}
          >
            CLICK ME
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
