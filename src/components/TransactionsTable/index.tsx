import { Container } from "./style";

export function TransactionsTable () {
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$ 800</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdrawn">- R$ 500</td>
            <td>Casa</td>
            <td>28/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}