import { useSelector } from "react-redux";
import { MdOutlineHighQuality } from "react-icons/md";
import { GoShieldLock } from "react-icons/go";
import EasyIcon from "./icons/EasyIcon";
import type { ToolState } from "@/src/store";

export const Features = ({
  features,
}: {
  features: { title: string; description: string }[];
}) => {
  const stateShowTool = useSelector(
    (state: { tool: ToolState }) => state.tool.showTool
  );
  const icons = [EasyIcon, MdOutlineHighQuality, GoShieldLock];
  return (
    <div className={`features${stateShowTool ? "" : " d-none"}`}>
      {features.map(({ title, description }, i) => {
        const Icon = icons[i];
        return (
          <div className="feature">
            <Icon className={`feature-icon${i === 1 ? " no-fill" : ""}`} />
            <div className="title">{title}</div>
            <p className="description">{description}</p>
          </div>
        );
      })}
    </div>
  );
};
