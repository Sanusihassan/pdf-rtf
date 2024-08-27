import { _howToSchemas } from "./how-to-en";

export const howToSchemas: _howToSchemas = {
  PDFToEPUBHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Comment convertir un PDF en EPUB",
    description:
      "Guide étape par étape pour convertir un fichier PDF au format EPUB.",
    step: [
      {
        "@type": "HowToStep",
        name: "Étape 1",
        text: "Ouvrez l'outil de conversion de PDF en EPUB sur PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 2",
        text: "Glissez et déposez votre fichier PDF ou cliquez sur le bouton 'Sélectionner des fichiers PDF' pour choisir un fichier PDF depuis votre appareil.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 3",
        text: "Après avoir téléchargé le fichier, cliquez sur le bouton 'Convertir PDF en EPUB'.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 4",
        text: "Attendez que la conversion se termine, puis téléchargez le fichier EPUB.",
      },
    ],
  },
  EPUBToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Comment convertir un EPUB en PDF",
    description:
      "Guide étape par étape pour convertir un fichier EPUB au format PDF.",
    step: [
      {
        "@type": "HowToStep",
        name: "Étape 1",
        text: "Ouvrez l'outil de conversion de EPUB en PDF sur PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 2",
        text: "Glissez et déposez votre fichier EPUB ou cliquez sur le bouton 'Sélectionner des fichiers EPUB' pour choisir un fichier EPUB depuis votre appareil.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 3",
        text: "Après avoir téléchargé le fichier, cliquez sur le bouton 'Convertir EPUB en PDF'.",
      },
      {
        "@type": "HowToStep",
        name: "Étape 4",
        text: "Attendez que la conversion se termine, puis téléchargez le fichier PDF.",
      },
    ],
  },
};
