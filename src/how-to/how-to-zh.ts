import { _howToSchemas } from "./how-to-en";
export const howToSchemas: _howToSchemas = {
  PDFToRTFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "如何将PDF转换为RTF",
    description: "逐步指南将PDF文件转换为RTF格式。",
    step: [
      {
        "@type": "HowToStep",
        name: "步骤 1",
        text: "在PDFEquips上打开PDF到RTF工具。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 2",
        text: "拖放您的PDF文件，或点击“选择PDF文件”按钮，从设备中选择PDF文件。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 3",
        text: "文件上传后，点击“转换PDF到RTF”按钮。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 4",
        text: "等待转换完成，然后下载RTF文件。",
      },
    ],
  },
  RTFToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "如何将RTF转换为PDF",
    description: "逐步指南将RTF文件转换为PDF格式。",
    step: [
      {
        "@type": "HowToStep",
        name: "步骤 1",
        text: "在PDFEquips上打开RTF到PDF工具。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 2",
        text: "拖放您的RTF文件，或点击“选择RTF文件”按钮，从设备中选择RTF文件。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 3",
        text: "文件上传后，点击“转换RTF到PDF”按钮。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 4",
        text: "等待转换完成，然后下载PDF文件。",
      },
    ],
  },
};
