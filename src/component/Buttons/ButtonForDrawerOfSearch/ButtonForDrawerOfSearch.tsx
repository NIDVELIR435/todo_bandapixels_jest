import React, { useState } from "react";
import { Button } from "antd";
import { DrawerForResultOfSearch } from "../../DrawerForResultOfSearch/DrawerForResultOfSearch";

export const ButtonForDrawerOfSearch = (): JSX.Element => {
  const [showDrawer, setShowDrawer] = useState(false);
  const visibleStat = (param: boolean) => setShowDrawer(param);
  const hideDrawer = (): void => setShowDrawer(false);
  return (
    <>
      <Button tabIndex={2} onClick={() => visibleStat(true)}>
        Press to search
      </Button>
      <DrawerForResultOfSearch
        hideDrawer={hideDrawer}
        showDrawer={showDrawer}
      />
    </>
  );
};
