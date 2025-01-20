import Upload from './index';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import type { UploadFile } from './upload';
import Button from '../Button';
import Icon from '../Icon';
import Flex from '../Flex';

const meta = {
  title: 'Components/Upload',
  component: Upload,
  parameters: {
    docs: {
      description: {
        component: '文件上传组件，支持拖拽上传。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Upload>;

export default meta;

type Story = StoryObj<typeof meta>;

const checkFileSize = (file: File) => {
  action('beforeUpload')(file);
  if (Math.round(file.size / 1024) > 50) {
    alert('文件太大');
    return false;
  }
  return true;
};

const renameFile = (file: File) => {
  action('beforeUpload')(file);
  const newFile = new File([file], `new_${file.name}`, { type: file.type });
  return Promise.resolve(newFile);
};

const defaultFileList: Array<UploadFile> = [
  {
    uid: '123',
    size: 1234,
    name: 'hello.md',
    status: 'uploading',
    percent: 40,
  },
  {
    uid: '124',
    size: 1234,
    name: 'hello.md',
    status: 'success',
    percent: 100,
  },
  {
    uid: '125',
    size: 1234,
    name: 'hello.md',
    status: 'error',
    percent: 0,
  },
];
export const DefaultUpload: Story = {
  name: '默认上传',
  args: {
    action: 'https://jsonplaceholder.typicode.com/posts/',
    defaultFileList,
    onSuccess: action('onSuccess'),
    onError: action('onError'),
    onProgress: action('onProgress'),
    beforeUpload: checkFileSize,
    onRemove: action('onRemove'),
  },
  render: args => (
    <Upload {...args}>
      <Button>上传文件</Button>
    </Upload>
  ),
};

export const MultipleUpload: Story = {
  name: '多选上传',
  args: {
    action: 'https://jsonplaceholder.typicode.com/posts/',
    onSuccess: action('onSuccess'),
    onError: action('onError'),
    onProgress: action('onProgress'),
    beforeUpload: renameFile,
    multiple: true,
    accept: '.jpg,.png,.jpeg,.txt',
  },
  render: args => (
    <Upload {...args}>
      <Button>多选上传</Button>
    </Upload>
  ),
};

export const DragUpload: Story = {
  name: '拖拽默认上传',
  args: {
    action: 'https://jsonplaceholder.typicode.com/posts/',
    defaultFileList,
    drag: true,
    onSuccess: action('onSuccess'),
    onError: action('onError'),
    onProgress: action('onProgress'),
    beforeUpload: checkFileSize,
    onRemove: action('onRemove'),
  },
  render: args => (
    <Upload {...args}>
      <Flex
        vertical
        justify="center"
        align="center"
        style={{
          height: '100%',
        }}
      >
        <Icon icon={'plus'} size="2x" theme="secondary" />
      </Flex>
    </Upload>
  ),
};
