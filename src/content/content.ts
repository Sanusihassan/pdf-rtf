export const tool = {
  PDF_to_RTF: {
    title: "Convert PDF to RTF",
    seoTitle: "PDF to RTF Converter - Free Online Tool",
    description: "Easily convert your PDF files to Rich Text Format (RTF) for better editing options.",
    color: "#1B9CFC",
    type: ".pdf",
    to: "/pdf-to-rtf",
    features: [
      {
        title: "High-Quality PDF to RTF Conversion",
        description: "Convert PDF documents into fully editable RTF files while retaining original formatting and text structure."
      },
      {
        title: "Preserve Formatting",
        description: "Maintain the original fonts, styles, and layouts of your PDF when converting to RTF for a smooth editing experience."
      },
      {
        title: "Cross-Platform Compatibility",
        description: "RTF files are compatible with a wide range of word processors, making them easy to use across various platforms."
      }
    ],
    keywords: "PDF to RTF, convert PDF to RTF, free PDF to RTF converter, online PDF to RTF conversion, editable PDF to RTF, rich text format, PDF document to RTF"
  },
  RTF_to_PDF: {
    title: "Convert RTF to PDF",
    seoTitle: "RTF to PDF Converter - Free Online Tool",
    description: "Easily convert your Rich Text Format (RTF) files into high-quality PDF documents.",
    color: "#1B9CFC",
    type: ".rtf",
    to: "/rtf-to-pdf",
    features: [
      {
        title: "Effortless RTF to PDF Conversion",
        description: "Quickly convert your RTF files into professional PDF documents while preserving the original formatting."
      },
      {
        title: "Preserve Formatting and Layout",
        description: "Keep all the fonts, styles, and layouts from your RTF file intact during the conversion process."
      },
      {
        title: "Universal Compatibility",
        description: "PDF files can be opened on any device, ensuring your documents are easily accessible."
      }
    ],
    keywords: "RTF to PDF, convert RTF to PDF, free RTF to PDF converter, online RTF to PDF conversion, rich text to PDF, batch RTF to PDF"
  }
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};


export const edit_page = {
  edit_page_titles: {
    pdf_to_rtf: "PDF to RTF options",
    rtf_to_pdf: "RTF to PDF options",
  },
  loader_text: "please wait...",
  add_more_button: "Add more files",
  action_buttons: {
    pdf_to_rtf: "Convert to RTF",
    rtf_to_pdf: "Convert to PDF",
  },
  pages: "pages",
  page: "page",
};

export const downloadFile = {
  titles: {
    "pdf-to-rtf": ["PDF file has been converted to RTF!", "PDF files have been converted to RTF!"],
    "rtf-to-pdf": ["RTF file has been converted to PDF!", "RTF files have been converted to PDF!"],
  },

  btnText: {
    "pdf-to-rtf": ["Download Converted RTF file", "Download Converted RTF files"],
    "rtf-to-pdf": ["Download Converted PDF file", "Download Converted PDF files"],
  },

  backto: {
    "pdf-to-rtf": "Back To PDF to RTF",
    "rtf-to-pdf": "Back To RTF to PDF",
  },
};



export const footer = {
  brand: "PDFEquips",
  terms: "terms",
  conditions: "conditions",
  privacy_policy: "privacy policy",
};

export const errors = {
  EMPTY_FILE: {
    message: "The file is empty. Please choose a valid file.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "The file is too large. Please choose a smaller file, or use our compress-pdf tool to reduce the file size.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "The file is not a supported type.",
    types: {
      PDF: "Please choose a valid PDF file.",
      JPG: "Please choose a valid JPEG image file.",
      DOC: "Please choose a valid Word document file.",
      DOCX: "Please choose a valid Word document file.",
      XLS: "Please choose a valid Excel spreadsheet file.",
      XLSX: "Please choose a valid Excel spreadsheet file.",
      PPT: "Please choose a valid PowerPoint presentation file.",
      PPTX: "Please choose a valid PowerPoint presentation file.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "The file is corrupt and cannot be processed. Please choose a valid file.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "The file contains missing fontsand cannot be processed. Please ensure all fonts are embedded in the PDF file.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "The file contains invalid image data. Please ensure all images are properly formatted.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "The file contains a security risk and cannot be processed. Please choose a valid file.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "You have exceeded the maximum number of files allowed. Please delete some files and try again.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "No files selected. Please select at least one file.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "An unknown error occurred. Please try again later or contact support.",
    code: "ERR_UNKNOWN",
  },
  // i want another error like this but when only one file is uploaded
  ERR_NETWORK: {
    message:
      "A network error occurred. Please check your internet connection and try again.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Please upload at least two files to merge.",
    code: "ERR_UPLOAD_COUNT",
  },
};
