import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

export default function App() {
  return (
    <Menu defaultIndex="0" onSelect={_index => {}} mode="vertical">
      <MenuItem>123</MenuItem>
      <MenuItem>123</MenuItem>
      <MenuItem>123</MenuItem>
    </Menu>
  );
}
