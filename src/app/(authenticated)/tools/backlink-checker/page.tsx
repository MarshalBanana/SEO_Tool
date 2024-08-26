'use client'

import { useState } from 'react'
import { Input, Button, List, Typography, Spin } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function BacklinkCheckerPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [url, setUrl] = useState<string>('')
  const [backlinks, setBacklinks] = useState<any[]>([])

  const { data, isLoading, refetch } = Api.backlink.findMany.useQuery({
    where: { targetUrl: url },
  })

  const handleCheckBacklinks = async () => {
    if (!url) {
      enqueueSnackbar('Please enter a URL.', { variant: 'error' })
      return
    }

    try {
      await refetch()
      if (data) {
        setBacklinks(data)
      } else {
        setBacklinks([])
      }
    } catch (error) {
      enqueueSnackbar('Failed to fetch backlinks.', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Title level={2}>Backlink Checker</Title>
        <Text>Enter a URL to see which sites are linking to it.</Text>
        <div style={{ margin: '20px 0' }}>
          <Input
            placeholder="Enter URL"
            value={url}
            onChange={e => setUrl(e.target.value)}
            style={{ width: '300px', marginRight: '10px' }}
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={handleCheckBacklinks}
          >
            Check Backlinks
          </Button>
        </div>
        {isLoading ? (
          <Spin size="large" />
        ) : (
          <List
            bordered
            dataSource={backlinks}
            renderItem={item => (
              <List.Item>
                <Text>{item.sourceUrl}</Text>
              </List.Item>
            )}
            style={{ maxWidth: '600px', margin: '0 auto' }}
          />
        )}
      </div>
    </PageLayout>
  )
}
