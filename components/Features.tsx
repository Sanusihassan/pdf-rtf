import { useSelector } from "react-redux";
import { GoShieldLock } from "react-icons/go";
import type { ToolState } from "@/src/store";
import SmoothIcon from "./icons/SmoothIcon";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { MdOutlineHighQuality } from "react-icons/md";
import { PencilAltIcon } from "@heroicons/react/outline";
import FastIcon from "./icons/FastIcon";

export const Features = ({
  features,
  tool
}: {
  features: { title: string; description: string }[];
  tool: "/psd-to-pdf" | "/pdf-to-psd"
}) => {
  const stateShowTool = useSelector(
    (state: { tool: ToolState }) => state.tool.showTool
  );
  const icons1 = [SmoothIcon, RiCheckboxMultipleBlankLine, GoShieldLock];
  const icons2 = [MdOutlineHighQuality, PencilAltIcon, FastIcon];
  const icons = tool === "/psd-to-pdf" ? icons1 : icons2;
  return (
    <div className={`features${stateShowTool ? "" : " d-none"}`}>
      {features.map(({ title, description }, i) => {
        const Icon = icons[i];
        return (
          <div className="feature">
            <Icon className={`feature-icon no-fill`} />
            <div className="title">{title}</div>
            <p className="description">{description}</p>
          </div>
        );
      })}
    </div>
  );
};
