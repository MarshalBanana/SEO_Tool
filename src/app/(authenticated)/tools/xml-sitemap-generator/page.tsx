'use client'

import { useState } from 'react'
import { Input, Button, Typography, Row, Col, Spin } from 'antd'
import { CloudDownloadOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function XMLSitemapGeneratorPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [url, setUrl] = useState<string>('')
  const [sitemapUrl, setSitemapUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const { mutateAsync: createSitemap } = Api.sitemap.create.useMutation()

  const handleGenerateSitemap = async () => {
    if (!url) {
      enqueueSnackbar('Please enter a valid URL', { variant: 'error' })
      return
    }

    setLoading(true)
    try {
      const sitemap = await createSitemap({ data: { url } })
      setSitemapUrl(sitemap.url)
      enqueueSnackbar('Sitemap generated successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to generate sitemap', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col xs={24} sm={18} md={12} lg={10} xl={8}>
          <Title level={2}>XML Sitemap Generator</Title>
          <Text>
            Enter your website URL to generate an XML sitemap for better
            indexing.
          </Text>
          <Input
            placeholder="Enter your website URL"
            value={url}
            onChange={e => setUrl(e.target.value)}
            style={{ margin: '20px 0' }}
          />
          <Button
            type="primary"
            icon={loading ? <Spin /> : <CloudDownloadOutlined />}
            onClick={handleGenerateSitemap}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Sitemap'}
          </Button>
          {sitemapUrl && (
            <div style={{ marginTop: '20px' }}>
              <a href={sitemapUrl} download>
                <Button type="default" icon={<CloudDownloadOutlined />}>
                  Download Sitemap
                </Button>
              </a>
            </div>
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
