import React, { useEffect, useState } from 'react';
import { buscarOpcoesDoItem } from './LoginFuncao'; 

const ModalOpcoes = ({ item, onAddToCart, onClose }) => {
  const [opcoes, setOpcoes] = useState([]);
  const [opcoesSelecionadas, setOpcoesSelecionadas] = useState({});

  useEffect(() => {
    buscarOpcoesDoItem(item.id).then(setOpcoes);
  }, [item.id]);


  const handleSelectOption = (opcaoId, valor) => {
    setOpcoesSelecionadas(prev => ({ ...prev, [opcaoId]: valor }));
  };

 
  const handleAddToCart = () => {
    onAddToCart(item, opcoesSelecionadas);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Personalize seu pedido</h2>
        {opcoes.map(opcao => (
          <div key={opcao.id}>
            <label>
              <input
                type="checkbox"
                name={opcao.nome}
                checked={!!opcoesSelecionadas[opcao.id]}
                onChange={(e) => handleSelectOption(opcao.id, e.target.checked)}
              />
              {opcao.nome}
            </label>
          </div>
        ))}
        <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
      </div>
    </div>
  );
};

export default ModalOpcoes;
