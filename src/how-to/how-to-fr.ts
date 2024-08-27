import { _howToSchemas } from "./how-to-en";

export const howToSchemas: _howToSchemas = {
  PDFToPSDHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Comment Convertir PDF en PSD",
    description: "Guide étape par étape pour convertir un fichier PDF au format PSD.",
    step: [
      {
        "@type": "HowToStep",
        name: "Étape 1",
        text: "Ouvrez l'outil PDF en PSD sur PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 2",
        text: "Faites glisser et déposer votre fichier PDF ou cliquez sur le bouton 'Sélectionner des fichiers PDF' pour choisir un fichier PDF depuis votre appareil.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 3",
        text: "Une fois le fichier téléchargé, cliquez sur le bouton 'Convertir PDF en PSD'.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 4",
        text: "Attendez que la conversion soit terminée, puis téléchargez le fichier PSD.",
      },
    ],
  },
  PSDToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Comment Convertir PSD en PDF",
    description: "Guide étape par étape pour convertir un fichier PSD au format PDF.",
    step: [
      {
        "@type": "HowToStep",
        name: "Étape 1",
        text: "Ouvrez l'outil PSD en PDF sur PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 2",
        text: "Faites glisser et déposer votre fichier PSD ou cliquez sur le bouton 'Sélectionner des fichiers PSD' pour choisir un fichier PSD depuis votre appareil.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 3",
        text: "Une fois le fichier téléchargé, cliquez sur le bouton 'Convertir PSD en PDF'.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 4",
        text: "Attendez que la conversion soit terminée, puis téléchargez le fichier PDF.",
      },
    ],
  },
};
