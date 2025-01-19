import classNames from 'classnames';
import { useState, type FC, type PropsWithChildren } from 'react';

export interface DraggerProps {
  onFile: (files: FileList) => void; // 拖拽上传文件的回调
}

const Dragger: FC<PropsWithChildren<DraggerProps>> = props => {
  const { onFile, children } = props;
  const [dragOver, setDragOver] = useState(false);
  const className = classNames('uploader-dragger', {
    'is-dragover': dragOver,
  });
  return (
    <div
      className={className}
      onDragOver={e => {
        setDragOver(true);
        e.preventDefault();
      }}
      onDragLeave={e => {
        setDragOver(false);
        e.preventDefault();
      }}
      onDrop={e => {
        setDragOver(false);
        e.preventDefault();
        onFile(e.dataTransfer.files); // 拖拽上传
      }}
    >
      {children}
    </div>
  );
};

export default Dragger;
