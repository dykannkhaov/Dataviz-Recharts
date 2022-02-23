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
      <div className="top-container">
        <ViewerChart />
        <hr />
        <MoneyChart />
      </div>
      <hr />
      <div className="bottom-container">
        <CategoryChart />
        <hr />
        <AgeChart />
      </div>
      <Footer />
    </>
  )
}

export default App
