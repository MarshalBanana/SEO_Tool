'use client'

import { useState } from 'react'
import { Input, Button, Spin, Row, Col, Typography, Card } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function WebsiteAuditPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [url, setUrl] = useState<string>('')
  const [auditResults, setAuditResults] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const { mutateAsync: createAudit } = Api.audit.create.useMutation()

  const handleAudit = async () => {
    if (!url) {
      enqueueSnackbar('Please enter a URL to audit.', { variant: 'error' })
      return
    }

    setLoading(true)
    try {
      const results = await createAudit({ data: { url } })
      setAuditResults(results)
      enqueueSnackbar('Audit completed successfully!', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to complete the audit. Please try again.', {
        variant: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row
        justify="center"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <Col span={24}>
          <Title level={2}>Website SEO Audit</Title>
          <Paragraph>
            Input your website URL to audit and identify SEO issues.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col xs={24} sm={12} md={8}>
          <Input
            placeholder="Enter website URL"
            value={url}
            onChange={e => setUrl(e.target.value)}
            suffix={<SearchOutlined />}
          />
        </Col>
        <Col>
          <Button
            type="primary"
            onClick={handleAudit}
            icon={<SearchOutlined />}
            loading={loading}
          >
            Audit
          </Button>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          {loading && <Spin size="large" />}
          {auditResults && (
            <Card title="Audit Results" style={{ textAlign: 'left' }}>
              <Paragraph>
                <Text strong>URL:</Text> {auditResults.url}
              </Paragraph>
              <Paragraph>
                <Text strong>Issues:</Text> {auditResults.issues}
              </Paragraph>
              {/* Add more fields as necessary based on the audit results */}
            </Card>
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
