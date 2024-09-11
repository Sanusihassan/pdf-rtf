import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool: _tool = {
  PDF_to_RTF: {
    title: "将 PDF 转换为 RTF",
    seoTitle: "PDF 转 RTF 转换器 - 免费在线工具",
    description: "轻松将您的 PDF 文件转换为富文本格式 (RTF)，以获得更好的编辑选项。",
    color: "#1B9CFC",
    type: ".pdf",
    to: "/pdf-to-rtf",
    features: [
      {
        title: "高质量的 PDF 到 RTF 转换",
        description: "将 PDF 文档转换为完全可编辑的 RTF 文件，同时保留原始格式和文本结构。"
      },
      {
        title: "保留格式",
        description: "在转换为 RTF 时，保留您的 PDF 文件的原始字体、样式和布局，以便获得流畅的编辑体验。"
      },
      {
        title: "跨平台兼容性",
        description: "RTF 文件与多种文字处理器兼容，使其在各种平台上都易于使用。"
      }
    ],
    keywords: "PDF 转 RTF, 将 PDF 转换为 RTF, 免费的 PDF 到 RTF 转换器, 在线 PDF 到 RTF 转换, 可编辑的 PDF 转 RTF, 富文本格式, PDF 文档到 RTF"
  },
  RTF_to_PDF: {
    title: "将 RTF 转换为 PDF",
    seoTitle: "RTF 转 PDF 转换器 - 免费在线工具",
    description: "轻松将您的富文本格式 (RTF) 文件转换为高质量的 PDF 文档。",
    color: "#1B9CFC",
    type: ".rtf",
    to: "/rtf-to-pdf",
    features: [
      {
        title: "轻松的 RTF 到 PDF 转换",
        description: "快速将您的 RTF 文件转换为专业的 PDF 文档，同时保留原始格式。"
      },
      {
        title: "保留格式和布局",
        description: "在转换过程中，保留 RTF 文件的所有字体、样式和布局。"
      },
      {
        title: "通用兼容性",
        description: "PDF 文件可以在任何设备上打开，确保您的文档易于访问。"
      }
    ],
    keywords: "RTF 转 PDF, 将 RTF 转换为 PDF, 免费的 RTF 到 PDF 转换器, 在线 RTF 到 PDF 转换, 富文本到 PDF, 批量 RTF 到 PDF 转换"
  }
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_rtf: "PDF 转 RTF 选项",
    rtf_to_pdf: "RTF 转 PDF 选项",
  },
  loader_text: "请稍候...",
  add_more_button: "添加更多文件",
  action_buttons: {
    pdf_to_rtf: "转换为 RTF",
    rtf_to_pdf: "转换为 PDF",
  },
  pages: "页",
  page: "页",
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-rtf": ["PDF 文件已转换为 RTF！", "PDF 文件已转换为 RTF！"],
    "rtf-to-pdf": ["RTF 文件已转换为 PDF！", "RTF 文件已转换为 PDF！"],
  },

  btnText: {
    "pdf-to-rtf": ["下载已转换的 RTF 文件", "下载已转换的 RTF 文件"],
    "rtf-to-pdf": ["下载已转换的 PDF 文件", "下载已转换的 PDF 文件"],
  },

  backto: {
    "pdf-to-rtf": "返回 PDF 转 RTF",
    "rtf-to-pdf": "返回 RTF 转 PDF",
  },
};


export const tools: _tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "在此处拖放文件",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "条款",
  conditions: "条件",
  privacy_policy: "隐私政策",
};


export const errors: _errors = {
  EMPTY_FILE: {
    message: "文件为空，请选择一个有效的文件。",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "文件太大。请选择一个更小的文件，或使用我们的压缩PDF工具来减小文件大小。",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "文件不是受支持的类型。",
    types: {
      PDF: "请选择一个有效的PDF文件。",
      JPG: "请选择一个有效的JPEG图片文件。",
      DOC: "请选择一个有效的Word文档文件。",
      DOCX: "请选择一个有效的Word文档文件。",
      XLS: "请选择一个有效的Excel电子表格文件。",
      XLSX: "请选择一个有效的Excel电子表格文件。",
      PPT: "请选择一个有效的PowerPoint演示文稿文件。",
      PPTX: "请选择一个有效的PowerPoint演示文稿文件。",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "文件已损坏，无法处理。请选择一个有效的文件。",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message: "文件缺少字体。请确保所有字体都嵌入在PDF文件中。",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message: "文件包含无效的图像数据。请确保所有图像格式正确。",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message: "文件存在安全风险，无法处理。请选择一个有效的文件。",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message: "您已超出允许的最大文件数。请删除一些文件并重试。",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "未选择任何文件。请选择至少一个文件。",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message: "发生未知错误。请稍后重试或联系支持人员。",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message: "网络错误，请检查您的互联网连接并重试。",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "请至少上传两个文件以合并。",
    code: "ERR_UPLOAD_COUNT",
  },
};
