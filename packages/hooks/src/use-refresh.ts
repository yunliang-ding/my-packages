import { useCallback, useState } from "react";

export default () => {
  const [, setState] = useState({});
  return useCallback(() => setState({}), []);
};
