import { Row, Col } from './grid';

export type IGridComponent = {
  Row: typeof Row;
  Col: typeof Col;
};

const TransGrid = {
  Row: Row,
  Col: Col,
} as IGridComponent;

export default TransGrid;

export { Row, Col };
