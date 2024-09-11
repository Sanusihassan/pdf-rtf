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
    title: "Convertir PDF en RTF",
    seoTitle: "Convertisseur de PDF en RTF - Outil en ligne gratuit",
    description: "Convertissez facilement vos fichiers PDF en format texte enrichi (RTF) pour de meilleures options d'édition.",
    color: "#1B9CFC",
    type: ".pdf",
    to: "/pdf-to-rtf",
    features: [
      {
        title: "Conversion de PDF en RTF de haute qualité",
        description: "Convertissez des documents PDF en fichiers RTF entièrement éditables tout en conservant la mise en page et la structure de texte d'origine."
      },
      {
        title: "Préservation du formatage",
        description: "Conservez les polices, styles et mises en page originaux de votre PDF lors de la conversion en RTF pour une expérience d'édition fluide."
      },
      {
        title: "Compatibilité multiplateforme",
        description: "Les fichiers RTF sont compatibles avec une large gamme de traitements de texte, ce qui les rend faciles à utiliser sur diverses plateformes."
      }
    ],
    keywords: "PDF en RTF, convertir PDF en RTF, convertisseur gratuit de PDF en RTF, conversion PDF en RTF en ligne, PDF modifiable en RTF, format texte enrichi, document PDF en RTF"
  },
  RTF_to_PDF: {
    title: "Convertir RTF en PDF",
    seoTitle: "Convertisseur de RTF en PDF - Outil en ligne gratuit",
    description: "Convertissez facilement vos fichiers au format texte enrichi (RTF) en documents PDF de haute qualité.",
    color: "#1B9CFC",
    type: ".rtf",
    to: "/rtf-to-pdf",
    features: [
      {
        title: "Conversion de RTF en PDF sans effort",
        description: "Convertissez rapidement vos fichiers RTF en documents PDF professionnels tout en préservant la mise en page d'origine."
      },
      {
        title: "Conservez la mise en page et le formatage",
        description: "Conservez toutes les polices, styles et mises en page de votre fichier RTF intacts pendant le processus de conversion."
      },
      {
        title: "Compatibilité universelle",
        description: "Les fichiers PDF peuvent être ouverts sur n'importe quel appareil, garantissant ainsi l'accessibilité de vos documents."
      }
    ],
    keywords: "RTF en PDF, convertir RTF en PDF, convertisseur gratuit de RTF en PDF, conversion RTF en PDF en ligne, texte enrichi en PDF, conversion par lots de RTF en PDF"
  }
};


export const tools: _tools = {
  select: "Sélectionner",
  or_drop: "ou déposer des fichiers ici",
  files: "fichiers",
  drop_files: "Déposez les fichiers ici",
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    pdf_to_rtf: "Options de PDF en RTF",
    rtf_to_pdf: "Options de RTF en PDF",
  },
  loader_text: "veuillez patienter...",
  add_more_button: "Ajouter plus de fichiers",
  action_buttons: {
    pdf_to_rtf: "Convertir en RTF",
    rtf_to_pdf: "Convertir en PDF",
  },
  pages: "pages",
  page: "page",
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-rtf": ["Le fichier PDF a été converti en RTF !", "Les fichiers PDF ont été convertis en RTF !"],
    "rtf-to-pdf": ["Le fichier RTF a été converti en PDF !", "Les fichiers RTF ont été convertis en PDF !"],
  },

  btnText: {
    "pdf-to-rtf": ["Télécharger le fichier RTF converti", "Télécharger les fichiers convertis en RTF"],
    "rtf-to-pdf": ["Télécharger le fichier PDF converti", "Télécharger les fichiers convertis en PDF"],
  },

  backto: {
    "pdf-to-rtf": "Retour à PDF en RTF",
    "rtf-to-pdf": "Retour à RTF en PDF",
  },
};


export const footer: _footer = {
  brand: "PDFEquips",
  terms: "conditions",
  conditions: "conditions d'utilisation",
  privacy_policy: "politique de confidentialité",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "Le fichier est vide. Veuillez choisir un fichier valide.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "Le fichier est trop volumineux. Veuillez choisir un fichier plus petit ou utiliser notre outil de compression PDF pour réduire la taille du fichier.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "Le fichier n'est pas d'un type pris en charge.",
    types: {
      PDF: "Veuillez choisir un fichier PDF valide.",
      JPG: "Veuillez choisir un fichier d'image JPEG valide.",
      DOC: "Veuillez choisir un fichier de document Word valide.",
      DOCX: "Veuillez choisir un fichier de document Word valide.",
      XLS: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      XLSX: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      PPT: "Veuillez choisir un fichier de présentation PowerPoint valide.",
      PPTX: "Veuillez choisir un fichier de présentation PowerPoint valide.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "Le fichier contient des polices manquantes. Veuillez vous assurer que toutes les polices sont intégrées dans le fichier PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "Le fichier contient des données d'image non valides. Veuillez vous assurer que toutes les images sont correctement formatées.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "Le fichier contient un risque de sécurité et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Vous avez dépassé le nombre maximal de fichiers autorisés. Veuillez supprimer certains fichiers et réessayer.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "Aucun fichier sélectionné. Veuillez sélectionner au moins un fichier.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Une erreur inconnue s'est produite. Veuillez réessayer plus tard ou contacter le support.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Une erreur de réseau s'est produite. Veuillez vérifier votre connexion Internet et réessayer.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Veuillez télécharger au moins deux fichiers à fusionner.",
    code: "ERR_UPLOAD_COUNT",
  },
};
