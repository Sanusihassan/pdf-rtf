export const tool = {
  Compress_PDF: {
    title: "Compress PDF",
    seoTitle: "Compress PDFs Online - Free File Size Reducer",
    description: "Reduce the file size of a PDF while maintaining quality",
    color: "var(--green)",
    type: ".pdf",
    to: "/compress-pdf",
    features: [
      {
        title: "Versatile PDF Compression",
        description: "Get fast and reliable results that you can count on every time, Choose from a range of compression levels to adjust your file size without compromising document quality"
      },
      {
        title: "No need for email registration",
        description: "Start compressing your PDFs right away - no email sign-up, no need for credit card details Just upload your document and compress it as needed"
      },
      {
        title: "Maintaining quality all the time",
        description: "PDFEquips uses advanced technology to optimize both the size and quality of images in your PDFs This ensures that you achieve significantly smaller file sizes without compromising the fidelity of your documents"
      }
    ],
    keywords: "compress PDF, compress PDF online, reduce PDF file size, free PDF compression, PDF file compressor, online PDF compressor, PDF compression tool, PDF size reduction, PDF file size reducer, compress PDF documents, shrink PDF files, secure PDF compression, PDF optimizer, compress PDFs for free, online PDF file compressor, no registration PDF compression, reduce PDF size online, free PDF shrinker, fast PDF compression"
  },
};

export const edit_page = {
  edit_page_titles: {
    merge_pdf: "Merge PDF options",
  },
  loader_text: "please wait...",
  add_more_button: "Add more files",
  action_buttons: {
    merge_pdf: "Merge PDF",
  },
  pages: "pages",
  page: "page",
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};

export const downloadFile = {
  titles: {
    "merge-pdf": ["PDF files have been merged!", "PDF file has been merged!"],
  },

  btnText: {
    "merge-pdf": ["Download Merged PDF files", "Download Merged PDF file"],
  },

  backto: {
    "merge-pdf": "Back To Merge PDF",
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
