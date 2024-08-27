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
  PDFToPSDHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "How to Convert PDF to PSD",
    description: "Step-by-step guide to convert a PDF file to a PSD format.",
    step: [
      {
        "@type": "HowToStep",
        name: "Step 1",
        text: "Open the PDF to PSD tool on PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Step 2",
        text: "Drag and drop your PDF file or click the 'Select PDF files' button to choose a PDF file from your device.",
      },
      {
        "@type": "HowToStep",
        name: "Step 3",
        text: "After the file is uploaded, click the 'Convert PDF to PSD' button.",
      },
      {
        "@type": "HowToStep",
        name: "Step 4",
        text: "Wait for the conversion to complete, then download the PSD file.",
      },
    ],
  },
  PSDToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "How to Convert PSD to PDF",
    description: "Step-by-step guide to convert a PSD file to a PDF format.",
    step: [
      {
        "@type": "HowToStep",
        name: "Step 1",
        text: "Open the PSD to PDF tool on PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Step 2",
        text: "Drag and drop your PSD file or click the 'Select PSD files' button to choose a PSD file from your device.",
      },
      {
        "@type": "HowToStep",
        name: "Step 3",
        text: "After the file is uploaded, click the 'Convert PSD to PDF' button.",
      },
      {
        "@type": "HowToStep",
        name: "Step 4",
        text: "Wait for the conversion to complete, then download the PDF file.",
      },
    ],
  },
};
