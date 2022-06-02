import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isFullImageOpen, setFullImageOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setFullImageOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setFullImageOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="App">
      <div className="page">
        <div className="page__contents">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <PopupWithForm
            isOpen={isEditProfilePopupOpen}
            name="edit"
            title="Редактировать профиль"
            onClose={closeAllPopups}
            buttonText="Сохранить"
          >
            <div className="popup__input-container">
              <input
                id="username"
                className="popup__input popup__input_type_username"
                type="text"
                name="username"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
              />
              <span
                id="error-username"
                className="error-username  error-message"
              ></span>
            </div>
            <div className="popup__input-container">
              <input
                id="userinfo"
                className="popup__input popup__input_type_userinfo"
                type="text"
                name="userinfo"
                placeholder="О себе"
                minLength="2"
                maxLength="200"
                required
              />
              <span
                id="error-userinfo"
                className="error-userinfo  error-message"
              ></span>
            </div>
          </PopupWithForm>
          <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            name="add"
            title="Новое место"
            onClose={closeAllPopups}
            buttonText="Создать"
          >
            <div className="popup__input-container">
              <input
                id="imagename"
                className="popup__input popup__input_type_imagename"
                type="text"
                name="imagename"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span
                id="error-imagename"
                className="error-imagename  error-message"
              ></span>
            </div>
            <div className="popup__input-container">
              <input
                id="imagelink"
                className="popup__input popup__input_type_imagelink"
                type="url"
                name="imagelink"
                placeholder="Ссылка на картинку"
                required
              />
              <span
                id="error-imagelink"
                className="error-imagelink  error-message"
              ></span>
            </div>
          </PopupWithForm>
          <PopupWithForm 
           name="del"
           title="Вы уверены?"
           buttonText="Удалить">             
           </PopupWithForm>
          <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            name="ava"
            title="Обновить аватар"
            onClose={closeAllPopups}
            buttonText="Сохранить"
          >
            <div className="popup__input-container">
              <input
                id="avalink"
                className="popup__input popup__input_type_avalink"
                type="url"
                name="avalink"
                placeholder="Ссылка"
                required
              />
              <span
                id="error-avalink"
                className="error-avalink  error-message"
              ></span>
            </div>
          </PopupWithForm>
          <ImagePopup
            isOpen={isFullImageOpen}
            onClose={closeAllPopups}
            card={selectedCard}
            
          />
        </div>
      </div>
    </div>
  );
}

export default App;
