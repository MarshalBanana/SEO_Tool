'use client'

import { useState } from 'react'
import { Input, Button, Row, Col, Typography, Space } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function MetaTagGeneratorPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [keywords, setKeywords] = useState('')

  const handleCopy = () => {
    const metaTags = `
      <meta name="title" content="${title}">
      <meta name="description" content="${description}">
      <meta name="keywords" content="${keywords}">
    `
    navigator.clipboard
      .writeText(metaTags)
      .then(() => {
        enqueueSnackbar('Meta tags copied to clipboard!', {
          variant: 'success',
        })
      })
      .catch(() => {
        enqueueSnackbar('Failed to copy meta tags.', { variant: 'error' })
      })
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Title level={2}>Meta Tag Generator</Title>
          <Paragraph>
            Input the information below to generate meta tags for your website.
            These tags help improve your site's SEO.
          </Paragraph>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Input
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <Input
              placeholder="Keywords (comma separated)"
              value={keywords}
              onChange={e => setKeywords(e.target.value)}
            />
            <Button type="primary" icon={<CopyOutlined />} onClick={handleCopy}>
              Copy Meta Tags
            </Button>
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
