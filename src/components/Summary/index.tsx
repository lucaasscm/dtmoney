import { Container } from "./style"
import incomesImg from "../../assets/income.svg" 
import outcomesImg from "../../assets/outcome.svg" 
import totalImg from "../../assets/total.svg" 
import { useTransactions } from "../../hooks/useTransactions"

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  });

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomesImg} alt="Entradas" />
        </header>
        <strong>{summary.deposits.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomesImg} alt="Saídas" />
        </header>
        <strong>- {summary.withdraws.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{summary.total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong>
      </div>
    </Container>
  )
}