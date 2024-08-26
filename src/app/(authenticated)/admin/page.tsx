'use client'

import { useEffect } from 'react'
import { Typography, Row, Col, Card, Spin } from 'antd'
import { LineChartOutlined, BarChartOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AdminPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: analyticsData, isLoading } = Api.analytics.findMany.useQuery({
    include: { user: true, tool: true },
  })

  useEffect(() => {
    if (!user?.isAdmin) {
      enqueueSnackbar('Access denied. Admins only.', { variant: 'error' })
      router.push('/home')
    }
  }, [user, router])

  if (!user?.isAdmin) {
    return null
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col span={24} style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Title level={2}>Website Statistics and Analytics</Title>
          <Paragraph>
            View detailed statistics and analytics about the website traffic and
            user interactions.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        {isLoading ? (
          <Spin size="large" />
        ) : (
          analyticsData?.map(analytics => (
            <Col key={analytics.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                title={analytics.action}
                bordered={false}
                actions={[
                  <LineChartOutlined key="line" />,
                  <BarChartOutlined key="bar" />,
                ]}
              >
                <Text strong>User:</Text> {analytics.user?.name || 'N/A'}
                <br />
                <Text strong>Tool:</Text> {analytics.tool?.name || 'N/A'}
                <br />
                <Text strong>Timestamp:</Text> {analytics.timestamp || 'N/A'}
              </Card>
            </Col>
          ))
        )}
      </Row>
    </PageLayout>
  )
}
