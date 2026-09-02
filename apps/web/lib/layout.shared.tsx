import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { appName } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image src="/images/logo.png" alt={appName} width={24} height={24} />
          {appName}
        </>
      ),
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
