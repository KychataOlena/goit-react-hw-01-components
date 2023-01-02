import PropTypes from 'prop-types';

import {
  TableHistory,
  TableHead,
  TableTitle,
  TableText,
  TableValue,
  TableRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableHistory>
      <TableHead>
        <TableTitle>
          <TableText>Type</TableText>
          <TableText>Amount</TableText>
          <TableText>Currency</TableText>
        </TableTitle>
      </TableHead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id} id={id}>
            <TableValue>{type}</TableValue>
            <TableValue>{amount}</TableValue>
            <TableValue>{currency}</TableValue>
          </TableRow>
        ))}
      </tbody>
    </TableHistory>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.objectOf({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
