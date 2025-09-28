export default {
  safelist: [
    // 确保动态网格类名不被清除
    'lg:grid-cols-1',
    'lg:grid-cols-2',
    'lg:grid-cols-3',
    'lg:grid-cols-4',
    'lg:grid-cols-5',
    'lg:grid-cols-6',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // h1: { color: '#1d4ed8', fontWeight: '700' }, // 改标题
            // h2: { color: '#9333ea' },
            // p: { fontSize: '18px', lineHeight: '1.8' }, // 改段落
            // a: { color: '#0ea5e9', textDecoration: 'underline' }, // 改链接
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
