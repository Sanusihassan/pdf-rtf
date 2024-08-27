import { _howToSchemas } from "./how-to-en";

export const howToSchemas: _howToSchemas = {
  PDFToPSDHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "PDF को PSD में कैसे बदलें",
    description: "एक PDF फ़ाइल को PSD प्रारूप में बदलने के लिए चरण-दर-चरण मार्गदर्शिका।",
    step: [
      {
        "@type": "HowToStep",
        name: "चरण 1",
        text: "PDFEquips पर PDF से PSD टूल खोलें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 2",
        text: "अपने PDF फ़ाइल को खींचें और छोड़ें या 'PDF फ़ाइलें चुनें' बटन पर क्लिक करें और अपने डिवाइस से PDF फ़ाइल चुनें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 3",
        text: "फ़ाइल अपलोड होने के बाद, 'PDF को PSD में बदलें' बटन पर क्लिक करें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 4",
        text: "परिवर्तन पूरा होने का इंतजार करें, फिर PSD फ़ाइल डाउनलोड करें।",
      },
    ],
  },
  PSDToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "PSD को PDF में कैसे बदलें",
    description: "एक PSD फ़ाइल को PDF प्रारूप में बदलने के लिए चरण-दर-चरण मार्गदर्शिका।",
    step: [
      {
        "@type": "HowToStep",
        name: "चरण 1",
        text: "PDFEquips पर PSD से PDF टूल खोलें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 2",
        text: "अपने PSD फ़ाइल को खींचें और छोड़ें या 'PSD फ़ाइलें चुनें' बटन पर क्लिक करें और अपने डिवाइस से PSD फ़ाइल चुनें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 3",
        text: "फ़ाइल अपलोड होने के बाद, 'PSD को PDF में बदलें' बटन पर क्लिक करें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 4",
        text: "परिवर्तन पूरा होने का इंतजार करें, फिर PDF फ़ाइल डाउनलोड करें।",
      },
    ],
  },
};
