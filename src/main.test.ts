import { render } from './utils.ts';
import { getByRole } from '@testing-library/dom';

test('executes ESM script', () => {
  const container = render(
    `
      <h1>Hello World!</h1>
      <script type="module" src="/src/esm-script.ts"></script>
    `,
  );

  const result = getByRole(container, 'heading');

  expect(result).toHaveTextContent('Hello World!');
});

test('executes normal script', () => {
  const container = render(
    `
      <h1 id="the-heading">Hello World!</h1>
      <script type="module" src="/src/normal-script.ts"></script>
    `,
  );

  const result = getByRole(container, 'heading');

  expect(result).toHaveTextContent(
    'If you see this, executing the normal script works!',
  );
});
