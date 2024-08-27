export const tool = {
  PSD_to_PDF: {
    title: "Convert PSD to PDF",
    seoTitle: "PSD to PDF Converter - Free Online Tool",
    description: "Easily convert your Photoshop files (PSD) to high-quality PDFs.",
    color: "#001833",
    type: ".psd",
    to: "/psd-to-pdf",
    features: [
      {
        title: "Seamless PSD to PDF Conversion",
        description: "Convert your PSD files to PDF while preserving the quality of your images and layers, ensuring a professional output."
      },
      {
        title: "Batch Conversion",
        description: "Convert multiple PSD files to PDF in one go, saving time and effort."
      },
      {
        title: "Secure and Private",
        description: "Your files are processed securely with no need for registration, ensuring your privacy is protected."
      }
    ],
    keywords: "PSD to PDF, convert PSD to PDF, free PSD to PDF converter, online PSD to PDF conversion, Photoshop to PDF, batch PSD to PDF, high-quality PSD to PDF"
  },
  PDF_to_PSD: {
    title: "Convert PDF to PSD",
    seoTitle: "Convert PDF to PSD Free Online - Easy & Fast Transformation",
    description: "Transform your PDF files into editable Photoshop (PSD) files with ease.",
    color: "#001833",
    type: ".pdf",
    to: "/pdf-to-psd",
    features: [
      {
        title: "High-Quality PDF to PSD Conversion",
        description: "Convert your PDF documents into layered PSD files, retaining all visual elements for easy editing in Photoshop."
      },
      {
        title: "Editable Layers",
        description: "Each element of your PDF is converted into an editable layer in the resulting PSD file, giving you full control over your design."
      },
      {
        title: "Fast and Reliable",
        description: "Experience quick conversion times without compromising the quality or integrity of your files."
      }
    ],
    keywords: "PDF to PSD, convert PDF to PSD, free PDF to PSD converter, online PDF to PSD conversion, PDF to Photoshop, extract layers from PDF, editable PSD from PDF, PDF to layered PSD"
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
    pdf_to_psd: "PDF to PSD options",
    psd_to_pdf: "PSD to PDF options",
  },
  loader_text: "please wait...",
  add_more_button: "Add more files",
  action_buttons: {
    pdf_to_psd: "Convert to PSD",
    psd_to_pdf: "Convert to PDF",
  },
  pages: "pages",
  page: "page",
};

export const downloadFile = {
  titles: {
    "pdf-to-psd": ["PDF file has been converted to PSD!", "PDF files have been converted to PSD!"],
    "psd-to-pdf": ["PSD file has been converted to PDF!", "PSD files have been converted to PDF!"],
  },

  btnText: {
    "pdf-to-psd": ["Download Converted PSD file", "Download Converted PSD files"],
    "psd-to-pdf": ["Download Converted PDF file", "Download Converted PDF files"],
  },

  backto: {
    "pdf-to-psd": "Back To PDF to PSD",
    "psd-to-pdf": "Back To PSD to PDF",
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
