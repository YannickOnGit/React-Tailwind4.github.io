# React-Tailwind4 Test Project

Abstract:
I started this experiment because we previously used MUI, which introduced performance overhead and lacked the flexibility needed to create truly custom components. MUI also generates deeply nested <div> elements, making customization and maintenance more complex.

I have extensive experience in creating my own HTML components and UX patterns, and I often find frameworks like Bootstrap and MUI restrictive, limiting creativity.

So far, I’m really impressed with Tailwind. I was able to style my code without writing additional CSS. In fact, I even had to remove some classes due to conflicts where certain utilities were overriding others. The framework is robust and offers a lot of flexibility.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Tailwind CSS Integration

This project includes Tailwind CSS for utility-first styling. To ensure Tailwind is configured correctly, follow these steps:

Install Tailwind and dependencies:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

For full documentation, visit: https://tailwindcss.com/

## Recharts Integration

This project also includes Recharts for data visualization. To get started:

Install Recharts:

npm install recharts

For full documentation, visit: https://recharts.org

## In progress:

    PostCSS

    Autoprefixer

    CSSNano

Important if us TailwindCSS 4

Use the following postcss.config.cjs file:

module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
    cssnano: {
      preset: "default",
    },
  },
};

Run the following command:

npm run build

## Upcoming Features

    Custom form components with inline validation

    Custom dialogs

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
