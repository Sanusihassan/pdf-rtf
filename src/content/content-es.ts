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
    title: "Convertir PDF a RTF",
    seoTitle: "Convertidor de PDF a RTF - Herramienta gratuita en línea",
    description: "Convierte fácilmente tus archivos PDF a formato de texto enriquecido (RTF) para mejores opciones de edición.",
    color: "#1B9CFC",
    type: ".pdf",
    to: "/pdf-to-rtf",
    features: [
      {
        title: "Conversión de PDF a RTF de alta calidad",
        description: "Convierte documentos PDF en archivos RTF totalmente editables manteniendo el formato original y la estructura del texto."
      },
      {
        title: "Conserva el formato",
        description: "Mantén las fuentes, estilos y diseños originales de tu PDF al convertir a RTF para una experiencia de edición fluida."
      },
      {
        title: "Compatibilidad multiplataforma",
        description: "Los archivos RTF son compatibles con una amplia gama de procesadores de texto, lo que los hace fáciles de usar en diversas plataformas."
      }
    ],
    keywords: "PDF a RTF, convertir PDF a RTF, convertidor gratuito de PDF a RTF, conversión de PDF a RTF en línea, PDF editable a RTF, formato de texto enriquecido, documento PDF a RTF"
  },
  RTF_to_PDF: {
    title: "Convertir RTF a PDF",
    seoTitle: "Convertidor de RTF a PDF - Herramienta gratuita en línea",
    description: "Convierte fácilmente tus archivos de formato de texto enriquecido (RTF) en documentos PDF de alta calidad.",
    color: "#1B9CFC",
    type: ".rtf",
    to: "/rtf-to-pdf",
    features: [
      {
        title: "Conversión de RTF a PDF sin esfuerzo",
        description: "Convierte rápidamente tus archivos RTF en documentos PDF profesionales manteniendo el formato original."
      },
      {
        title: "Conserva el formato y el diseño",
        description: "Mantén todas las fuentes, estilos y diseños de tu archivo RTF intactos durante el proceso de conversión."
      },
      {
        title: "Compatibilidad universal",
        description: "Los archivos PDF se pueden abrir en cualquier dispositivo, lo que garantiza que tus documentos sean fácilmente accesibles."
      }
    ],
    keywords: "RTF a PDF, convertir RTF a PDF, convertidor gratuito de RTF a PDF, conversión de RTF a PDF en línea, texto enriquecido a PDF, conversión por lotes de RTF a PDF"
  }
};

export const tools: _tools = {
  select: "Seleccionar",
  or_drop: "o soltar archivos aquí",
  files: "archivos",
  drop_files: "Arrastra los archivos aquí",
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_rtf: "Opciones de PDF a RTF",
    rtf_to_pdf: "Opciones de RTF a PDF",
  },
  loader_text: "por favor espera...",
  add_more_button: "Agregar más archivos",
  action_buttons: {
    pdf_to_rtf: "Convertir a RTF",
    rtf_to_pdf: "Convertir a PDF",
  },
  pages: "páginas",
  page: "página",
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-rtf": ["¡El archivo PDF ha sido convertido a RTF!", "¡Los archivos PDF han sido convertidos a RTF!"],
    "rtf-to-pdf": ["¡El archivo RTF ha sido convertido a PDF!", "¡Los archivos RTF han sido convertidos a PDF!"],
  },

  btnText: {
    "pdf-to-rtf": ["Descargar archivo RTF convertido", "Descargar archivos convertidos a RTF"],
    "rtf-to-pdf": ["Descargar archivo PDF convertido", "Descargar archivos convertidos a PDF"],
  },

  backto: {
    "pdf-to-rtf": "Volver a PDF a RTF",
    "rtf-to-pdf": "Volver a RTF a PDF",
  },
};



export const footer: _footer = {
  brand: "PDFEquips",
  terms: "términos",
  conditions: "condiciones",
  privacy_policy: "política de privacidad",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "El archivo está vacío. Por favor, elija un archivo válido.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "El archivo es demasiado grande. Por favor, elija un archivo más pequeño o use nuestra herramienta de compresión de PDF para reducir el tamaño del archivo.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "El archivo no es un tipo compatible.",
    types: {
      PDF: "Por favor, elija un archivo PDF válido.",
      JPG: "Por favor, elija un archivo de imagen JPEG válido.",
      DOC: "Por favor, elija un archivo de documento de Word válido.",
      DOCX: "Por favor, elija un archivo de documento de Word válido.",
      XLS: "Por favor, elija un archivo de hoja de cálculo de Excel válido.",
      XLSX: "Por favor, elija un archivo de hoja de cálculo de Excel válido.",
      PPT: "Por favor, elija un archivo de presentación de PowerPoint válido.",
      PPTX: "Por favor, elija un archivo de presentación de PowerPoint válido.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "El archivo estácorrupto y no se puede procesar. Por favor, elija un archivo válido.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "El archivo contiene fuentes faltantes. Por favor, asegúrese de que todas las fuentes estén incrustadas en el archivo PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "El archivo contiene datos de imagen no válidos. Por favor, asegúrese de que todas las imágenes estén correctamente formateadas.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "El archivo contiene un riesgo de seguridad y no se puede procesar. Por favor, elija un archivo válido.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Ha excedido el número máximo de archivos permitidos. Por favor, elimine algunos archivos e intente nuevamente.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "No se han seleccionado archivos. Por favor, seleccione al menos un archivo.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Ha ocurrido un error desconocido. Por favor, inténtelo de nuevo más tarde o contacte al soporte.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Ha ocurrido un error en la red. Por favor, comprueba tu conexión a internet e inténtalo de nuevo.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Por favor, suba al menos dos archivos para fusionar.",
    code: "ERR_UPLOAD_COUNT",
  },
};
