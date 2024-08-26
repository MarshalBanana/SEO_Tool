'use client'
import { useUserContext } from '@/core/context'
import { PageLayout } from '@/designSystem/layouts/Page.layout'
import { useParams, useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'

export default function KeywordResearchPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  return <PageLayout layout="full-width">Content Here</PageLayout>
}