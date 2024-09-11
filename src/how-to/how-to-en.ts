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
  PDFToRTFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "How to Convert PDF to RTF",
    description: "Step-by-step guide to convert a PDF file to a RTF format.",
    step: [
      {
        "@type": "HowToStep",
        name: "Step 1",
        text: "Open the PDF to RTF tool on PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Step 2",
        text: "Drag and drop your PDF file or click the 'Select PDF files' button to choose a PDF file from your device.",
      },
      {
        "@type": "HowToStep",
        name: "Step 3",
        text: "After the file is uploaded, click the 'Convert PDF to RTF' button.",
      },
      {
        "@type": "HowToStep",
        name: "Step 4",
        text: "Wait for the conversion to complete, then download the RTF file.",
      },
    ],
  },
  RTFToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "How to Convert RTF to PDF",
    description: "Step-by-step guide to convert a RTF file to a PDF format.",
    step: [
      {
        "@type": "HowToStep",
        name: "Step 1",
        text: "Open the RTF to PDF tool on PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "Step 2",
        text: "Drag and drop your RTF file or click the 'Select RTF files' button to choose a RTF file from your device.",
      },
      {
        "@type": "HowToStep",
        name: "Step 3",
        text: "After the file is uploaded, click the 'Convert RTF to PDF' button.",
      },
      {
        "@type": "HowToStep",
        name: "Step 4",
        text: "Wait for the conversion to complete, then download the PDF file.",
      },
    ],
  },
};
