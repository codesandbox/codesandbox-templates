import { useMemo } from "react";

let counter = 0;

const useUniqueId = () => {
  return useMemo(() => counter++, []);
};

export default useUniqueId;
