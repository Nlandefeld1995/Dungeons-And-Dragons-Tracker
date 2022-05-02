import { DropMenu } from "../../common/bitComponents/dropDownMenu/DropMenu";
import commonStyles from "../../common/styles/common.module.css";
import classnames from "classnames/bind";
import { Input } from "../../common/bitComponents/input/Input";
const cx = classnames.bind(commonStyles);

export const Basics = () => {
  return (
    <div className={cx("text-align-center", "block")}>
      <Input placeholder="Player Name" />
      <Input placeholder="Character Name" />
      <div>Class:</div>
      <DropMenu placeholder="Class" options={[]} onItemSelect={() => {}} />
      <div>Race:</div>
      <DropMenu placeholder="Race" options={[]} onItemSelect={() => {}} />
      <div>Sub Race:</div>
      <DropMenu placeholder="Sub Race" options={[]} onItemSelect={() => {}} />
      <Input placeholder="Level" />
      <Input placeholder="Curent XP" />
    </div>
  );
};
