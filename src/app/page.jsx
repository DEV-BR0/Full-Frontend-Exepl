'use client'

import IncomeVsExpenses from '@/app/components/chart/Chart'
import { Banknote, Landmark, ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((res) => res.json())
      .then((data) => {
        const totalIncome = data
          .filter((item) => item.type === 'income')
          .reduce((sum, item) => sum + Number(item.amount), 0)

        const totalExpense = data
          .filter((item) => item.type === 'expense')
          .reduce((sum, item) => sum + Number(item.amount), 0)

        setIncome(totalIncome)
        setExpense(totalExpense)
      })
  }, [])

  const balance = income - expense

  return (
    <div className="flex flex-col pt-[30px] gap-[50px]">
      {/* sizning barcha stylelaringiz o'z holicha qoladi */}

      <div className="flex gap-[30px]">
        <div className="flex flex-col grow bg-white p-[30px] rounded-3xl">
          <div className="flex items-center gap-[10px]">
            <div className="p-[10px] flex bg-[#4AE17633] text-green-700 rounded-xl">
              <Banknote size={30} />
            </div>
            <p className="text-[#3D4A3D] text-[12px] font-bold">Total Income</p>
          </div>

          <div className="flex flex-col gap-[20px]">
            <p className="text-[#0B1C30] text-[36px] font-bold">${income.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex flex-col grow bg-white p-[30px] rounded-3xl">
          <div className="flex items-center gap-[10px]">
            <div className="p-[10px] flex bg-[#B617221A] text-[#B61722] rounded-xl">
              <ShoppingCart size={30} />
            </div>
            <p className="text-[#3D4A3D] text-[12px] font-bold">Total Expenses</p>
          </div>

          <div className="flex flex-col gap-[20px]">
            <p className="text-[#0B1C30] text-[36px] font-bold">${expense.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex flex-col grow bg-white p-[30px] rounded-3xl">
          <div className="flex items-center gap-[10px]">
            <div className="p-[10px] flex bg-[#005AC21A] text-[#005AC2] rounded-xl">
              <Landmark size={30} />
            </div>
            <p className="text-[#3D4A3D] text-[12px] font-bold">Balance</p>
          </div>

          <div className="flex flex-col gap-[20px]">
            <p className="text-[#0B1C30] text-[36px] font-bold">${balance.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <IncomeVsExpenses />
    </div>
  )
}
