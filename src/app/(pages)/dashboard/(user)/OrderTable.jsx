
const OrderTable = () => {
  const orders = [
    { id: '#SK2540', name: 'Neal Matthews', date: '22 Apr, 2024', total: '$450', status: 'Paid', method: 'Mastercard' },
    { id: '#SK2546', name: 'Nishita', date: '11 Apr, 2024', total: '$7800', status: 'Paid', method: 'Mastercard' },
    { id: '#SK2599', name: 'Sumon Biswas', date: '15 Apr, 2024', total: '$470', status: 'Paid', method: 'Paypal' }
  ];

  return (
    <div className="order-table">
      <h2 className="t-title">Payment & order history</h2>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Order ID</th>
            <th>Billing Name</th>
            <th>Date</th>
            <th>Total</th>
            <th>Payment Status</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td><input type="checkbox" /></td>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
              <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td>
              <td>{order.method}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
