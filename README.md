<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
=======
# URL Shortener

A simple URL shortener application that converts long URLs into short, easy-to-share links. Built using React and a third-party API.

## Features
- Shorten long URLs into compact links
- Redirect short URLs to their original long URLs
- No backend required, uses a third-party API

## Tech Stack
### Frontend
- React
- TypeScript
- Tailwind CSS 
- Axios for API requests

## Installation

### Prerequisites
- Node.js installed

### Clone the repository
```sh
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

### Frontend Setup
```sh
npm install
npm run dev
```

## API Usage
The application uses a third-party URL shortening API. Ensure you have an API key (if required) and update the request settings in the code.

## Usage
1. Open the frontend in your browser.
2. Enter a long URL and click "Shorten".
3. Copy and share the generated short link.
4. Use the short link to access the original URL.

## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.


>>>>>>> b92525ce3386e14302ecee85c4093a75edbbc338
