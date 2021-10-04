import PropTypes from "prop-types";
import styles from "./Transaction.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
        ;
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;

/* Данные для списка доступны в формате JSON в файле transactions.json. 
Это массив объектов, каждый объект описывает одну транзакцию со следующими свойствами:
id — уникальный идентификатор транзакции
type — тип транзакции
amount - сумма транзакции
currency - тип валюты
Описание компонента
Необходимо создать компонент <TransactionHistory> принимающий один проп items - массив 
объектов транзакций из transactions.json. Компонент создает разметку таблицы. 
Каждая транзакция это строка таблицы. В примере приведена разметка двух транзакций. */
