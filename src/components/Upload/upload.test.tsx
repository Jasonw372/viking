import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import type { UploadProps } from './upload';
import Upload from './index';
import type { Mocked } from 'vitest';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

vitest.mock('../Icon/icon', () => {
  return {
    default: ({ icon, onClick }: { icon: React.ReactNode; onClick?: () => void }) => {
      return <span onClick={onClick}>{icon}</span>;
    },
  };
});

vitest.mock('axios');

const mockedAxios = axios as Mocked<typeof axios>;

describe('Upload component', () => {
  const testProps: UploadProps = {
    action: 'test.com',
    onSuccess: vitest.fn(),
    onError: vitest.fn(),
    onProgress: vitest.fn(),
    onChange: vitest.fn(),
    onRemove: vitest.fn(),
    drag: false,
  };

  const testFile = new File(['test'], 'test.png', { type: 'image/png' });

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('should render upload component correctly', () => {
    render(
      <Upload {...testProps}>
        <button>Click to Upload</button>
      </Upload>,
    );
    expect(screen.getByText('Click to Upload')).toBeInTheDocument();
    expect(screen.getByTestId('upload-input')).toBeInTheDocument();
  });

  it('should upload file when file is selected', async () => {
    mockedAxios.post.mockResolvedValueOnce({ data: 'success' });
    const { container } = render(
      <Upload {...testProps}>
        <button>Click to Upload</button>
      </Upload>,
    );

    const fileInput = container.querySelector('.file-input') as HTMLInputElement;
    expect(fileInput).toBeInTheDocument();

    // Simulate file selection
    fireEvent.change(fileInput, { target: { files: [testFile] } });

    // Check if file appears in the list
    await waitFor(() => {
      expect(screen.getByText('test.png')).toBeInTheDocument();
    });

    // Verify axios was called correctly
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(testProps.onSuccess).toHaveBeenCalled();
    expect(testProps.onChange).toHaveBeenCalled();
  });

  it('should show error when upload fails', async () => {
    mockedAxios.post.mockRejectedValueOnce({ message: 'Upload failed' });
    const { container } = render(
      <Upload {...testProps}>
        <button>Click to Upload</button>
      </Upload>,
    );

    const fileInput = container.querySelector('.file-input') as HTMLInputElement;
    fireEvent.change(fileInput, { target: { files: [testFile] } });

    await waitFor(() => {
      expect(testProps.onError).toHaveBeenCalled();
      expect(screen.getByText('test.png')).toBeInTheDocument();
      const fileNameElement = screen.getByText('test.png').closest('.file-name');
      expect(fileNameElement).toHaveClass('file-name-error');
    });
  });

  it('should remove file when remove button is clicked', async () => {
    mockedAxios.post.mockResolvedValueOnce({ data: 'success' });
    const wrapper = render(
      <Upload {...testProps}>
        <button>Click to Upload</button>
      </Upload>,
    );

    const fileInput = wrapper.container.querySelector('.file-input') as HTMLInputElement;
    fireEvent.change(fileInput, { target: { files: [testFile] } });

    await waitFor(() => {
      expect(screen.getByText('test.png')).toBeInTheDocument();
    });
    // Click remove button
    const icon = wrapper.getByText('times');
    fireEvent.click(icon);
    expect(wrapper.queryByText('test.png')).not.toBeInTheDocument();
    expect(testProps.onRemove).toHaveBeenCalled();
    expect(testProps.onRemove).toBeCalledWith(
      expect.objectContaining({ name: 'test.png', status: 'success', raw: testFile }),
    );
  });

  it('should handle beforeUpload hook correctly', async () => {
    const beforeUpload = vitest.fn().mockImplementation(() => {
      return false;
    });
    const props: UploadProps = {
      ...testProps,
      beforeUpload,
    };
    const { container } = render(
      <Upload {...props}>
        <button>Click to Upload</button>
      </Upload>,
    );

    const fileInput = container.querySelector('.file-input') as HTMLInputElement;
    fireEvent.change(fileInput, { target: { files: [testFile] } });

    expect(beforeUpload).toHaveBeenCalledWith(testFile);
    await waitFor(() => {
      expect(mockedAxios.post).not.toHaveBeenCalled();
    });
  });

  it('should support drag and drop upload', async () => {
    mockedAxios.post.mockResolvedValueOnce({ data: 'success' });
    const dragProps: UploadProps = {
      ...testProps,
      drag: true,
    };
    render(
      <Upload {...dragProps}>
        <div>Drag files here</div>
      </Upload>,
    );

    const uploadArea = screen.getByText('Drag files here').closest('.uploader-dragger');
    expect(uploadArea).toBeInTheDocument();
    expect(uploadArea).toHaveClass('uploader-dragger');

    // Simulate drag events
    fireEvent.dragOver(uploadArea!);
    expect(uploadArea).toHaveClass('is-dragover');

    fireEvent.dragLeave(uploadArea!);
    expect(uploadArea).not.toHaveClass('is-dragover');

    // Simulate drop
    fireEvent.drop(uploadArea!, {
      dataTransfer: {
        files: [testFile],
      },
    });

    await waitFor(() => {
      expect(screen.getByText('test.png')).toBeInTheDocument();
      expect(mockedAxios.post).toHaveBeenCalled();
    });
  });
});
