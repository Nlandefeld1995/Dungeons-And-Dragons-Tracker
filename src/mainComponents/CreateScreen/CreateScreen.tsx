import { Button } from "../../common/bitComponents/button/Button";
import { ACTIONS } from "../../common/redux/globalStore";
import { useAction } from "../../common/redux/reduxHooks";
import commonStyles from "../../common/styles/common.module.css";
import classnames from "classnames/bind";
const cx = classnames.bind(commonStyles);

export const CreateScreen = () => {
  const setView = useAction(ACTIONS.UPDATE_VIEW);
  return (
    <div className={cx("text-align-center")}>
      <Button
        className={cx("margin-right-md")}
        label="New Account"
        onClick={() => setView("newAccount")}
      />
      <Button label="Login" onClick={() => setView("main")} />
    </div>
  );
};
