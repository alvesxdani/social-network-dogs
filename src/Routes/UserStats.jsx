import React, { Suspense, lazy, useEffect } from 'react'
import Head from '../Components/Head'
import useFetch from '../Utils/useFetch'
import { GET_STATS } from '../Api/api'
import Loading from '../Components/Loading'
import ErrorMsg from '../Components/ErrorMsg'

const UserStatsGraph = lazy(() => import('../Components/UserStatsGraphs'))

function UserStats() {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS()
      await request(url, options)
    }
    getData()
  }, [request])
  if (loading) return <Loading />
  if (error) <ErrorMsg error={error} />
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraph data={data} />
      </Suspense>
    )
  else return null
}

export default UserStats
