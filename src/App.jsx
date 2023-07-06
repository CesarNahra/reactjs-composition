import Filho from './components/Filho/Filho';
import Neto from './components/Neto/Neto';

import './App.css'
import { ProfileComponent } from './components/ProfileComponent/ProfileComponent';
import { UserInfoComponent } from './components/UserInfoComponent/UserInfoComponent';
import perfil from './img/me.jpg'
import { useState } from 'react';
import { ModalComponent } from './components/ModalComponent/ModalComponent';
import './components/ModalComponent/ModalComponent.css'

function App() {

  const data = {
    title: 'lista de frutas',
    fruits: [
      'banana',
      'morango',
      'mamão',
      'abacate',
      'tomate',
    ],
  };

  const user = {
    avatar: perfil,
    name: 'César Sant"Anna Nahra',
    role: 'Full Stack Developer',
    email: 'cesarsantanna.nahra@gmail.com',
    phone: '+55 (48) 9 9622-5872',
  }

  const titulos = ['teste', 'batata', 'tesla', 'signo'];

  const [showModal, setShowModal] = useState(false);

  const [dataModal, setDataModal] = useState({
    id: 1,
    name: 'Robert Santos',
    email: 'robertsantosti@outlook.com',
    job: 'Mentor educacional',
  });

  const handleShowModal = () => {
    setDataModal({
      ...dataModal, job: titulos[Number(Math.random() * 4).toFixed(0)]
    });
    setShowModal(!showModal);
  }

  const ModalComponent = () => {
    return(
      <div className="modal-wrapper">
        <div className="modal">
          <h2>{dataModal.name}</h2>
          <p>{dataModal.job}</p>
          <button onClick={handleShowModal}>Fechar Modal</button>
        </div>
      </div>
    );
  }


  return (
    <>
      <p>Este é o app</p>

      <Filho title={data.title} neto={<Neto fruits={data.fruits}/>}/>
      <ProfileComponent avatar={user.avatar} info={<UserInfoComponent user={user}/>}/>

      {showModal && <ModalComponent/>}

      <button onClick={handleShowModal}>Abrir Modal</button>
    </>
  )
}

export default App
