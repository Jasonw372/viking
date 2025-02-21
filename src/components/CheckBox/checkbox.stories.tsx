import { Meta, StoryObj } from '@storybook/react';
import { useRef, useState } from 'react';
import Flex from '../Flex';
import Button from '../Button';
import Checkbox from './index';
import { Col, Row } from '../Grid';
import { CheckboxRef } from './checkBox.tsx';

const meta: Meta<typeof Checkbox> = {
  title: 'components/Checkbox',
  component: Checkbox,
  parameters: {
    controls: { expanded: true },
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  name: '默认非受控',
  render: args => <Checkbox {...args} />,
  args: {
    defaultChecked: true,
    label: '默认非受控',
  },
};

export const Controlled: Story = {
  name: '受控组件',
  args: {
    label: '受控组件',
  },
  render: args => {
    const [checked, setChecked] = useState(true);
    const [disabled, setDisabled] = useState(false);

    const toggleChecked = () => {
      setChecked(!checked);
    };

    const toggleDisable = () => {
      setDisabled(!disabled);
    };
    const label = `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`;

    const change = (check: boolean) => {
      alert(`change：${check}`);
      setChecked(check);
    };
    return (
      <Flex direction="column" gap={15}>
        <Checkbox {...args} checked={checked} disabled={disabled} onChange={change}>
          {label}
        </Checkbox>
        <Flex gap={10}>
          <Button btnType="primary" size="sm" onClick={toggleChecked}>
            {!checked ? 'Check' : 'Uncheck'}
          </Button>
          <Button btnType="primary" size="sm" onClick={toggleDisable}>
            {!disabled ? 'Disable' : 'Enable'}
          </Button>
          <Button btnType="primary" size="sm" onClick={focus}>
            Focus
          </Button>
        </Flex>
      </Flex>
    );
  },
};

export const Ref: Story = {
  name: 'ref测试',
  render: _args => {
    const checkboxRef = useRef<CheckboxRef>(null);

    const handleFocus = () => {
      checkboxRef.current?.focus();
    };

    const handleBlur = () => {
      checkboxRef.current?.blur();
    };
    return (
      <Flex gap={15} direction="column">
        <Checkbox ref={checkboxRef} label="Checkbox" />
        <Flex gap={10}>
          <Button onClick={handleFocus} btnType={'primary'} size={'sm'}>
            Focus
          </Button>
          <Button onClick={handleBlur} btnType={'primary'} size={'sm'}>
            Blur
          </Button>
        </Flex>
      </Flex>
    );
  },
};

export const Groups: Story = {
  name: '选项组',
  render: _args => {
    const onChange = (checkedValues: Array<string | number>) => {
      console.log('checked = ', checkedValues);
    };

    const options = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' },
    ];

    const optionsWithDisabled = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', disabled: true },
    ];
    return (
      <>
        <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
        <br />
        <br />
        <Checkbox.Group
          options={optionsWithDisabled}
          defaultValue={['Apple']}
          onChange={onChange}
        />
        <br />
        <br />
        <Checkbox.Group disabled options={options} defaultValue={['Apple']} onChange={onChange} />
      </>
    );
  },
};

export const CustomStyle: Story = {
  name: '自定义选项组',
  render: _args => {
    return (
      <Checkbox.Group
        style={{
          width: '300px',
        }}
      >
        <Row>
          <Col span={8}>
            <Checkbox value="A">A</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="B">B</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="C">C</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="D">D</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="E">E</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    );
  },
};
