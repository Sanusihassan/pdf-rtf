import { _howToSchemas } from "./how-to-en";

export const howToSchemas: _howToSchemas = {
  PDFToPSDHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "如何将 PDF 转换为 PSD",
    description: "将 PDF 文件转换为 PSD 格式的逐步指南。",
    step: [
      {
        "@type": "HowToStep",
        name: "步骤 1",
        text: "打开 PDFEquips 上的 PDF 转 PSD 工具。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 2",
        text: "拖放您的 PDF 文件或点击“选择 PDF 文件”按钮，从您的设备中选择一个 PDF 文件。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 3",
        text: "文件上传完成后，点击“将 PDF 转换为 PSD”按钮。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 4",
        text: "等待转换完成，然后下载 PSD 文件。",
      },
    ],
  },
  PSDToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "如何将 PSD 转换为 PDF",
    description: "将 PSD 文件转换为 PDF 格式的逐步指南。",
    step: [
      {
        "@type": "HowToStep",
        name: "步骤 1",
        text: "打开 PDFEquips 上的 PSD 转 PDF 工具。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 2",
        text: "拖放您的 PSD 文件或点击“选择 PSD 文件”按钮，从您的设备中选择一个 PSD 文件。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 3",
        text: "文件上传完成后，点击“将 PSD 转换为 PDF”按钮。",
      },
      {
        "@type": "HowToStep",
        name: "步骤 4",
        text: "等待转换完成，然后下载 PDF 文件。",
      },
    ],
  },
};
