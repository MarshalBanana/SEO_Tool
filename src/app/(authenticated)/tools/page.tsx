'use client'

import { Prisma } from '@prisma/client'
import { Typography, Card, Row, Col, Spin } from 'antd'
import { ToolOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ToolsOverviewPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: tools, isLoading, refetch } = Api.tool.findMany.useQuery({})

  const handleToolClick = (route: string) => {
    router.push(route)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Title level={2}>SEO Tools Overview</Title>
        <Paragraph>
          Explore our range of SEO tools to enhance your website's performance.
        </Paragraph>
      </div>
      {isLoading ? (
        <Spin size="large" style={{ display: 'block', margin: '0 auto' }} />
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {tools?.map(tool => (
            <Col key={tool.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                onClick={() => handleToolClick(tool.route || '/tools')}
                cover={
                  <ToolOutlined
                    style={{
                      fontSize: '48px',
                      padding: '20px',
                      color: '#1890ff',
                    }}
                  />
                }
              >
                <Card.Meta title={tool.name} description={tool.description} />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </PageLayout>
  )
}
