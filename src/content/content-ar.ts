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
  PSD_to_PDF: {
    title: "تحويل PSD إلى PDF",
    seoTitle: "محول PSD إلى PDF - أداة مجانية عبر الإنترنت",
    description: "حوّل ملفات الفوتوشوب (PSD) الخاصة بك إلى ملفات PDF عالية الجودة بسهولة.",
    color: "#001833",
    type: ".psd",
    to: "/psd-to-pdf",
    features: [
      {
        title: "تحويل سلس من PSD إلى PDF",
        description: "حوّل ملفات PSD الخاصة بك إلى PDF مع الحفاظ على جودة الصور والطبقات، مما يضمن إخراجاً احترافياً."
      },
      {
        title: "تحويل دفعات",
        description: "حوّل عدة ملفات PSD إلى PDF دفعة واحدة، مما يوفر الوقت والجهد."
      },
      {
        title: "آمن وخاص",
        description: "تتم معالجة ملفاتك بأمان دون الحاجة إلى تسجيل، مما يضمن حماية خصوصيتك."
      }
    ],
    keywords: "تحويل PSD إلى PDF, محول PSD إلى PDF, أداة مجانية لتحويل PSD إلى PDF, تحويل PSD إلى PDF عبر الإنترنت, فوتوشوب إلى PDF, تحويل دفعات PSD إلى PDF, PSD إلى PDF عالي الجودة"
  },
  PDF_to_PSD: {
    title: "تحويل PDF إلى PSD",
    seoTitle: "تحويل PDF إلى PSD مجاناً عبر الإنترنت - تحويل سهل وسريع",
    description: "حوّل ملفات PDF الخاصة بك إلى ملفات فوتوشوب (PSD) قابلة للتعديل بسهولة.",
    color: "#001833",
    type: ".pdf",
    to: "/pdf-to-psd",
    features: [
      {
        title: "تحويل عالي الجودة من PDF إلى PSD",
        description: "حوّل مستندات PDF الخاصة بك إلى ملفات PSD بطبقات متعددة، مع الحفاظ على جميع العناصر المرئية للتعديل السهل في الفوتوشوب."
      },
      {
        title: "طبقات قابلة للتعديل",
        description: "يتم تحويل كل عنصر من عناصر PDF إلى طبقة قابلة للتعديل في ملف PSD الناتج، مما يتيح لك التحكم الكامل في تصميمك."
      },
      {
        title: "سريع وموثوق",
        description: "اختبر سرعات تحويل سريعة دون المساس بجودة أو سلامة ملفاتك."
      }
    ],
    keywords: "تحويل PDF إلى PSD, محول PDF إلى PSD, أداة مجانية لتحويل PDF إلى PSD, تحويل PDF إلى PSD عبر الإنترنت, PDF إلى فوتوشوب, استخراج الطبقات من PDF, PSD قابل للتعديل من PDF, PDF إلى PSD بطبقات"
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
    pdf_to_psd: "خيارات تحويل PDF إلى PSD",
    psd_to_pdf: "خيارات تحويل PSD إلى PDF",
  },
  loader_text: "يرجى الانتظار...",
  add_more_button: "أضف المزيد من الملفات",
  action_buttons: {
    pdf_to_psd: "تحويل إلى PSD",
    psd_to_pdf: "تحويل إلى PDF",
  },
  pages: "صفحات",
  page: "صفحة",
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-psd": ["تم تحويل ملف PDF إلى PSD!", "تم تحويل ملفات PDF إلى PSD!"],
    "psd-to-pdf": ["تم تحويل ملف PSD إلى PDF!", "تم تحويل ملفات PSD إلى PDF!"],
  },

  btnText: {
    "pdf-to-psd": ["تحميل ملف PSD المحول", "تحميل ملفات PSD المحولة"],
    "psd-to-pdf": ["تحميل ملف PDF المحول", "تحميل ملفات PDF المحولة"],
  },

  backto: {
    "pdf-to-psd": "العودة إلى تحويل PDF إلى PSD",
    "psd-to-pdf": "العودة إلى تحويل PSD إلى PDF",
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
