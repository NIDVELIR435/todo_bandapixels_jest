import React from "react";
import { Switch } from "antd";
import { useAppDispatch, useCurrentThemeMode } from "../../../State/Hooks";
import { changeMode } from "../../../State/Slices/ThemeModeSlice/ThemeModeSlice";

export const ButtonThemeMode: React.FC = () => {
  const currentThemeMode = useCurrentThemeMode();
  const dispatch = useAppDispatch();
  const onChange = (checked: boolean): void => {
    dispatch(changeMode(checked));
  };

  return (
    <>
      <span>Switch theme mode </span>
      <Switch checked={currentThemeMode} onChange={onChange} />
    </>
  );
};
