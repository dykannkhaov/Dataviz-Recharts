import { PieChart, Pie, Tooltip, Legend } from 'recharts'

type DataAgeChart = {
  name: string
  value: number
  fill: string
}

const data: DataAgeChart[] = [
  { name: '13-17', value: 50, fill: '#3177bd' },
  { name: '18-25', value: 30, fill: '#9abe51' },
  { name: '26+', value: 20, fill: '#8567a8' },
]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

function AgeChart() {
  return (
    <div className="pt-3">
      <h3 className="mb-4 text-center font-semibold">Tranche d'âge moyenne de vos spectateurs</h3>
      <PieChart width={700} height={500}>
        <Pie data={data} dataKey="value" labelLine={false} label={renderCustomizedLabel} />
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )
}

export default AgeChart
