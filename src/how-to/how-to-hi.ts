import { _howToSchemas } from "./how-to-en";

export const howToSchemas: _howToSchemas = {
  PDFToEPUBHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "PDF को EPUB में कैसे बदलें",
    description:
      "PDF फ़ाइल को EPUB प्रारूप में बदलने के लिए चरण-दर-चरण मार्गदर्शिका।",
    step: [
      {
        "@type": "HowToStep",
        name: "चरण 1",
        text: "PDFEquips पर PDF से EPUB बदलने का टूल खोलें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 2",
        text: "अपनी PDF फ़ाइल को खींचें और छोड़ें या अपने डिवाइस से PDF फ़ाइल चुनने के लिए 'PDF फ़ाइलें चुनें' बटन पर क्लिक करें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 3",
        text: "फ़ाइल अपलोड करने के बाद, 'PDF को EPUB में बदलें' बटन पर क्लिक करें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 4",
        text: "बदलाव की प्रक्रिया पूरी होने तक प्रतीक्षा करें, फिर EPUB फ़ाइल डाउनलोड करें।",
      },
    ],
  },
  EPUBToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "EPUB को PDF में कैसे बदलें",
    description:
      "EPUB फ़ाइल को PDF प्रारूप में बदलने के लिए चरण-दर-चरण मार्गदर्शिका।",
    step: [
      {
        "@type": "HowToStep",
        name: "चरण 1",
        text: "PDFEquips पर EPUB से PDF बदलने का टूल खोलें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 2",
        text: "अपनी EPUB फ़ाइल को खींचें और छोड़ें या अपने डिवाइस से EPUB फ़ाइल चुनने के लिए 'EPUB फ़ाइलें चुनें' बटन पर क्लिक करें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 3",
        text: "फ़ाइल अपलोड करने के बाद, 'EPUB को PDF में बदलें' बटन पर क्लिक करें।",
      },
      {
        "@type": "HowToStep",
        name: "चरण 4",
        text: "बदलाव की प्रक्रिया पूरी होने तक प्रतीक्षा करें, फिर PDF फ़ाइल डाउनलोड करें।",
      },
    ],
  },
};
