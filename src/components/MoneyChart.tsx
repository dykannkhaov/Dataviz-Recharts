import { AreaChart, Area, XAxis, YAxis, Tooltip, LabelList } from 'recharts'

type DataMoneyChart = {
  month: string
  gain: number
  label: string
}

const data: DataMoneyChart[] = [
  { month: 'Septembre', gain: 120, label: '120€' },
  { month: 'Octobre', gain: 150, label: '150€' },
  { month: 'Novembre', gain: 130, label: '130€' },
  { month: 'Décembre', gain: 300, label: '300€' },
  { month: 'Janvier', gain: 240, label: '240€' },
  { month: 'Février', gain: 230, label: '230€' },
]

function MoneyChart() {
  return (
    <div className="pt-3 chart">
      <h3 className="mb-4 text-center font-semibold">Vos revenus mensuel (Septembre 2021- Février 2022 en cours)</h3>
      <AreaChart width={700} height={400} data={data}>
        <YAxis dataKey="gain" ticks={[100, 200, 300, 400]} />
        <XAxis dataKey="month" padding={{ right: 14 }} />
        <Area dot dataKey="gain" type="monotone" unit="€" fill="green">
          <LabelList
            dataKey="label"
            position="top"
            style={{
              fill: 'orange',
              fontSize: '15px',
              fontWeight: 600,
            }}
          />
        </Area>
        <Tooltip cursor={false} />
      </AreaChart>
    </div>
  )
}

export default MoneyChart
