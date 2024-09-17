import { useSelector } from "react-redux";
const BagSummary = ({}) => {
  const bagItemID = useSelector((store) => store.bag);
  const HomeItem = useSelector((store) => store.items);
  const finalItem = HomeItem.filter((item) => {
    const itemIndex = bagItemID.indexOf(item.id);
    return itemIndex >= 0;
  });

  let totalMRP = 0;
  let totalDiscount = 0;

  finalItem.map((item) => {
    (totalMRP += item.original_price),
      (totalDiscount += item.original_price - item.current_price);
  });
  let finalPayment = totalMRP - totalDiscount + 99;
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagItemID.length} Items)
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">Rs {totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -Rs {totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">Rs 99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">Rs {finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};
export default BagSummary;
