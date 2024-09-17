import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";
import { IoAddCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
const Homeitem = ({ item }) => {
  const bag = useSelector((store) => store.bag);
  const dispatch = useDispatch();
  const elementFound = bag.indexOf(item.id) >= 0;

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="image" />

        <div className="rating">
          {item.rating.stars}⭐ | {item.rating.count}{" "}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs.{item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {elementFound ? (
          <button
            type="button"
            className="  btn-add-bag btn btn-danger"
            onClick={() => dispatch(bagAction.removeFromBag(item.id))}
          >
            <MdDelete />
            Remove
          </button>
        ) : (
          <button
            type="button"
            className=" btn-add-bag btn btn-success"
            onClick={() => dispatch(bagAction.addBagitem(item.id))}
          >
            <IoAddCircle />
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
};
export default Homeitem;
