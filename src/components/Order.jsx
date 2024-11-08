const Order = ({ openHour, closeHour }) => {
  return (
    <div className="order">
      <p>
        We&apos;re open from {openHour}:00 until {closeHour}:00. Come visit us
        or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;
