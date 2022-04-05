import PropTypes from 'prop-types';
import {
    TransactionsTable,
    TableHead,
    TableRow,
    TableColumnName,
    TableBody,
    TableData
} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => { 
    return (
        <TransactionsTable>
        <TableHead>
            <TableRow>
            <TableColumnName>Type</TableColumnName>
            <TableColumnName>Amount</TableColumnName>
            <TableColumnName>Currency</TableColumnName>
            </TableRow>
        </TableHead>
        <TableBody>
            {items.map(({ id, type, amount, currency }) => (
                <TableRow key={id}>
                    <TableData>{type}</TableData>
                    <TableData>{amount}</TableData>
                    <TableData>{currency}</TableData>
                </TableRow>
            ))}
        </TableBody>
        </TransactionsTable>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })),
};