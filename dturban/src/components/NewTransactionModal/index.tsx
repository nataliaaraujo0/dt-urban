import Modal from 'react-modal';
import { Container } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <Container>
                <h2>Cadastrar transação</h2>

                <input
                    placeholder="Título"
                    type="text"
                />

                <input
                    placeholder="Valor"
                    type="number"
                />

                <input
                    placeholder="Categoria"
                    type="text"
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}