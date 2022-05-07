import { RootState } from "redux/store";

function loadingSelector() {
  const isShow = (state: RootState) => state.loading.isShow;
  return { isShow };
}
export default loadingSelector;
