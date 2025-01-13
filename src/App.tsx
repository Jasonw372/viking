import { useState } from 'react';
import Button from './components/Button';
import Icon from './components/Icon';
import Transition from './components/Transition';

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          setShow(!show);
        }}
      >
        Click Me
      </Button>
      <Transition in={show} animation="zoom-in-top" timeout={300}>
        <div>
          <Icon icon="coffee" size="10x" theme="primary" />
          <Icon icon="arrow-down" size="10x" theme="dark" />
        </div>
      </Transition>
    </div>
  );
}
