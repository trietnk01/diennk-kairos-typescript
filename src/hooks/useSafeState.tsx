import { useState, useCallback, useEffect, useRef } from "react";
const useMounted = () => {
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return mountedRef;
};

function useSafeState(initialSate: any) {
  const [state, setState] = useState(initialSate);
  const mountedRef = useMounted();
  const safeSetState = useCallback(
    (updater: any) => {
      if (mountedRef.current) {
        setState(updater);
      }
    },
    [mountedRef]
  );
  return [state, safeSetState];
}
export default useSafeState;
