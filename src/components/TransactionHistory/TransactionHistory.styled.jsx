import styled from '@emotion/styled';

export const TableHistory = styled.table`
  border: 1px solid black;
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  border: 1px solid #ddd;
  padding: 8px;
  width: 100%;
`;

export const TableTitle = styled.tr`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
`;
export const TableRow = styled.tr`
  &:nth-child(2n) {
    background-color: #f2f2f2;
  }
`;

export const TableText = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
`;
export const TableValue = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;
