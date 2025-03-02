import { render } from '@testing-library/react';
import Grid from './index';
const { Row, Col } = Grid;

import { describe, expect, test, vi } from 'vitest';

describe('Grid Component', () => {
  describe('Row', () => {
    test('renders basic row correctly', () => {
      const { container } = render(<Row>Row Content</Row>);
      expect(container.firstChild).toHaveClass('el-row');
    });

    test('renders with different justify values', () => {
      const justifyValues = ['start', 'end', 'center', 'space-around', 'space-between'] as const;
      justifyValues.forEach(justify => {
        const { container } = render(<Row justify={justify}>Content</Row>);
        expect(container.firstChild).toHaveClass(`is-justify-${justify}`);
      });
    });

    test('renders with different align values', () => {
      const alignValues = ['top', 'middle', 'bottom'] as const;
      alignValues.forEach(align => {
        const { container } = render(<Row align={align}>Content</Row>);
        expect(container.firstChild).toHaveClass(`is-align-${align}`);
      });
    });

    test('renders with number gutter', () => {
      const { container } = render(
        <Row gutter={16}>
          <div>Content</div>
        </Row>,
      );

      expect(container.firstChild).toHaveStyle({
        marginLeft: '-8px',
        marginRight: '-8px',
      });
    });

    test('renders with array gutter', () => {
      const { container } = render(<Row gutter={[16, 24]}>Content</Row>);
      expect(container.firstChild).toHaveStyle({
        marginLeft: '-8px',
        marginRight: '-8px',
        rowGap: '24px',
      });
    });

    test('renders with array gutter and applies padding to children', () => {
      const { container } = render(
        <Row gutter={[16, 24]}>
          <Col span={12}>Content</Col>
          <Col span={12}>Content</Col>
        </Row>,
      );

      const cols = container.getElementsByClassName('el-col');
      Array.from(cols).forEach(col => {
        expect(col).toHaveStyle({
          paddingLeft: '8px',
          paddingRight: '8px',
        });
      });
    });
  });

  describe('Col', () => {
    test('renders basic col correctly', () => {
      const { container } = render(<Col>Col Content</Col>);
      expect(container.firstChild).toHaveClass('el-col');
    });

    test('renders with span', () => {
      const { container } = render(<Col span={12}>Content</Col>);
      expect(container.firstChild).toHaveClass('el-col-12');
    });

    test('renders with an error span', () => {
      const consoleWarn = vi.spyOn(console, 'warn');
      render(<Col span={-1}>Content</Col>);
      expect(consoleWarn).toHaveBeenCalled();
    });

    test('renders with offset', () => {
      const { container } = render(<Col offset={4}>Content</Col>);
      expect(container.firstChild).toHaveClass('el-col-offset-4');
    });

    test('renders with an error offset', () => {
      const consoleWarn = vi.spyOn(console, 'warn');
      render(<Col offset={25}>Content</Col>);
      expect(consoleWarn).toHaveBeenCalled();
    });

    test('renders with pull and push', () => {
      const { container } = render(
        <Col pull={3} push={2}>
          Content
        </Col>,
      );
      expect(container.firstChild).toHaveClass('el-col-pull-3', 'el-col-push-2');
    });

    test('renders with responsive props', () => {
      const { container } = render(
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
          Content
        </Col>,
      );

      expect(container.firstChild).toHaveClass(
        'el-col-xs-2',
        'el-col-sm-4',
        'el-col-md-6',
        'el-col-lg-8',
        'el-col-xl-10',
      );
    });

    test('renders with responsive object props', () => {
      const { container } = render(
        <Col xs={{ span: 4, offset: 2 }} md={{ span: 8, offset: 4 }}>
          Content
        </Col>,
      );

      expect(container.firstChild).toHaveClass(
        'el-col-xs-4',
        'el-col-xs-offset-2',
        'el-col-md-8',
        'el-col-md-offset-4',
      );
    });

    test('renders row with nested columns', () => {
      const { container } = render(
        <Row>
          <Col span={12}>
            <Row>
              <Col span={6}>Nested Col</Col>
              <Col span={6}>Nested Col</Col>
            </Row>
          </Col>
          <Col span={12}>Col</Col>
        </Row>,
      );

      const row = container.firstChild;
      expect(row).toHaveClass('el-row');
      expect(row?.childNodes.length).toBe(2);
      expect(row?.firstChild).toHaveClass('el-col-12');
    });
  });
});
