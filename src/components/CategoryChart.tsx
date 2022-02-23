import { PieChart, Pie, Legend, Tooltip } from 'recharts'

type DataCategoryChart = {
  name: string
  value: number
  fill: string
}

const data: DataCategoryChart[] = [
  { name: 'Fall guys', value: 60, fill: '#ed399d' },
  { name: 'Yu-gi-oh', value: 40, fill: '#ffc002' },
  { name: 'Discussion', value: 40, fill: '#32d0d6' },
]

function CategoryChart() {
  return (
    <div className="pt-3 chart">
      <h3 className="mb-4 text-center font-semibold">Moyenne de spectateurs par catégorie (Février 2022 en cours)</h3>
      <PieChart width={700} height={500} data={data}>
        <Pie data={data} dataKey="value" label labelLine={false} />
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  )
}

export default CategoryChart
