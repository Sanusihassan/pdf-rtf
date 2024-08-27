import { _howToSchemas } from "./how-to-en";

export const howToSchemas: _howToSchemas = {
  PDFToPSDHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Cómo Convertir PDF a PSD",
    description: "Guía paso a paso para convertir un archivo PDF a formato PSD.",
    step: [
      {
        "@type": "HowToStep",
        name: "Paso 1",
        text: "Abre la herramienta de PDF a PSD en PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 2",
        text: "Arrastra y suelta tu archivo PDF o haz clic en el botón 'Seleccionar archivos PDF' para elegir un archivo PDF desde tu dispositivo.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 3",
        text: "Una vez que el archivo esté cargado, haz clic en el botón 'Convertir PDF a PSD'.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 4",
        text: "Espera a que se complete la conversión y luego descarga el archivo PSD.",
      },
    ],
  },
  PSDToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Cómo Convertir PSD a PDF",
    description: "Guía paso a paso para convertir un archivo PSD a formato PDF.",
    step: [
      {
        "@type": "HowToStep",
        name: "Paso 1",
        text: "Abre la herramienta de PSD a PDF en PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 2",
        text: "Arrastra y suelta tu archivo PSD o haz clic en el botón 'Seleccionar archivos PSD' para elegir un archivo PSD desde tu dispositivo.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 3",
        text: "Una vez que el archivo esté cargado, haz clic en el botón 'Convertir PSD a PDF'.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 4",
        text: "Espera a que se complete la conversión y luego descarga el archivo PDF.",
      },
    ],
  },
};
