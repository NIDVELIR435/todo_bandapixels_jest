import React, { useState } from "react";
import { Button } from "antd";
import { SearchResultScreen } from "../SearchResultScreen/SearchResultScreen";

export const ButtonSearch = (): JSX.Element => {
  const [showSearchScreen, setShowSearchScreen] = useState(true);
  const visibleStat = (param: boolean) => setShowSearchScreen(param);

  return (
    <>
      <Button tabIndex={2} onClick={() => visibleStat(true)}>
        Press to search
      </Button>
      <SearchResultScreen
        visibleStat={visibleStat}
        visible={showSearchScreen}
      />
    </>
  );
};
