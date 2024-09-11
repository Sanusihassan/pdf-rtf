import { _howToSchemas } from "./how-to-en";

export const howToSchemas: _howToSchemas = {
  PDFToRTFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Cómo Convertir PDF a RTF",
    description: "Guía paso a paso para convertir un archivo PDF a formato RTF.",
    step: [
      {
        "@type": "HowToStep",
        name: "Paso 1",
        text: "Abre la herramienta PDF a RTF en PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 2",
        text: "Arrastra y suelta tu archivo PDF o haz clic en el botón 'Seleccionar archivos PDF' para elegir un archivo PDF desde tu dispositivo.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 3",
        text: "Después de cargar el archivo, haz clic en el botón 'Convertir PDF a RTF'.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 4",
        text: "Espera a que se complete la conversión y luego descarga el archivo RTF.",
      },
    ],
  },
  RTFToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Cómo Convertir RTF a PDF",
    description: "Guía paso a paso para convertir un archivo RTF a formato PDF.",
    step: [
      {
        "@type": "HowToStep",
        name: "Paso 1",
        text: "Abre la herramienta RTF a PDF en PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 2",
        text: "Arrastra y suelta tu archivo RTF o haz clic en el botón 'Seleccionar archivos RTF' para elegir un archivo RTF desde tu dispositivo.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 3",
        text: "Después de cargar el archivo, haz clic en el botón 'Convertir RTF a PDF'.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 4",
        text: "Espera a que se complete la conversión y luego descarga el archivo PDF.",
      },
    ],
  },
};
