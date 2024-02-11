import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { buscarCardapio, buscarOpcoesDoItem } from './LoginFuncao'; 
import CartContext from './CartContext';
import ModalOpcoes from './ModalOpcoes'; 
function DetalhesRestaurantes() {
  let { id } = useParams();
  const [cardapio, setCardapio] = useState([]);
  const [detalhesRestaurante, setDetalhesRestaurante] = useState(null);
  const [selecionado, setSelecionado] = useState(null);
  const [opcoes, setOpcoes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    buscarCardapio(id).then(dados => {
      setDetalhesRestaurante(dados.restaurante);
      setCardapio(dados.cardapio);
    });
  }, [id]);

  const abrirModal = (item) => {
    setSelecionado(item);
    buscarOpcoesDoItem(item.id)
      .then(opcoesDoItem => {
        setOpcoes(opcoesDoItem);
        setIsModalOpen(true);
      })
      .catch(error => {
        console.error("Não foi possível buscar as opções do item: ", error);
      });
  };

  const fecharModal = () => {
    setIsModalOpen(false);
  };

  const adicionarAoCarrinho = (itemComOpcoes) => {
    addItemToCart(itemComOpcoes);
    fecharModal();
  };

  if (!detalhesRestaurante) {
    return <div>Carregando detalhes do restaurante...</div>;
  }

  return (
    <div>
      <h1>{detalhesRestaurante.nome}</h1>
      <p>{detalhesRestaurante.descricao}</p>
      <h2>Cardápio</h2>
      <ul>
        {cardapio.map((item) => (
          <li key={item.id} onClick={() => abrirModal(item)}>
            {item.nome} - {item.preco}€
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <ModalOpcoes
          item={selecionado}
          opcoes={opcoes}
          onAddToCart={adicionarAoCarrinho}
          onClose={fecharModal}
        />
      )}
    </div>
  );
}

export default DetalhesRestaurantes;
