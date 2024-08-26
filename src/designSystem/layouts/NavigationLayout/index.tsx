import { useUserContext } from '@/core/context'
import { DollarOutlined } from '@ant-design/icons'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { useDesignSystem } from '../../provider'
import { Leftbar } from './components/Leftbar'
import { Topbar } from './components/Topbar'

import { OrganizationSelect } from './components/OrganizationSelect'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const { organization, authenticationStatus: isLoggedIn } = useUserContext()

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  const itemsLeftbar = [
    {
      key: '/home',
      label: 'Home Page',
      onClick: () => goTo('/home'),
    },

    {
      key: '/tools',
      label: 'Tools Overview Page',
      onClick: () => goTo('/tools'),
    },

    {
      key: '/tools/keyword-research',
      label: 'Keyword Research Page',
      onClick: () => goTo('/tools/keyword-research'),
    },

    {
      key: '/tools/backlink-checker',
      label: 'Backlink Checker Page',
      onClick: () => goTo('/tools/backlink-checker'),
    },

    {
      key: '/tools/website-audit',
      label: 'Website Audit Page',
      onClick: () => goTo('/tools/website-audit'),
    },

    {
      key: '/tools/rank-tracking',
      label: 'Rank Tracking Page',
      onClick: () => goTo('/tools/rank-tracking'),
    },

    {
      key: '/tools/meta-tag-generator',
      label: 'Meta Tag Generator Page',
      onClick: () => goTo('/tools/meta-tag-generator'),
    },

    {
      key: '/tools/content-optimization',
      label: 'Content Optimization Page',
      onClick: () => goTo('/tools/content-optimization'),
    },

    {
      key: '/tools/xml-sitemap-generator',
      label: 'XML Sitemap Generator Page',
      onClick: () => goTo('/tools/xml-sitemap-generator'),
    },

    {
      key: '/footer',
      label: 'Footer',
      onClick: () => goTo('/footer'),
    },

    {
      key: '/admin',
      label: 'Admin Page',
      onClick: () => goTo('/admin'),
    },
  ]

  const itemsTopbar = []

  const itemsLeftbarBottom = []

  const itemsMobile = [
    {
      key: '/profile',
      label: 'Profile',
      onClick: () => goTo('/profile'),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
    ...itemsLeftbarBottom,
  ]

  const isLeftbar = itemsLeftbar.length > 0 && !isMobile

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar
                header={<OrganizationSelect />}
                items={itemsLeftbar}
                itemsBottom={itemsLeftbarBottom}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              itemsMobile={itemsMobile}
              isLoggedIn={isLoggedIn === 'authenticated'}
              items={itemsTopbar}
              header={!isLeftbar && <OrganizationSelect />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}
