import { useSelector } from "react-redux";
import type { ToolState } from "@/src/store";
import { MdOutlineHighQuality } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { GrSystem } from "react-icons/gr";
import SmoothIcon from "./icons/SmoothIcon";
import { IoIosGlobe } from "react-icons/io";


const Features = ({ features, tool }: {
  features: { title: string; description: string }[];
  tool: "/rtf-to-pdf" | "/pdf-to-rtf";
}) => {
  const stateShowTool = useSelector(
    (state: { tool: ToolState }) => state.tool.showTool
  );
  const iconsRTFPDF = [SmoothIcon, BiLike, IoIosGlobe];
  const iconsPDFRTF = [MdOutlineHighQuality, BiLike, GrSystem]
  const icons = tool === "/pdf-to-rtf" ? iconsPDFRTF : iconsRTFPDF;
  return (
    <div className={`features${stateShowTool ? "" : " d-none"}`}>
      {features.map(({ title, description }, i) => {
        const Icon = icons[i];
        return (
          <div className="feature">
            {Icon ? <Icon className={`feature-icon no-fill`} /> : null}
            <div className="title">{title}</div>
            <p className="description">{description}</p>
          </div>
        );
      })}
    </div>
  );
};


export default Features;