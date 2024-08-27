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
    title: "Convertir PSD a PDF",
    seoTitle: "Convertidor de PSD a PDF - Herramienta Gratis en Línea",
    description: "Convierte fácilmente tus archivos de Photoshop (PSD) en PDFs de alta calidad.",
    color: "#001833",
    type: ".psd",
    to: "/psd-to-pdf",
    features: [
      {
        title: "Conversión fluida de PSD a PDF",
        description: "Convierte tus archivos PSD a PDF manteniendo la calidad de tus imágenes y capas, garantizando un resultado profesional."
      },
      {
        title: "Conversión por lotes",
        description: "Convierte varios archivos PSD a PDF de una vez, ahorrando tiempo y esfuerzo."
      },
      {
        title: "Seguro y privado",
        description: "Tus archivos se procesan de manera segura sin necesidad de registrarse, asegurando que tu privacidad esté protegida."
      }
    ],
    keywords: "PSD a PDF, convertir PSD a PDF, convertidor gratuito de PSD a PDF, conversión de PSD a PDF en línea, Photoshop a PDF, conversión por lotes de PSD a PDF, PSD a PDF de alta calidad"
  },
  PDF_to_PSD: {
    title: "Convertir PDF a PSD",
    seoTitle: "Convertir PDF a PSD Gratis en Línea - Transformación Fácil y Rápida",
    description: "Transforma tus archivos PDF en archivos de Photoshop (PSD) editables con facilidad.",
    color: "#001833",
    type: ".pdf",
    to: "/pdf-to-psd",
    features: [
      {
        title: "Conversión de alta calidad de PDF a PSD",
        description: "Convierte tus documentos PDF en archivos PSD con capas, manteniendo todos los elementos visuales para una fácil edición en Photoshop."
      },
      {
        title: "Capas editables",
        description: "Cada elemento de tu PDF se convierte en una capa editable en el archivo PSD resultante, dándote control total sobre tu diseño."
      },
      {
        title: "Rápido y confiable",
        description: "Experimenta tiempos de conversión rápidos sin comprometer la calidad o la integridad de tus archivos."
      }
    ],
    keywords: "PDF a PSD, convertir PDF a PSD, convertidor gratuito de PDF a PSD, conversión de PDF a PSD en línea, PDF a Photoshop, extraer capas de PDF, PSD editable a partir de PDF, PDF a PSD con capas"
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
    pdf_to_psd: "Opciones de PDF a PSD",
    psd_to_pdf: "Opciones de PSD a PDF",
  },
  loader_text: "por favor espera...",
  add_more_button: "Agregar más archivos",
  action_buttons: {
    pdf_to_psd: "Convertir a PSD",
    psd_to_pdf: "Convertir a PDF",
  },
  pages: "páginas",
  page: "página",
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-psd": ["¡El archivo PDF se ha convertido a PSD!", "¡Los archivos PDF se han convertido a PSD!"],
    "psd-to-pdf": ["¡El archivo PSD se ha convertido a PDF!", "¡Los archivos PSD se han convertido a PDF!"],
  },

  btnText: {
    "pdf-to-psd": ["Descargar archivo PSD convertido", "Descargar archivos PSD convertidos"],
    "psd-to-pdf": ["Descargar archivo PDF convertido", "Descargar archivos PDF convertidos"],
  },

  backto: {
    "pdf-to-psd": "Volver a PDF a PSD",
    "psd-to-pdf": "Volver a PSD a PDF",
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
