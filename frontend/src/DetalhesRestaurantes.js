import React, { useState } from 'react';
import './DetalhesRestaurante.css';

function DetalhesRestaurante({ restaurant }) {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="restaurant-detail-container">
            <img src={restaurant.imageUrl} alt={restaurant.name} className="restaurant-image" />
            <div className="restaurant-info">
                <h2>{restaurant.name}</h2>
                <p><strong>Contacto:</strong> {restaurant.number}</p>
                <p><strong>Tipo:</strong> {restaurant.type}</p>
                <p><strong>Avaliação:</strong> {restaurant.rating}</p>
                <button onClick={toggleMenu}>{menuVisible ? 'Esconder' : 'Ver'} Cardápio</button>
                {menuVisible && (
                    <div className="restaurant-menu">
                        
                        {restaurant.menu.map(item => (
                            <div key={item.id} className="menu-item">
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                                <p><strong>Preço:</strong> {item.price}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default DetalhesRestaurante;
