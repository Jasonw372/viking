import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

export default function App() {
  return (
    <div>
      <Menu defaultIndex="0" onSelect={_index => {}} mode="vertical">
        <MenuItem>123</MenuItem>
        <MenuItem>123</MenuItem>
        <MenuItem>123</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
        </SubMenu>
      </Menu>

      <Menu defaultIndex="0" onSelect={_index => {}} mode="horizontal">
        <MenuItem>123</MenuItem>
        <MenuItem>123</MenuItem>
        <MenuItem>123</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}
