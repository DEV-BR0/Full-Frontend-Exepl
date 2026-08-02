'use client'

import dynamic from 'next/dynamic'
import { useEffect, useMemo, useState } from 'react'

const ApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

export default function Chart() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch(console.error)
  }, [])

  const months = useMemo(() => {
    return [...new Set(transactions.map((item) => item.month))]
  }, [transactions])

  const incomeData = months.map((month) => {
    return transactions
      .filter((item) => item.month === month && item.type === 'income')
      .reduce((sum, item) => sum + Number(item.amount), 0)
  })

  const expenseData = months.map((month) => {
    return transactions
      .filter((item) => item.month === month && item.type === 'expense')
      .reduce((sum, item) => sum + Number(item.amount), 0)
  })

  const options = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      },
      background: 'transparent',
    },

    colors: ['#B61722', '#006E2F'],

    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: '60%',
        borderRadiusApplication: 'end',
      },
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      width: 0,
    },

    legend: {
      position: 'top',
      horizontalAlign: 'right',
    },

    grid: {
      borderColor: '#F1F5F9',
      strokeDashArray: 5,
    },

    xaxis: {
      categories: months,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      show: false,
    },

    tooltip: {
      shared: true,
      intersect: false,
    },
  }

  const series = [
    {
      name: 'Expense',
      data: expenseData,
    },
    {
      name: 'Income',
      data: incomeData,
    },
  ]

  return (
    <div className="w-full rounded-3xl bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Income vs Expenses</h2>
      </div>

      <ApexChart options={options} series={series} type="bar" height={330} />
    </div>
  )
}
