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
    title: "Convertir PSD en PDF",
    seoTitle: "Convertisseur PSD en PDF - Outil Gratuit en Ligne",
    description: "Convertissez facilement vos fichiers Photoshop (PSD) en PDFs de haute qualité.",
    color: "#001833",
    type: ".psd",
    to: "/psd-to-pdf",
    features: [
      {
        title: "Conversion fluide de PSD en PDF",
        description: "Convertissez vos fichiers PSD en PDF tout en préservant la qualité de vos images et de vos calques, garantissant un résultat professionnel."
      },
      {
        title: "Conversion par lots",
        description: "Convertissez plusieurs fichiers PSD en PDF en une seule fois, ce qui vous fait gagner du temps et des efforts."
      },
      {
        title: "Sécurisé et privé",
        description: "Vos fichiers sont traités en toute sécurité sans besoin d'inscription, garantissant la protection de votre vie privée."
      }
    ],
    keywords: "PSD en PDF, convertir PSD en PDF, convertisseur PSD en PDF gratuit, conversion PSD en PDF en ligne, Photoshop en PDF, conversion par lots de PSD en PDF, PSD en PDF de haute qualité"
  },
  PDF_to_PSD: {
    title: "Convertir PDF en PSD",
    seoTitle: "Convertir PDF en PSD Gratuit en Ligne - Transformation Facile et Rapide",
    description: "Transformez vos fichiers PDF en fichiers Photoshop (PSD) modifiables avec facilité.",
    color: "#001833",
    type: ".pdf",
    to: "/pdf-to-psd",
    features: [
      {
        title: "Conversion de haute qualité de PDF en PSD",
        description: "Convertissez vos documents PDF en fichiers PSD avec calques, tout en conservant tous les éléments visuels pour une édition facile dans Photoshop."
      },
      {
        title: "Calques modifiables",
        description: "Chaque élément de votre PDF est converti en un calque modifiable dans le fichier PSD résultant, vous donnant un contrôle total sur votre design."
      },
      {
        title: "Rapide et fiable",
        description: "Profitez de temps de conversion rapides sans compromettre la qualité ou l'intégrité de vos fichiers."
      }
    ],
    keywords: "PDF en PSD, convertir PDF en PSD, convertisseur gratuit de PDF en PSD, conversion de PDF en PSD en ligne, PDF en Photoshop, extraire des calques de PDF, PSD modifiable à partir de PDF, PDF en PSD avec calques"
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
    pdf_to_psd: "Options de PDF en PSD",
    psd_to_pdf: "Options de PSD en PDF",
  },
  loader_text: "veuillez patienter...",
  add_more_button: "Ajouter plus de fichiers",
  action_buttons: {
    pdf_to_psd: "Convertir en PSD",
    psd_to_pdf: "Convertir en PDF",
  },
  pages: "pages",
  page: "page",
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-psd": ["Le fichier PDF a été converti en PSD !", "Les fichiers PDF ont été convertis en PSD !"],
    "psd-to-pdf": ["Le fichier PSD a été converti en PDF !", "Les fichiers PSD ont été convertis en PDF !"],
  },

  btnText: {
    "pdf-to-psd": ["Télécharger le fichier PSD converti", "Télécharger les fichiers PSD convertis"],
    "psd-to-pdf": ["Télécharger le fichier PDF converti", "Télécharger les fichiers PDF convertis"],
  },

  backto: {
    "pdf-to-psd": "Retour à PDF en PSD",
    "psd-to-pdf": "Retour à PSD en PDF",
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
