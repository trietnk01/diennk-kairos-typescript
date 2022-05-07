import { loadingSlice } from "slices/loadingSlice";
function loadingAction() {
  const { showLoading, hideLoading } = loadingSlice.actions;
  return { showLoading, hideLoading };
}

export default loadingAction;
