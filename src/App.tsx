import Header from './Header'
import Footer from './Footer'
import AgeChart from './components/AgeChart'
import ViewerChart from './components/ViewerChart'
import MoneyChart from './components/MoneyChart'
import CategoryChart from './components/CategoryChart'

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-evenly container-responsive">
        <ViewerChart />
        <hr className="border-r border-gray-600 h-auto" />
        <MoneyChart />
      </div>
      <hr className="border-gray-600" />
      <div className="flex justify-evenly container-responsive">
        <CategoryChart />
        <hr className="border-r border-gray-600 h-auto" />
        <AgeChart />
      </div>
      <Footer />
    </>
  )
}

export default App
