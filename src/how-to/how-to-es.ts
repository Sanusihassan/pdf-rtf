import { _howToSchemas } from "./how-to-en";

export const howToSchemas: _howToSchemas = {
  PDFToEPUBHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Cómo convertir PDF a EPUB",
    description:
      "Guía paso a paso para convertir un archivo PDF a formato EPUB.",
    step: [
      {
        "@type": "HowToStep",
        name: "Paso 1",
        text: "Abre la herramienta de conversión de PDF a EPUB en PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 2",
        text: "Arrastra y suelta tu archivo PDF o haz clic en el botón 'Seleccionar archivos PDF' para elegir un archivo PDF desde tu dispositivo.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 3",
        text: "Después de cargar el archivo, haz clic en el botón 'Convertir PDF a EPUB'.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 4",
        text: "Espera a que se complete la conversión y luego descarga el archivo EPUB.",
      },
    ],
  },
  EPUBToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Cómo convertir EPUB a PDF",
    description:
      "Guía paso a paso para convertir un archivo EPUB a formato PDF.",
    step: [
      {
        "@type": "HowToStep",
        name: "Paso 1",
        text: "Abre la herramienta de conversión de EPUB a PDF en PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 2",
        text: "Arrastra y suelta tu archivo EPUB o haz clic en el botón 'Seleccionar archivos EPUB' para elegir un archivo EPUB desde tu dispositivo.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 3",
        text: "Después de cargar el archivo, haz clic en el botón 'Convertir EPUB a PDF'.",
      },
      {
        "@type": "HowToStep",
        name: "Paso 4",
        text: "Espera a que se complete la conversión y luego descarga el archivo PDF.",
      },
    ],
  },
};
