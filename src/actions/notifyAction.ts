import { notifySlice } from "slices/notifySlice";

function notifyAction() {
  const { showNotify, hideNotify } = notifySlice.actions;
  return { showNotify, hideNotify };
}

export default notifyAction;
