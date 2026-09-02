import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
    },
    links: [
      {
        text: 'Docs',
        url: '/docs',
        active: 'nested-url',
      },
      {
        type: 'button',
        text: 'Get started',
        url: '/docs/getting-started/installation',
      },
    ],
  };
}
