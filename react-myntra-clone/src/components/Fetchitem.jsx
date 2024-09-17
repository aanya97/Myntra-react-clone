import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import itemSlice from "../store/itemSlice";
import { fetchstatusAction } from "../store/fetchStatusSlice";

const Fetchitem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchstatusAction.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchstatusAction.markFetchingDone());
        dispatch(fetchstatusAction.markFetchingFinished());
        dispatch(itemSlice.actions.addInitialitem(items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};
export default Fetchitem;
