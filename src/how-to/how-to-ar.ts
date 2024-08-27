import { _howToSchemas } from "./how-to-en";

export const howToSchemas: _howToSchemas = {
  PDFToEPUBHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "كيفية تحويل PDF إلى EPUB",
    description: "دليل خطوة بخطوة لتحويل ملف PDF إلى تنسيق EPUB.",
    step: [
      {
        "@type": "HowToStep",
        name: "الخطوة 1",
        text: "افتح أداة تحويل PDF إلى EPUB على PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 2",
        text: "قم بسحب وإفلات ملف PDF الخاص بك أو انقر فوق زر 'تحديد ملفات PDF' لاختيار ملف PDF من جهازك.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 3",
        text: "بعد تحميل الملف، انقر فوق زر 'تحويل PDF إلى EPUB'.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 4",
        text: "انتظر حتى تكتمل عملية التحويل، ثم قم بتنزيل ملف EPUB.",
      },
    ],
  },
  EPUBToPDFHowTo: {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "كيفية تحويل EPUB إلى PDF",
    description: "دليل خطوة بخطوة لتحويل ملف EPUB إلى تنسيق PDF.",
    step: [
      {
        "@type": "HowToStep",
        name: "الخطوة 1",
        text: "افتح أداة تحويل EPUB إلى PDF على PDFEquips.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 2",
        text: "قم بسحب وإفلات ملف EPUB الخاص بك أو انقر فوق زر 'تحديد ملفات EPUB' لاختيار ملف EPUB من جهازك.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 3",
        text: "بعد تحميل الملف، انقر فوق زر 'تحويل EPUB إلى PDF'.",
      },
      {
        "@type": "HowToStep",
        name: "الخطوة 4",
        text: "انتظر حتى تكتمل عملية التحويل، ثم قم بتنزيل ملف PDF.",
      },
    ],
  },
};
