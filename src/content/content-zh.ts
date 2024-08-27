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
  PSD_to_PDF: {
    title: "将PSD转换为PDF",
    seoTitle: "PSD转PDF转换器 - 免费在线工具",
    description: "轻松将您的Photoshop文件（PSD）转换为高质量的PDF。",
    color: "#001833",
    type: ".psd",
    to: "/psd-to-pdf",
    features: [
      {
        title: "无缝的PSD到PDF转换",
        description: "将您的PSD文件转换为PDF，同时保留图像和图层的质量，确保专业的输出效果。"
      },
      {
        title: "批量转换",
        description: "一次性将多个PSD文件转换为PDF，节省时间和精力。"
      },
      {
        title: "安全且私密",
        description: "您的文件将被安全处理，无需注册，确保您的隐私得到保护。"
      }
    ],
    keywords: "PSD转PDF, 将PSD转换为PDF, 免费PSD转PDF转换器, 在线PSD到PDF转换, Photoshop转PDF, 批量PSD转PDF, 高质量PSD到PDF"
  },
  PDF_to_PSD: {
    title: "将PDF转换为PSD",
    seoTitle: "免费在线PDF转PSD - 简单快速的转换",
    description: "轻松将您的PDF文件转换为可编辑的Photoshop（PSD）文件。",
    color: "#001833",
    type: ".pdf",
    to: "/pdf-to-psd",
    features: [
      {
        title: "高质量的PDF到PSD转换",
        description: "将您的PDF文档转换为分层的PSD文件，保留所有视觉元素，方便在Photoshop中进行编辑。"
      },
      {
        title: "可编辑图层",
        description: "您的PDF文件中的每个元素都将转换为PSD文件中的可编辑图层，让您完全控制您的设计。"
      },
      {
        title: "快速且可靠",
        description: "体验快速的转换时间，同时确保文件的质量和完整性不受影响。"
      }
    ],
    keywords: "PDF转PSD, 将PDF转换为PSD, 免费PDF转PSD转换器, 在线PDF到PSD转换, PDF到Photoshop, 从PDF提取图层, 可编辑的PSD从PDF, 分层PDF到PSD"
  }
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-psd": ["PDF 文件已转换为 PSD！", "PDF 文件已转换为 PSD！"],
    "psd-to-pdf": ["PSD 文件已转换为 PDF！", "PSD 文件已转换为 PDF！"],
  },

  btnText: {
    "pdf-to-psd": ["下载转换后的 PSD 文件", "下载转换后的 PSD 文件"],
    "psd-to-pdf": ["下载转换后的 PDF 文件", "下载转换后的 PDF 文件"],
  },

  backto: {
    "pdf-to-psd": "返回 PDF 转 PSD",
    "psd-to-pdf": "返回 PSD 转 PDF",
  },
};


export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_psd: "PDF 转 PSD 选项",
    psd_to_pdf: "PSD 转 PDF 选项",
  },
  loader_text: "请稍等...",
  add_more_button: "添加更多文件",
  action_buttons: {
    pdf_to_psd: "转换为 PSD",
    psd_to_pdf: "转换为 PDF",
  },
  pages: "页",
  page: "页",
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
