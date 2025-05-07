const typographyDescriptions: {
  mainDescription: string;
  variantsDescription: string;
  semanticElementsDescription: string;
  customizationDescription: string;
  argDescription: {
    children: string;
    component: string;
  };
} = {
  mainDescription: `این کامپوننت برای ساخت موارد متنی استفاده می شود. ( paragraph, heading, ... )
     یک مجموعه‌ی محدود از اندازه‌ها برایش در نظر گرفته شده تا بتوان طرح منسجمی ایجاد کرد.
    `,
  variantsDescription: `
  برای تغییر موارد مربوط به فونت می توان از ویژگی \`variant\` استفاده کرد.
   به صورت پیش‌فرض چندین \`utility\` داخل فایل استایل typography تعریف شده که مقدار \`font-size\` و \`font-weight\` برای آن‌ها تعیین شده است.
  `,
  semanticElementsDescription: `
  برای تغییر \`element\` ایجاد شده توسط \`Typography\` باید از ویژگی \`component\` استفاده کنید.
  `,
  customizationDescription: `
  **اضافه یا غیرفعال کردن variant**  

  `,
  argDescription: {
    children: "محتوای کامپوننت",
    component: "مشخص کردن نوع HTML Tag ایجاد شده",
  },
};

export { typographyDescriptions };
