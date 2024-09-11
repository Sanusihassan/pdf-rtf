import { _howToSchemas } from "./how-to-en";

export const howToSchemas: _howToSchemas = {
  PDFToRTFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "PDF को RTF में कैसे बदलें",
    description: "PDF फ़ाइल को RTF प्रारूप में बदलने के लिए चरण-दर-चरण मार्गदर्शिका।",
    step: [
      {
        "@type": "HowToStep",
        name: "चरण 1",
        text: "PDFEquips पर PDF को RTF में बदलने वाले टूल को खोलें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 2",
        text: "अपनी PDF फ़ाइल को खींचकर छोड़ें या अपने डिवाइस से PDF फ़ाइल चुनने के लिए 'PDF फ़ाइलें चुनें' बटन पर क्लिक करें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 3",
        text: "फ़ाइल अपलोड होने के बाद, 'PDF को RTF में बदलें' बटन पर क्लिक करें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 4",
        text: "रूपांतरण पूर्ण होने की प्रतीक्षा करें, फिर RTF फ़ाइल डाउनलोड करें।",
      },
    ],
  },
  RTFToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "RTF को PDF में कैसे बदलें",
    description: "RTF फ़ाइल को PDF प्रारूप में बदलने के लिए चरण-दर-चरण मार्गदर्शिका।",
    step: [
      {
        "@type": "HowToStep",
        name: "चरण 1",
        text: "PDFEquips पर RTF को PDF में बदलने वाले टूल को खोलें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 2",
        text: "अपनी RTF फ़ाइल को खींचकर छोड़ें या अपने डिवाइस से RTF फ़ाइल चुनने के लिए 'RTF फ़ाइलें चुनें' बटन पर क्लिक करें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 3",
        text: "फ़ाइल अपलोड होने के बाद, 'RTF को PDF में बदलें' बटन पर क्लिक करें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 4",
        text: "रूपांतरण पूर्ण होने की प्रतीक्षा करें, फिर PDF फ़ाइल डाउनलोड करें।",
      },
    ],
  },
};
