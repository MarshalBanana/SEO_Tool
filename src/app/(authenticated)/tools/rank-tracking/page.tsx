'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import { Typography, Input, Button, Table, Space, Row, Col, Spin } from 'antd'
import { SearchOutlined, LineChartOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function RankTrackingPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [keywords, setKeywords] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [rankings, setRankings] = useState<
    Prisma.AnalyticsGetPayload<{ include: { tool: true } }>[] | null
  >(null)

  const {
    data: analyticsData,
    isLoading,
    refetch,
  } = Api.analytics.findMany.useQuery({
    where: { userId: user?.id },
    include: { tool: true },
  })

  const { mutateAsync: createAnalytics } = Api.analytics.create.useMutation()

  useEffect(() => {
    if (analyticsData) {
      setRankings(analyticsData)
    }
  }, [analyticsData])

  const handleTrack = async () => {
    if (!keywords || !url) {
      enqueueSnackbar('Please enter both keywords and URL', {
        variant: 'error',
      })
      return
    }

    try {
      await createAnalytics({
        data: {
          action: `Track: ${keywords} - ${url}`,
          userId: user?.id,
          toolId: 'rank-tracking-tool-id', // Replace with actual tool ID
          timestamp: new Date().toISOString(),
        },
      })
      enqueueSnackbar('Tracking started successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to start tracking', { variant: 'error' })
    }
  }

  const columns = [
    {
      title: 'Date',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
    {
      title: 'Tool',
      dataIndex: ['tool', 'name'],
      key: 'tool',
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <Col span={24}>
          <Title level={2}>
            <LineChartOutlined /> Rank Tracking
          </Title>
          <Paragraph>
            Monitor your SEO performance by tracking keywords and URLs.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col span={12}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Input
              placeholder="Enter keywords"
              value={keywords}
              onChange={e => setKeywords(e.target.value)}
              prefix={<SearchOutlined />}
            />
            <Input
              placeholder="Enter URL"
              value={url}
              onChange={e => setUrl(e.target.value)}
              prefix={<SearchOutlined />}
            />
            <Button type="primary" onClick={handleTrack}>
              Track
            </Button>
          </Space>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          {isLoading ? (
            <Spin />
          ) : (
            <Table dataSource={rankings || []} columns={columns} rowKey="id" />
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
