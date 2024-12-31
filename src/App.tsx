import Tab from './components/Tab/tab';
import TabItem from './components/Tab/tabItem';

export default function App() {
  return (
    <div>
      <Tab defaultIndex={0} onSelect={_index => {}} type="card">
        <TabItem label="abcabc">123</TabItem>
        <TabItem label="bcdbcd" disabled>
          456
        </TabItem>
        <TabItem label="cdecde">789</TabItem>
      </Tab>
    </div>
  );
}
