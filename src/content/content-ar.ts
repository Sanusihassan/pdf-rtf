import type {
  tool as _tool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool: _tool = {
  PDF_to_RTF: {
    title: "تحويل PDF إلى RTF",
    seoTitle: "محول PDF إلى RTF - أداة مجانية على الإنترنت",
    description: "حوّل ملفات PDF الخاصة بك بسهولة إلى تنسيق النص الغني (RTF) للحصول على خيارات تحرير أفضل.",
    color: "#1B9CFC",
    type: ".pdf",
    to: "/pdf-to-rtf",
    features: [
      {
        title: "تحويل PDF إلى RTF بجودة عالية",
        description: "حوّل مستندات PDF إلى ملفات RTF قابلة للتحرير بالكامل مع الحفاظ على التنسيق الأصلي وهيكل النص."
      },
      {
        title: "الحفاظ على التنسيق",
        description: "حافظ على الخطوط والأنماط والتخطيطات الأصلية لملف PDF الخاص بك عند التحويل إلى RTF لتجربة تحرير سلسة."
      },
      {
        title: "التوافق عبر الأنظمة الأساسية",
        description: "ملفات RTF متوافقة مع مجموعة واسعة من معالجات النصوص، مما يجعلها سهلة الاستخدام عبر منصات مختلفة."
      }
    ],
    keywords: "PDF إلى RTF, تحويل PDF إلى RTF, محول PDF إلى RTF مجاني, تحويل PDF إلى RTF عبر الإنترنت, PDF قابل للتحرير إلى RTF, تنسيق النص الغني, مستند PDF إلى RTF"
  },
  RTF_to_PDF: {
    title: "تحويل RTF إلى PDF",
    seoTitle: "محول RTF إلى PDF - أداة مجانية على الإنترنت",
    description: "حوّل ملفات تنسيق النص الغني (RTF) الخاصة بك بسهولة إلى مستندات PDF عالية الجودة.",
    color: "#1B9CFC",
    type: ".rtf",
    to: "/rtf-to-pdf",
    features: [
      {
        title: "تحويل RTF إلى PDF بسهولة",
        description: "حوّل ملفات RTF الخاصة بك بسرعة إلى مستندات PDF احترافية مع الحفاظ على التنسيق الأصلي."
      },
      {
        title: "الحفاظ على التنسيق والتخطيط",
        description: "احتفظ بجميع الخطوط والأنماط والتخطيطات من ملف RTF الخاص بك كما هي أثناء عملية التحويل."
      },
      {
        title: "التوافق العالمي",
        description: "يمكن فتح ملفات PDF على أي جهاز، مما يضمن سهولة الوصول إلى مستنداتك."
      }
    ],
    keywords: "RTF إلى PDF, تحويل RTF إلى PDF, محول RTF إلى PDF مجاني, تحويل RTF إلى PDF عبر الإنترنت, نص غني إلى PDF, تحويل دفعات RTF إلى PDF"
  }
};



export const tools: _tools = {
  select: "اختر",
  or_drop: "أو قم بإسقاط الملفات هنا",
  files: "ملفات",
  drop_files: "قم بوضع الملفات هنا",
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_rtf: "خيارات تحويل PDF إلى RTF",
    rtf_to_pdf: "خيارات تحويل RTF إلى PDF",
  },
  loader_text: "يرجى الانتظار...",
  add_more_button: "إضافة المزيد من الملفات",
  action_buttons: {
    pdf_to_rtf: "تحويل إلى RTF",
    rtf_to_pdf: "تحويل إلى PDF",
  },
  pages: "صفحات",
  page: "صفحة",
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-rtf": ["تم تحويل ملف PDF إلى RTF!", "تم تحويل ملفات PDF إلى RTF!"],
    "rtf-to-pdf": ["تم تحويل ملف RTF إلى PDF!", "تم تحويل ملفات RTF إلى PDF!"],
  },

  btnText: {
    "pdf-to-rtf": ["تحميل ملف RTF المحول", "تحميل الملفات المحولة إلى RTF"],
    "rtf-to-pdf": ["تحميل ملف PDF المحول", "تحميل الملفات المحولة إلى PDF"],
  },

  backto: {
    "pdf-to-rtf": "العودة إلى تحويل PDF إلى RTF",
    "rtf-to-pdf": "العودة إلى تحويل RTF إلى PDF",
  },
};



export const footer: _footer = {
  brand: "PDFEquips",
  terms: "الشروط",
  conditions: "والأحكام",
  privacy_policy: "سياسة الخصوصية",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "الملف فارغ. يرجى اختيار ملف صالح.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "حجم الملف كبير جدًا. يرجى اختيار ملف أصغر، أو استخدام أداة ضغط PDF الخاصة بنا لتقليل حجم الملف.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "الملف غير مدعوم.",
    types: {
      PDF: "يرجى اختيار ملف PDF صالح.",
      JPG: "يرجى اختيار ملف صورة JPEG صالح.",
      DOC: "يرجى اختيار ملف مستند Word صالح.",
      DOCX: "يرجى اختيار ملف مستند Word صالح.",
      XLS: "يرجى اختيار ملف جدول بيانات Excel صالح.",
      XLSX: "يرجى اختيارملف جدول بيانات Excel صالح.",
      PPT: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
      PPTX: "يرجى اختيار ملف عرض تقديمي PowerPoint صالح.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "الملف تالف ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "الملف يحتوي على خطوط أحرف مفقودة. يرجى التأكد من تضمين جميع الخطوط في ملف PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "الملف يحتوي على بيانات صورة غير صالحة. يرجى التأكد من تنسيق جميع الصور بشكل صحيح.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "الملف يحتوي على مخاطر أمان ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "لقد تجاوزت الحد الأقصى لعدد الملفات المسموح به. يرجى حذف بعض الملفات والمحاولة مرة أخرى.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "لم يتم اختيار أي ملفات. يرجى اختيار ملف واحد على الأقل.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى لاحقًا أو الاتصال بالدعم.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "حدث خطأ في الشبكة. يرجى التحقق من اتصالك بالإنترنت وحاول مرة أخرى.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "يرجى رفع ملفين على الأقل للدمج.",
    code: "ERR_UPLOAD_COUNT",
  },
};
