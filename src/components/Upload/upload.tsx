import React, { useRef, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { UploadList } from './uploadList';
import Dragger from './dragger';

// 上传状态
export type UploadStatus = 'ready' | 'uploading' | 'success' | 'error';

// 上传文件类型
export interface UploadFile {
  uid: string; // 文件唯一标识
  size: number; // 文件大小
  name: string; // 文件名
  status?: UploadStatus; // 文件状态
  percent?: number; // 上传进度
  raw?: File; // 原始文件
  response?: any; // 上传成功的响应
  error?: Error; // 上传失败的错误
}

export interface UploadProps {
  action: string; // 上传的地址
  drag?: boolean; // 是否支持拖拽上传
  name?: string; // 发到后台的文件参数名
  defaultFileList?: UploadFile[]; // 默认文件列表
  headers?: { [key: string]: any }; // 请求头
  withCredentials?: boolean; // 是否携带 cookie
  data?: { [key: string]: any }; // 上传所需额外参数
  accept?: string; // 接受上传的文件类型
  multiple?: boolean; // 是否支持多选文件
  beforeUpload?: (file: File) => boolean | Promise<File>; // 上传前的钩子函数
  onProgress?: (percentage: number, file: UploadFile) => void; // 上传进度的钩子函数
  onSuccess?: (data: any, file: UploadFile) => void; // 上传成功的钩子函数
  onError?: (err: Error, file: UploadFile) => void; // 上传失败的钩子函数
  onChange?: (file: UploadFile) => void; // 上传文件改变的钩子函数
  onRemove?: (file: UploadFile) => void; // 移除文件的钩子函数
}

export const Upload: React.FC<React.PropsWithChildren<UploadProps>> = props => {
  const {
    action,
    children,
    name,
    drag,
    defaultFileList,
    headers,
    withCredentials,
    data,
    accept = '*',
    multiple = false,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
  } = props;
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || []);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInput.current?.click();
  };

  const handleRemove = (file: UploadFile) => {
    setFileList(prev => {
      return prev.filter(item => item.uid !== file.uid);
    });
    if (onRemove) {
      onRemove(file);
    }
  };

  function uploadFiles(files: FileList) {
    const postFiles = Array.from(files);
    postFiles.forEach(file => {
      if (!beforeUpload) {
        post(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile);
          });
        } else if (result !== false) {
          post(file);
        }
      }
    });
  }

  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prev => {
      return prev.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
    });
  };

  const post = (file: File) => {
    const _file: UploadFile = {
      uid: uuidv4(),
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    setFileList(prev => {
      return [_file, ...prev];
    });
    const formData = new FormData();
    formData.append(name || 'file', file);
    if (data) {
      Object.keys(data).forEach((key: string) => {
        formData.append(key, data[key] as string | Blob);
      });
    }
    axios
      .post(action, formData, {
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data',
        },
        withCredentials,
        onUploadProgress: e => {
          if (e.total && onProgress) {
            const percent = Math.round((e.loaded * 100) / e.total) || 0;
            updateFileList(_file, {
              percent,
              status: 'uploading',
            });

            _file.percent = percent;
            _file.status = 'uploading';

            onProgress(percent, _file);
          }
        },
      })
      .then(res => {
        updateFileList(_file, {
          status: 'success',
          response: res.data,
        });

        _file.status = 'success';
        _file.response = res.data;

        if (onChange) {
          onChange(_file);
        }
        if (onSuccess) {
          onSuccess(res.data, _file);
        }
      })
      .catch(err => {
        updateFileList(_file, {
          status: 'error',
          error: err,
        });

        _file.status = 'error';
        _file.error = err;

        if (onChange) {
          onChange(_file);
        }
        if (onError) {
          onError(err, _file);
        }
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    uploadFiles(files);

    if (fileInput.current) {
      fileInput.current.value = '';
    }
  };

  return (
    <div className="upload-component">
      <div className="upload-input" data-testid="upload-input" onClick={handleClick}>
        {drag ? (
          <Dragger
            onFile={file => {
              uploadFiles(file);
            }}
          >
            {children}
          </Dragger>
        ) : (
          children
        )}
      </div>
      <input
        className="file-input"
        accept={accept}
        multiple={multiple}
        style={{
          display: 'none',
        }}
        type="file"
        ref={fileInput}
        onChange={handleChange}
      />
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  );
};

export default Upload;
