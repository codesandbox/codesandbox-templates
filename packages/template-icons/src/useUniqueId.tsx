import { useMemo } from "react";

let counter = 0;

export const useUniqueId = () => useMemo(() => counter++, []);
