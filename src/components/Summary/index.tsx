import { Container } from "./style"
import incomesImg from "../../assets/income.svg" 
import outcomesImg from "../../assets/outcome.svg" 
import totalImg from "../../assets/total.svg" 
import { useContext } from "react"
import { TransactionsContext } from "../../TransactionsContext"

export function Summary() {
  const data = useContext(TransactionsContext);
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomesImg} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomesImg} alt="Saídas" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}