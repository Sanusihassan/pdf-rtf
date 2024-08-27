import { _howToSchemas } from "./how-to-en";

export const howToSchemas: _howToSchemas = {
  PDFToPSDHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "كيفية تحويل PDF إلى PSD",
    description: "دليل خطوة بخطوة لتحويل ملف PDF إلى تنسيق PSD.",
    step: [
      {
        "@type": "HowToStep",
        name: "الخطوة 1",
        text: "افتح أداة تحويل PDF إلى PSD على PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 2",
        text: "اسحب وأفلت ملف PDF الخاص بك أو انقر على زر 'اختيار ملفات PDF' لاختيار ملف PDF من جهازك.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 3",
        text: "بعد تحميل الملف، انقر على زر 'تحويل PDF إلى PSD'.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 4",
        text: "انتظر حتى تكتمل عملية التحويل، ثم قم بتنزيل ملف PSD.",
      },
    ],
  },
  PSDToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "كيفية تحويل PSD إلى PDF",
    description: "دليل خطوة بخطوة لتحويل ملف PSD إلى تنسيق PDF.",
    step: [
      {
        "@type": "HowToStep",
        name: "الخطوة 1",
        text: "افتح أداة تحويل PSD إلى PDF على PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 2",
        text: "اسحب وأفلت ملف PSD الخاص بك أو انقر على زر 'اختيار ملفات PSD' لاختيار ملف PSD من جهازك.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 3",
        text: "بعد تحميل الملف، انقر على زر 'تحويل PSD إلى PDF'.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 4",
        text: "انتظر حتى تكتمل عملية التحويل، ثم قم بتنزيل ملف PDF.",
      },
    ],
  },
};
