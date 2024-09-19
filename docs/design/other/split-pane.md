## 基本使用

```jsx | react
import { SplitPane } from '@yl-d/design';

export default () => {
  return (
    <SplitPane
      style={{ height: 500 }}
      minSize={50}
      defaultSize={100}
      maxSize={300}
      leftPanel={
        <div
          style={{
            background: 'var(--bg-color-3)',
            padding: 10,
            height: '100%',
          }}
        >
          Sider
        </div>
      }
      rightPanel={
        <div
          style={{
            background: 'var(--bg-color-2)',
            padding: 10,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <p>React is a JavaScript library for building user interfaces.</p>

          <p>
            Declarative: React makes it painless to create interactive UIs.
            Design simple views for each state in your application, and React
            will efficiently update and render just the right components when
            your data changes. Declarative views make your code more
            predictable, simpler to understand, and easier to debug.
          </p>
          <p>
            Component-Based: Build encapsulated components that manage their own
            state, then compose them to make complex UIs. Since component logic
            is written in JavaScript instead of templates, you can easily pass
            rich data through your app and keep state out of the DOM.
          </p>
          <p>
            Learn Once, Write Anywhere: We don&apos;t make assumptions about the
            rest of your technology stack, so you can develop new features in
            React without rewriting existing code. React can also render on the
            server using Node and power mobile apps using React Native.
          </p>

          <p>Learn how to use React in your own project.</p>

          <h3>Installation</h3>
          <p>
            React has been designed for gradual adoption from the start, and you
            can use as little or as much React as you need:
          </p>

          <p>Use Online Playgrounds to get a taste of React.</p>
          <p>Add React to a Website as a script tag in one minute.</p>
          <p>
            Create a New React App if you&apos;re looking for a powerful
            JavaScript toolchain.
          </p>
          <p>
            You can use React as a script tag from a CDN, or as a react package
            on npm.
          </p>

          <h3>Documentation</h3>
          <p>You can find the React documentation on the website.</p>

          <p>Check out the Getting Started page for a quick overview.</p>

          <p>The documentation is divided into several sections:</p>

          <p>Tutorial</p>
          <p>Main Concepts</p>
          <p>Advanced Guides</p>
          <p>API Reference</p>
          <p>Where to Get Support</p>
          <p>Contributing Guide</p>
          <p>You can improve it by sending pull requests to this repository.</p>
        </div>
      }
    />
  );
};
```


## 水平分隔线

```jsx | react
import { SplitPane } from '@yl-d/design';

export default () => {
  return (
    <SplitPane
      style={{ height: 500 }}
      minSize={50}
      direction="horizontal"
      defaultSize={100}
      maxSize={300}
      leftPanel={
        <div
          style={{
            background: 'var(--bg-color-3)',
            padding: 10,
            width: '100%',
          }}
        >
          Top
        </div>
      }
      rightPanel={
        <div
          style={{
            background: 'var(--bg-color-2)',
            padding: 10,
            width: '100%',
            overflow: 'auto',
          }}
        >
          <p>React is a JavaScript library for building user interfaces.</p>

          <p>
            Declarative: React makes it painless to create interactive UIs.
            Design simple views for each state in your application, and React
            will efficiently update and render just the right components when
            your data changes. Declarative views make your code more
            predictable, simpler to understand, and easier to debug.
          </p>
          <p>
            Component-Based: Build encapsulated components that manage their own
            state, then compose them to make complex UIs. Since component logic
            is written in JavaScript instead of templates, you can easily pass
            rich data through your app and keep state out of the DOM.
          </p>
          <p>
            Learn Once, Write Anywhere: We don&apos;t make assumptions about the
            rest of your technology stack, so you can develop new features in
            React without rewriting existing code. React can also render on the
            server using Node and power mobile apps using React Native.
          </p>

          <p>Learn how to use React in your own project.</p>

          <h3>Installation</h3>
          <p>
            React has been designed for gradual adoption from the start, and you
            can use as little or as much React as you need:
          </p>

          <p>Use Online Playgrounds to get a taste of React.</p>
          <p>Add React to a Website as a script tag in one minute.</p>
          <p>
            Create a New React App if you&apos;re looking for a powerful
            JavaScript toolchain.
          </p>
          <p>
            You can use React as a script tag from a CDN, or as a react package
            on npm.
          </p>

          <h3>Documentation</h3>
          <p>You can find the React documentation on the website.</p>

          <p>Check out the Getting Started page for a quick overview.</p>

          <p>The documentation is divided into several sections:</p>

          <p>Tutorial</p>
          <p>Main Concepts</p>
          <p>Advanced Guides</p>
          <p>API Reference</p>
          <p>Where to Get Support</p>
          <p>Contributing Guide</p>
          <p>You can improve it by sending pull requests to this repository.</p>
        </div>
      }
    />
  );
};
```


## API

```API
/packages/design/src/other/split-pane/type.tsx
```
