import { Navigate } from "react-router-dom";
import SettingsList from "./SettingsList";
import { isMobileDevice } from "../../utils/Utils";

const SettingsPage = () => {
  return isMobileDevice() ? <SettingsList /> : <Navigate to="accountInfo" />;
};

export default SettingsPage;
