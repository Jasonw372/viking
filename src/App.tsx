import Button from './components/Button/button';
import './style.scss';

export default function App() {
  return (
    <div className="container">
      <h2>Basic Buttons</h2>
      <div className="box">
        <Button>Default</Button>
        <Button btnType="primary">Primary</Button>
        <Button btnType="danger">Danger</Button>
        <Button btnType="warning">Warning</Button>
        <Button btnType="success">Success</Button>
        <Button btnType="info">Info</Button>
      </div>

      <h2>Plain Buttons</h2>
      <div className="box">
        <Button plain>Default</Button>
        <Button btnType="primary" plain>Primary</Button>
        <Button btnType="danger" plain>Danger</Button>
        <Button btnType="warning" plain>Warning</Button>
        <Button btnType="success" plain>Success</Button>
        <Button btnType="info" plain>Info</Button>
      </div>

      <h2>Circle Buttons</h2> 
      <div className="box">
        <Button circle>Default</Button>
        <Button btnType="primary" circle>Primary</Button>
        <Button btnType="danger" circle>Danger</Button>
        <Button btnType="warning" circle>Warning</Button>
        <Button btnType="success" circle>Success</Button>
        <Button btnType="info" circle>Info</Button>
      </div>

      <h2>Different Sizes</h2>
      <div className="box">
        <Button>Default</Button>
        <Button btnType="primary" size="sm">Small</Button>
        <Button btnType="danger" size="lg">Large</Button>       
      </div>

      <h2>Disabled Buttons</h2>
      <div className="box">
        <Button disabled>Default</Button>
        <Button btnType="primary" size="sm" disabled>Primary</Button>
        <Button btnType="danger" size="lg" disabled>Danger</Button>         
      </div>

      <h2>Link Buttons</h2>
      <div className="box">
        <Button btnType="link" href="https://www.baidu.com">Link</Button>
        <Button btnType="link" href="https://www.baidu.com" disabled>Disabled Link</Button>
        <Button btnType="link" href="https://www.baidu.com" size="sm">Small Link</Button>
        <Button btnType="link" href="https://www.baidu.com" size="lg">Large Link</Button>
      </div>
    </div>
  );
}
