# Argus

**Description**: Argus, named after the giant with many eyes from Greek mythology, embodies our Next.js dashboard’s ability to monitor, analyze, and display multiple data points and metrics simultaneously. Like Argus, our dashboard provides comprehensive visibility and insights into data with its powerful visualization and analytics features.

### Key Features:

  - **Multi-Data Monitoring**: Argus enables users to monitor multiple data sources and metrics in real-time, providing a comprehensive view of performance and trends.
  - **Advanced Visualization**: Utilizes Next.js capabilities for advanced data visualization, offering interactive charts, graphs, and dashboards that enhance data understanding.
  - **Real-time Updates**: Ensures timely updates and refresh of data, keeping users informed with the latest insights and metrics.
  - **Customizable Dashboards**: Allows users to create personalized dashboards tailored to their specific needs and preferences, enhancing usability and efficiency.
  - **Integration Ready**: Supports seamless integration with various data sources and APIs, facilitating easy data aggregation and analysis.
  - **Usage**: Argus serves as a robust platform for businesses to monitor and analyze their data effectively, leveraging Next.js’s capabilities for intuitive and insightful data visualization.

Dependencies: Built on Next.js framework, Argus leverages its efficient rendering, server-side rendering capabilities, and rich ecosystem for developing scalable and performant dashboards.
## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# Code standards

- React Functional Components: Should use arrow function syntax.

```jsx
// Good example
const MyComponent = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}
```

- Exports: Pages and layout components should be exported as default, while UI components should be exported as constants.

```jsx
// Good example for pages and layout components
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
    </div>
  )
}

export default HomePage
```

```jsx
// Good example for UI components
export const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>
}
```

- File Structure: Pages subfolders should follow the same structure as the app router. For example, if your app router structure is:

```bash
/pages
  /about
    index.js
  /dashboard
    index.js
```

# Commit Message Guidelines

## Format

A correct commit message should follow the conventional commits specification, consisting of a header and an optional body:

### Header

The header includes three main parts:

- **`<type>`**: Describes the kind of change being made. Common types include:

  - `feat`: A new feature
  - `fix`: A bug fix
  - `docs`: Documentation changes
  - `style`: Changes that do not affect the meaning of the code
  - `refactor`: Code refactorings
  - `test`: Adding or updating tests
  - `chore`: Maintenance tasks, build changes, etc.

- **`<scope>`** (optional): Specifies the scope of the change. It can be anything relevant to the project.

- **`<subject>`**: A succinct description of the change. Use the imperative tense (e.g., "add", "fix", "update") and keep it concise (50 characters or less is recommended).

Example:
`feat(auth): add JWT token expiration handling`

## Guidelines

- **Be Clear and Concise**: Describe the change clearly and succinctly.
- **Use Imperative Mood**: Start the `<subject>` with a verb in the imperative mood.
- **Separate Header and Body**: Use the body for additional context if needed.
- **Follow Project Conventions**: Adhere to any specific commit message guidelines established by the team.

By following these guidelines, we can ensure that our commit messages are informative, consistent, and contribute to a clear and meaningful Git history for our project.
