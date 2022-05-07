import { RootState } from "./store";
const isShowLoading = (state: RootState) => state.loading.isShow;
export default { isShowLoading };
