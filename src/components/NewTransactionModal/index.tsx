import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './style';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit');

  const { createNewTransaction } = useTransactions();

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    
    await createNewTransaction({ title, amount, category, type });

    setTitle('');
    setAmount(0);
    setCategory('');
    setCategory('deposit');
    onRequestClose();
  }

  return(
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >

        <button type='button' onClick={onRequestClose} className="react-modal-close">
          <img src={closeImg} alt="Fechar Modal" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar Transação</h2>

          <input 
            placeholder='Título'
            onChange={event => setTitle(event.target.value)} 
          />
          <input 
            type="number" 
            placeholder='Valor'
            onChange={event => setAmount(Number(event.target.value))} 
          />

          <TransactionTypeContainer>
            <RadioBox 
              type='button'
              onClick={() => setType('deposit')}
              isActive={type === "deposit"}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox 
              type='button'
              onClick={() => setType('withdraw')}
              isActive={type === "withdraw"}
              activeColor="red"

            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>
          
          <input 
            placeholder='Categoria' 
            onChange={event => setCategory(event.target.value)} 
            />

          <button type="submit">
            Cadastrar
          </button>

        </Container>
    </Modal>
  );
}