<h1 align="center">

`LPS - Landing Pages`

</h1>

<p align="center">
<a href="https://github.com/TriangulosTecnologia/lps/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green" alt="License" />
  </a>
</p>

<br/>

## 📚 About

<strong> Landing Page</strong> is a page that has all the elements aimed at converting the visitor into Lead, opportunity or customer. Also as landing pages or conversion pages, Landing Pages are widely used in Digital Marketing campaigns, as they tend to have high conversion rates.

## 🛠 Design pattern

<p align="justify">
<a href="https://github.com/ttoss/monorepo"><strong> Monorepo </strong></a> (ttoss Monorepo Template) as the name says, would be a single repository to keep the code of several projects. Each app domain is within this repository: backend, IoT, machine learning, web and mobile apps. This repository structure is useful because we can access any part of the application without changing the repository.
</p>

<br/>

## 🚀 Projects

- **[Simulare](https://github.com/TriangulosTecnologia/lps/tree/main/lps/simulare)**

<br/>

## 📌 Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Fullpage.js](https://alvarotrigo.com/react-fullpage/)
- [ThemeUI](https://theme-ui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [React.js](https://reactjs.org/)
- [ESlint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/#/)
- [Commitlint](https://commitlint.js.org/#/)
- [Jest](https://jestjs.io/)
- [Lint Staged](https://github.com/okonet/lint-staged#readme)
- [NPM Check Updates](https://github.com/raineorshine/npm-check-updates)
- [Prettier](https://prettier.io/)
- [Stylelint](https://stylelint.io/)

<br/>

## 🔖 Design

We've adopted some specifications to define our Theme UI theme. You can check our full theme specifications here.

- ## Breakpoints

We defined six breakpoints `['40rem', '48rem', '64rem', '80rem', '96rem', '120rem']`, which is equivalent to screens with `[640, 768, 1024, 1280, 1536, 1920]` pixels, if the root font size is equal to `16px`. Defining this array of breakpoints comes in handy because we can work with array props when we need to implement responsiveness.

- ## Font Sizes

We defined our font size based on Tailwind CSS convention.

```js

fontSizes: {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem',
}

```

If we want that some text has `sm` for the first screen (< 40rem), and `lg` for the subsequent screen sizes, we just need to define our component this way:

```jsx

<Text sx={{ fontSize: ['sm', 'lg] }}>

```

- ## Spaces

For the space array, we opt to use the Fibonacci sequence.

```js
space: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
```

We repeat the number `1` twice to match the indexes - `Fib(10) = space[10] = 55`.

<br />

## 📝 License

This project is under the MIT license. See the [LICENSE](https://github.com/TriangulosTecnologia/lps/blob/main/LICENSE) file for more details.
