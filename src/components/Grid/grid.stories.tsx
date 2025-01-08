import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Row, Col } from './grid';
import './_styles.scss';

const meta = {
  title: 'Components/Grid',
  component: Row,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: '800px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

const boxStyle: React.CSSProperties = {
  backgroundColor: '#0092ff',
  padding: '8px 0',
  textAlign: 'center',
  color: '#fff',
};

const lightBoxStyle: React.CSSProperties = {
  backgroundColor: '#69c0ff',
  padding: '8px 0',
  textAlign: 'center',
  color: '#fff',
};

// 基础栅格
export const Basic: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <Row>
        <Col span={24}>
          <div style={boxStyle}>col-24</div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div style={boxStyle}>col-12</div>
        </Col>
        <Col span={12}>
          <div style={lightBoxStyle}>col-12</div>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <div style={boxStyle}>col-8</div>
        </Col>
        <Col span={8}>
          <div style={lightBoxStyle}>col-8</div>
        </Col>
        <Col span={8}>
          <div style={boxStyle}>col-8</div>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <div style={boxStyle}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={lightBoxStyle}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={boxStyle}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={lightBoxStyle}>col-6</div>
        </Col>
      </Row>
    </div>
  ),
};

// 区块间隔
export const Gutter: Story = {
  render: () => (
    <div
      style={{
        width: '100%',
        background: '#f5f5f5',
        padding: '10px',
      }}
    >
      <h5>gutter: [16, 0]</h5>
      <Row gutter={[16, 0]}>
        {[...Array(12)].map((_, index) => (
          <Col key={index} span={6}>
            <div style={index % 2 ? lightBoxStyle : boxStyle}>col-6</div>
          </Col>
        ))}
      </Row>

      <h5>gutter: [16, 24]</h5>
      <Row gutter={[16, 24]}>
        {[...Array(8)].map((_, index) => (
          <Col key={index} span={6}>
            <div style={index % 2 ? lightBoxStyle : boxStyle}>col-6</div>
          </Col>
        ))}
      </Row>
    </div>
  ),
};

// 偏移
export const Offset: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <Row>
        <Col span={8}>
          <div style={boxStyle}>col-8</div>
        </Col>
        <Col span={8} offset={8}>
          <div style={boxStyle}>col-8 offset-8</div>
        </Col>
      </Row>
      <Row>
        {[6, 6].map((span, index) => (
          <Col key={index} span={span} offset={6}>
            <div style={boxStyle}>col-6 offset-6</div>
          </Col>
        ))}
      </Row>
    </div>
  ),
};

// 对齐方式
export const Alignment: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <Row justify="start">
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '16px' }}>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
      </Row>
      <Row justify="end" style={{ marginTop: '16px' }}>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
      </Row>
      <Row justify="space-between" style={{ marginTop: '16px' }}>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
      </Row>
      <Row justify="space-around" style={{ marginTop: '16px' }}>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={boxStyle}>col-4</div>
        </Col>
      </Row>
    </div>
  ),
};

// 响应式布局
export const Responsive: Story = {
  render: () => (
    <Row>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <div style={boxStyle}>Col</div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <div style={lightBoxStyle}>Col</div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <div style={boxStyle}>Col</div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <div style={lightBoxStyle}>Col</div>
      </Col>
    </Row>
  ),
};
