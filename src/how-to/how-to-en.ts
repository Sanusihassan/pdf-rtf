export type howToType = {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  step: {
    "@type": string;
    name: string;
    text: string;
    substeps: string[];
  }[];
};

export type _howToSchemas = typeof howToSchemas;
export const howToSchemas = {
  PDFToEPUBHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "How to Convert PDF to EPUB",
    description: "Step-by-step guide to convert a PDF file to an EPUB format.",
    step: [
      {
        "@type": "HowToStep",
        name: "Step 1",
        text: "Open the PDF to EPUB tool on PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Step 2",
        text: "Drag and drop your PDF file or click the 'Select PDF files' button to choose a PDF file from your device.",
      },
      {
        "@type": "HowToStep",
        name: "Step 3",
        text: "After the file is uploaded, click the 'Convert PDF to EPUB' button.",
      },
      {
        "@type": "HowToStep",
        name: "Step 4",
        text: "Wait for the conversion to complete, then download the EPUB file.",
      },
    ],
  },
  EPUBToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "How to Convert EPUB to PDF",
    description: "Step-by-step guide to convert an EPUB file to a PDF format.",
    step: [
      {
        "@type": "HowToStep",
        name: "Step 1",
        text: "Open the EPUB to PDF tool on PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Step 2",
        text: "Drag and drop your EPUB file or click the 'Select EPUB files' button to choose an EPUB file from your device.",
      },
      {
        "@type": "HowToStep",
        name: "Step 3",
        text: "After the file is uploaded, click the 'Convert EPUB to PDF' button.",
      },
      {
        "@type": "HowToStep",
        name: "Step 4",
        text: "Wait for the conversion to complete, then download the PDF file.",
      },
    ],
  },
};
