import { _howToSchemas } from "./how-to-en";

export const howToSchemas: _howToSchemas = {
  PDFToEPUBHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "如何将PDF转换为EPUB",
    description: "将PDF文件转换为EPUB格式的分步指南。",
    step: [
      {
        "@type": "HowToStep",
        name: "步骤 1",
        text: "打开PDFEquips上的PDF转EPUB工具。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 2",
        text: "拖放您的PDF文件，或点击“选择PDF文件”按钮从设备中选择PDF文件。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 3",
        text: "上传文件后，点击“将PDF转换为EPUB”按钮。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 4",
        text: "等待转换完成，然后下载EPUB文件。",
      },
    ],
  },
  EPUBToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "如何将EPUB转换为PDF",
    description: "将EPUB文件转换为PDF格式的分步指南。",
    step: [
      {
        "@type": "HowToStep",
        name: "步骤 1",
        text: "打开PDFEquips上的EPUB转PDF工具。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 2",
        text: "拖放您的EPUB文件，或点击“选择EPUB文件”按钮从设备中选择EPUB文件。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 3",
        text: "上传文件后，点击“将EPUB转换为PDF”按钮。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 4",
        text: "等待转换完成，然后下载PDF文件。",
      },
    ],
  },
};
