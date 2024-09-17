import { useSelector } from "react-redux";
import Bagitem from "./Bagitem";
import BagSummary from "./BagSummary";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const HomeItem = useSelector((store) => store.items);
  const finalItem = HomeItem.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      {" "}
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItem.map((item) => (
              <Bagitem key={item.id} item={item}>
                {" "}
              </Bagitem>
            ))}
          </div>
          <BagSummary></BagSummary>
        </div>
      </main>
    </>
  );
};
export default Bag;
