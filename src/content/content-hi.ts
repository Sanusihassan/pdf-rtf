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
    title: "PDF को RTF में परिवर्तित करें",
    seoTitle: "PDF से RTF कनवर्टर - मुफ्त ऑनलाइन टूल",
    description: "बेहतर संपादन विकल्पों के लिए अपने PDF फाइलों को आसानी से रिच टेक्स्ट फॉर्मेट (RTF) में परिवर्तित करें।",
    color: "#1B9CFC",
    type: ".pdf",
    to: "/pdf-to-rtf",
    features: [
      {
        title: "उच्च गुणवत्ता वाला PDF से RTF रूपांतरण",
        description: "मूल स्वरूप और पाठ संरचना को बनाए रखते हुए PDF दस्तावेज़ों को पूरी तरह से संपादन योग्य RTF फाइलों में परिवर्तित करें।"
      },
      {
        title: "स्वरूपण सुरक्षित रखें",
        description: "PDF को RTF में बदलते समय मूल फ़ॉन्ट, शैलियाँ और लेआउट बनाए रखें ताकि संपादन का अनुभव सुगम हो।"
      },
      {
        title: "क्रॉस-प्लेटफ़ॉर्म संगतता",
        description: "RTF फाइलें कई प्रकार के वर्ड प्रोसेसर के साथ संगत होती हैं, जिससे इन्हें विभिन्न प्लेटफ़ॉर्म पर उपयोग करना आसान होता है।"
      }
    ],
    keywords: "PDF से RTF, PDF को RTF में बदलें, मुफ्त PDF से RTF कनवर्टर, ऑनलाइन PDF से RTF रूपांतरण, संपादन योग्य PDF से RTF, रिच टेक्स्ट फॉर्मेट, PDF दस्तावेज़ से RTF"
  },
  RTF_to_PDF: {
    title: "RTF को PDF में परिवर्तित करें",
    seoTitle: "RTF से PDF कनवर्टर - मुफ्त ऑनलाइन टूल",
    description: "अपने रिच टेक्स्ट फॉर्मेट (RTF) फाइलों को आसानी से उच्च गुणवत्ता वाले PDF दस्तावेज़ों में परिवर्तित करें।",
    color: "#1B9CFC",
    type: ".rtf",
    to: "/rtf-to-pdf",
    features: [
      {
        title: "RTF से PDF रूपांतरण में आसानी",
        description: "मूल स्वरूप को सुरक्षित रखते हुए अपने RTF फाइलों को जल्दी से पेशेवर PDF दस्तावेज़ों में परिवर्तित करें।"
      },
      {
        title: "स्वरूपण और लेआउट सुरक्षित रखें",
        description: "रूपांतरण प्रक्रिया के दौरान अपने RTF फाइल का सभी फ़ॉन्ट, शैलियाँ और लेआउट सुरक्षित रखें।"
      },
      {
        title: "सार्वभौमिक संगतता",
        description: "PDF फाइलें किसी भी उपकरण पर खोली जा सकती हैं, जिससे आपके दस्तावेज़ आसानी से सुलभ होते हैं।"
      }
    ],
    keywords: "RTF से PDF, RTF को PDF में बदलें, मुफ्त RTF से PDF कनवर्टर, ऑनलाइन RTF से PDF रूपांतरण, रिच टेक्स्ट से PDF, बैच RTF से PDF"
  }
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_rtf: "PDF से RTF विकल्प",
    rtf_to_pdf: "RTF से PDF विकल्प",
  },
  loader_text: "कृपया प्रतीक्षा करें...",
  add_more_button: "अधिक फ़ाइलें जोड़ें",
  action_buttons: {
    pdf_to_rtf: "RTF में परिवर्तित करें",
    rtf_to_pdf: "PDF में परिवर्तित करें",
  },
  pages: "पृष्ठ",
  page: "पृष्ठ",
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-rtf": ["PDF फ़ाइल को RTF में परिवर्तित किया गया है!", "PDF फ़ाइलों को RTF में परिवर्तित किया गया है!"],
    "rtf-to-pdf": ["RTF फ़ाइल को PDF में परिवर्तित किया गया है!", "RTF फ़ाइलों को PDF में परिवर्तित किया गया है!"],
  },

  btnText: {
    "pdf-to-rtf": ["परिवर्तित RTF फ़ाइल डाउनलोड करें", "परिवर्तित RTF फ़ाइलें डाउनलोड करें"],
    "rtf-to-pdf": ["परिवर्तित PDF फ़ाइल डाउनलोड करें", "परिवर्तित PDF फ़ाइलें डाउनलोड करें"],
  },

  backto: {
    "pdf-to-rtf": "वापस PDF से RTF पर",
    "rtf-to-pdf": "वापस RTF से PDF पर",
  },
};


export const tools: _tools = {
  select: "चुनें",
  or_drop: "या फ़ाइलें यहां छोड़ें",
  files: "फाइलें",
  drop_files: "फ़ाइलें यहाँ खींचें",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "शर्तें",
  conditions: "उपयोग की शर्तें",
  privacy_policy: "गोपनीयता नीति",
};


export const errors: _errors = {
  EMPTY_FILE: {
    message: "फ़ाइल खाली है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "फ़ाइल बहुत बड़ी है। कृपया एक छोटी फ़ाइल चुनें या हमारा कंप्रेस-पीडीएफ़ उपकरण उपयोग करके फ़ाइल का आकार कम करें।",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "फ़ाइल एक समर्थित प्रकार नहीं है।",
    types: {
      PDF: "कृपया एक मान्य पीडीएफ़फ़ाइल चुनें।",
      JPG: "कृपया एक मान्य जेपेग छवि फ़ाइल चुनें।",
      DOC: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      DOCX: "कृपया एक मान्य वर्ड दस्तावेज़ फ़ाइल चुनें।",
      XLS: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      XLSX: "कृपया एक मान्य एक्सेल स्प्रेडशीट फ़ाइल चुनें।",
      PPT: "कृपया एक मान्यपावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
      PPTX: "कृपया एक मान्य पावरपॉइंट प्रस्तुति फ़ाइल चुनें।",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "फ़ाइल का डाटा भ्रष्ट है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "फ़ाइल में फ़ॉन्ट गुम हैं। कृपया सुनिश्चित करें कि पीडीएफफ़ाइल में सभी फ़ॉन्ट एम्बेड हैं।",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "फ़ाइल में अवैध छवि डेटा है। कृपया सुनिश्चित करें कि सभी छवियाँ सही ढंग से फ़ॉर्मेटेड हैं।",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "फ़ाइल में सुरक्षा जोखिम हो सकता है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "आपने अनुमति दी हुई अधिकतम फ़ाइलों की संख्या पार कर दी है। कृपया कुछ फ़ाइलें हटाएं और पुनः प्रयास करें।",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "कोई फ़ाइल चयनित नहीं की गई है। कृपया कम से कम एक फ़ाइल चुनें।",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "एक अज्ञात त्रुटि हुई है। कृपया बाद में पुनः प्रयास करें या सहायता से संपर्क करें।",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "नेटवर्क में त्रुटि हो गई है। कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें।",
    code: "ERR_NETWORK",
  },

  ERR_UPLOAD_COUNT: {
    message: "कृपया फ्यूजन करने के लिए कम से कम दो फ़ाइलें अपलोड करें।",
    code: "ERR_UPLOAD_COUNT",
  },
};
