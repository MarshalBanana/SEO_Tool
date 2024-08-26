'use client'

import { Typography, Button, Row, Col, Card } from 'antd'
import { ToolOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: tools, isLoading } = Api.tool.findMany.useQuery({})

  const handleNavigation = (route: string) => {
    router.push(route)
  }

  return (
    <PageLayout layout="full-width">
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <Col span={24}>
          <Title level={2}>Welcome to Our SEO Tools</Title>
          <Text>
            Enhance your website's performance with our comprehensive SEO tools.
          </Text>
        </Col>
      </Row>
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '40px' }}
      >
        <Col>
          <Button
            type="primary"
            size="large"
            onClick={() => handleNavigation('/tools')}
          >
            Get Started with SEO Tools
          </Button>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        {tools?.map(tool => (
          <Col xs={24} sm={12} md={8} lg={6} key={tool.id}>
            <Card
              hoverable
              onClick={() => handleNavigation(tool.route || '/tools')}
              cover={
                <ToolOutlined style={{ fontSize: '48px', padding: '20px' }} />
              }
            >
              <Card.Meta title={tool.name} description={tool.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
