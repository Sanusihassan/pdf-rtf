import { _howToSchemas } from "./how-to-en";

export const howToSchemas: _howToSchemas = {
  PDFToRTFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Comment Convertir un PDF en RTF",
    description: "Guide étape par étape pour convertir un fichier PDF au format RTF.",
    step: [
      {
        "@type": "HowToStep",
        name: "Étape 1",
        text: "Ouvrez l'outil PDF en RTF sur PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 2",
        text: "Glissez et déposez votre fichier PDF ou cliquez sur le bouton 'Sélectionner des fichiers PDF' pour choisir un fichier PDF depuis votre appareil.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 3",
        text: "Une fois le fichier téléchargé, cliquez sur le bouton 'Convertir PDF en RTF'.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 4",
        text: "Attendez la fin de la conversion, puis téléchargez le fichier RTF.",
      },
    ],
  },
  RTFToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Comment Convertir un RTF en PDF",
    description: "Guide étape par étape pour convertir un fichier RTF au format PDF.",
    step: [
      {
        "@type": "HowToStep",
        name: "Étape 1",
        text: "Ouvrez l'outil RTF en PDF sur PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 2",
        text: "Glissez et déposez votre fichier RTF ou cliquez sur le bouton 'Sélectionner des fichiers RTF' pour choisir un fichier RTF depuis votre appareil.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 3",
        text: "Une fois le fichier téléchargé, cliquez sur le bouton 'Convertir RTF en PDF'.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 4",
        text: "Attendez la fin de la conversion, puis téléchargez le fichier PDF.",
      },
    ],
  },
};
