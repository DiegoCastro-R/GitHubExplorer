import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/61213894?s=460&u=5ea5b713da215195f12f3263c8b9742e6e61811c&v=4"
            alt="Diego Rodrigues"
          />
          <div>
            <strong>githubexplorer</strong>
            <p>Explore GitHub Repositories</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/61213894?s=460&u=5ea5b713da215195f12f3263c8b9742e6e61811c&v=4"
            alt="Diego Rodrigues"
          />
          <div>
            <strong>githubexplorer</strong>
            <p>Explore GitHub Repositories</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/61213894?s=460&u=5ea5b713da215195f12f3263c8b9742e6e61811c&v=4"
            alt="Diego Rodrigues"
          />
          <div>
            <strong>githubexplorer</strong>
            <p>Explore GitHub Repositories</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
