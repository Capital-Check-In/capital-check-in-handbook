import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Capital Check In'
      }
    }
  },
  project: {
    link: 'https://github.com/Capital-Check-In/capital-check-in-handbook',
  },
  docsRepositoryBase: 'https://github.com/Capital-Check-In/capital-check-in-handbook',
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: (
      <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Capital Check In.
      </p>
    ),
  },
  toc: {
    backToTop: true
  }
}

export default config
