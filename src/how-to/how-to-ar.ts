import { _howToSchemas } from "./how-to-en";

export const howToSchemas: _howToSchemas = {
  PDFToRTFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "كيفية تحويل PDF إلى RTF",
    description: "دليل خطوة بخطوة لتحويل ملف PDF إلى تنسيق RTF.",
    step: [
      {
        "@type": "HowToStep",
        name: "الخطوة 1",
        text: "افتح أداة تحويل PDF إلى RTF على PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 2",
        text: "اسحب وأفلت ملف PDF الخاص بك أو انقر على زر 'اختيار ملفات PDF' لاختيار ملف PDF من جهازك.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 3",
        text: "بعد تحميل الملف، انقر على زر 'تحويل PDF إلى RTF'.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 4",
        text: "انتظر حتى يكتمل التحويل، ثم قم بتنزيل ملف RTF.",
      },
    ],
  },
  RTFToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "كيفية تحويل RTF إلى PDF",
    description: "دليل خطوة بخطوة لتحويل ملف RTF إلى تنسيق PDF.",
    step: [
      {
        "@type": "HowToStep",
        name: "الخطوة 1",
        text: "افتح أداة تحويل RTF إلى PDF على PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 2",
        text: "اسحب وأفلت ملف RTF الخاص بك أو انقر على زر 'اختيار ملفات RTF' لاختيار ملف RTF من جهازك.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 3",
        text: "بعد تحميل الملف، انقر على زر 'تحويل RTF إلى PDF'.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 4",
        text: "انتظر حتى يكتمل التحويل، ثم قم بتنزيل ملف PDF.",
      },
    ],
  },
};
