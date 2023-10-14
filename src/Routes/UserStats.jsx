import React, { useEffect } from 'react'
import Head from '../Components/Head'
import useFetch from '../Utils/useFetch'
import { GET_STATS } from '../Api/api'
import Loading from '../Components/Loading'
import ErrorMsg from '../Components/ErrorMsg'
import UserStatsGraphs from '../Components/UserStatsGraphs'

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
      <div>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </div>
    )
  else return null
}

export default UserStats
