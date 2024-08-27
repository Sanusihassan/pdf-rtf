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
    title: "PSD को PDF में बदलें",
    seoTitle: "PSD से PDF कनवर्टर - मुफ्त ऑनलाइन टूल",
    description: "अपने फ़ोटोशॉप (PSD) फ़ाइलों को आसानी से उच्च-गुणवत्ता वाले PDFs में बदलें।",
    color: "#001833",
    type: ".psd",
    to: "/psd-to-pdf",
    features: [
      {
        title: "PSD से PDF में सहज रूपांतरण",
        description: "अपने PSD फ़ाइलों को PDF में बदलें, और अपनी छवियों और परतों की गुणवत्ता बनाए रखें, जिससे आपको एक पेशेवर परिणाम मिलता है।"
      },
      {
        title: "बैच रूपांतरण",
        description: "एक ही बार में कई PSD फ़ाइलों को PDF में बदलें, समय और प्रयास बचाएं।"
      },
      {
        title: "सुरक्षित और निजी",
        description: "आपकी फ़ाइलें सुरक्षित रूप से प्रोसेस की जाती हैं, और किसी पंजीकरण की आवश्यकता नहीं है, जिससे आपकी गोपनीयता सुरक्षित रहती है।"
      }
    ],
    keywords: "PSD से PDF, PSD को PDF में बदलें, मुफ्त PSD से PDF कनवर्टर, ऑनलाइन PSD से PDF रूपांतरण, फ़ोटोशॉप से PDF, बैच PSD से PDF, उच्च-गुणवत्ता वाला PSD से PDF"
  },
  PDF_to_PSD: {
    title: "PDF को PSD में बदलें",
    seoTitle: "PDF को PSD में मुफ्त ऑनलाइन बदलें - आसान और तेज़ रूपांतरण",
    description: "अपने PDF फ़ाइलों को आसानी से संपादन योग्य फ़ोटोशॉप (PSD) फ़ाइलों में बदलें।",
    color: "#001833",
    type: ".pdf",
    to: "/pdf-to-psd",
    features: [
      {
        title: "उच्च-गुणवत्ता वाला PDF से PSD रूपांतरण",
        description: "अपने PDF दस्तावेज़ों को परतों वाले PSD फ़ाइलों में बदलें, जिससे सभी दृश्य तत्व बनाए रहें और फ़ोटोशॉप में आसानी से संपादन किया जा सके।"
      },
      {
        title: "संपादन योग्य परतें",
        description: "आपकी PDF फ़ाइल का प्रत्येक तत्व परिणामस्वरूप PSD फ़ाइल में संपादन योग्य परत में बदल जाता है, जिससे आपको अपने डिज़ाइन पर पूर्ण नियंत्रण मिलता है।"
      },
      {
        title: "तेज़ और विश्वसनीय",
        description: "गुणवत्ता या फ़ाइलों की अखंडता से समझौता किए बिना तेज़ रूपांतरण समय का अनुभव करें।"
      }
    ],
    keywords: "PDF से PSD, PDF को PSD में बदलें, मुफ्त PDF से PSD कनवर्टर, ऑनलाइन PDF से PSD रूपांतरण, PDF से फ़ोटोशॉप, PDF से परतें निकालें, PDF से संपादन योग्य PSD, परतों के साथ PDF से PSD"
  }
};
export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_psd: "PDF से PSD विकल्प",
    psd_to_pdf: "PSD से PDF विकल्प",
  },
  loader_text: "कृपया प्रतीक्षा करें...",
  add_more_button: "अधिक फ़ाइलें जोड़ें",
  action_buttons: {
    pdf_to_psd: "PSD में बदलें",
    psd_to_pdf: "PDF में बदलें",
  },
  pages: "पृष्ठ",
  page: "पृष्ठ",
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-psd": ["PDF फ़ाइल को PSD में बदल दिया गया है!", "PDF फ़ाइलों को PSD में बदल दिया गया है!"],
    "psd-to-pdf": ["PSD फ़ाइल को PDF में बदल दिया गया है!", "PSD फ़ाइलों को PDF में बदल दिया गया है!"],
  },

  btnText: {
    "pdf-to-psd": ["बदली गई PSD फ़ाइल डाउनलोड करें", "बदली गई PSD फ़ाइलें डाउनलोड करें"],
    "psd-to-pdf": ["बदली गई PDF फ़ाइल डाउनलोड करें", "बदली गई PDF फ़ाइलें डाउनलोड करें"],
  },

  backto: {
    "pdf-to-psd": "PDF से PSD पर वापस जाएं",
    "psd-to-pdf": "PSD से PDF पर वापस जाएं",
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
