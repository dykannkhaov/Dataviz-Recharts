import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

type DataViewerChart = {
  month: string
  spectateurs: number
}

const data: DataViewerChart[] = [
  { month: 'Septembre', spectateurs: 25 },
  { month: 'Octobre', spectateurs: 30 },
  { month: 'Novembre', spectateurs: 34 },
  { month: 'Décembre', spectateurs: 44 },
  { month: 'Janvier', spectateurs: 47 },
  { month: 'Février', spectateurs: 50 },
]

function ViewerChart() {
  return (
    <div className="pt-3 chart">
      <h3 className="mb-4 text-center font-semibold">
        Évolution des spectateurs (Septembre 2021- Février 2022 en cours)
      </h3>
      <BarChart width={700} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis dataKey="spectateurs" />
        <XAxis dataKey="month" />
        <Bar
          dataKey="spectateurs"
          fill="#9145ff"
          label={{
            position: 'top',
            fill: 'green',
            fontSize: '15px',
            fontWeight: 'bold',
          }}
        />
        <Tooltip cursor={false} />
      </BarChart>
    </div>
  )
}

export default ViewerChart
