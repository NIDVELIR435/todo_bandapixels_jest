import React, { useState } from "react";
import { Button } from "antd";

export const ButtonSearch = (): JSX.Element => {
  const [showSearchScreen, setShowSearchScreen] = useState(false);
  const visibleStat = (param: boolean) => setShowSearchScreen(param);

  return (
    <>
      <Button tabIndex={2} onClick={() => visibleStat(true)}>
        Press to search
      </Button>
    </>
  );
};
