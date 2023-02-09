const errors = {

  user: (error: Error) => {
    switch(error.message) {
    case 'Incorrect email/password combination.': return 'Combinação incorreta de e-mail/senha.';
    case 'JWT token is missing': return 'JWT token está ausente';
    case 'Email address already used.': return 'Endereço de e-mail já usado.';
    case 'User not found': return 'Usuário não encontrado.';
    case 'Account desactived.' : return 'Conta desativada.';
    case 'User does not exists.' : return 'O usuário não existe.';
    case 'User is inactive.' : return 'O usuário está inativo.';
    case 'Request failed with status code 401': return 'Combinação incorreta de e-mail/senha.';

    default: {
      return 'Aconteceu algum erro.';
    }
    }
  }
};

export default errors;
