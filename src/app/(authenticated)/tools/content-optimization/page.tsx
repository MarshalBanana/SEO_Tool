'use client'

import { useState } from 'react'
import { Typography, Input, Button, Row, Col, Spin, List } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ContentOptimizationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [content, setContent] = useState<string>('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const { mutateAsync: generateText } = Api.ai.generateText.useMutation()

  const handleOptimize = async () => {
    if (!content) {
      enqueueSnackbar('Please enter content to optimize', { variant: 'error' })
      return
    }

    setLoading(true)
    try {
      const response = await generateText({
        prompt: `Optimize the following content for SEO: ${content}`,
      })
      setSuggestions(response.answer.split('\n'))
      enqueueSnackbar('Content optimized successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to optimize content', { variant: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={2}>Content Optimization</Title>
          <Paragraph>
            Input your content below to get SEO optimization suggestions.
          </Paragraph>
          <Input.TextArea
            rows={6}
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="Enter your content here..."
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={handleOptimize}
            style={{ marginTop: '10px' }}
            loading={loading}
          >
            Optimize
          </Button>
          {loading && <Spin style={{ marginTop: '10px' }} />}
          {suggestions.length > 0 && (
            <List
              header={<div>Suggestions</div>}
              bordered
              dataSource={suggestions}
              renderItem={item => (
                <List.Item>
                  <Text>{item}</Text>
                </List.Item>
              )}
              style={{ marginTop: '20px' }}
            />
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
