// Considerando obj, este dado precisa ser logado de forma
// segura, escondendo dados sensiveis do usuario, como
// numero de cartão de crédito, senhas, cvv do cartão
// e substituir pelo mesmo numero de caracteres com um caracter
// de máscara.

const obj = {
  user: 'John',
  password: 'test123',
  payment_options: [
    {
      credit_card_number: '444444444444444',
      cvv: '987',
      expiration_month: '09',
      expiration_year: '2023',
    },
    {
      credit_card_number: '444444444444444',
      cvv: '789',
      expiration_month: '08',
      expiration_year: '2024',
    }
  ],
  family_plan: {
    type: 'pro',
    users: [
      {
        user: 'mickey',
        password: 'asdf',
      },
      {
        user: 'Gohan',
        password: 'test123',
      }
    ]
  }
}
