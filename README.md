# FinAPI- Financeira

> API para simular finanças de um usuário

## Requisitos
* [:heavy_check_mark:] Deve ser possível criar umma conta
* [:heavy_check_mark:] Deve ser possível buscar o extrato bancário do cliente
* [:heavy_check_mark:] Deve ser possível realizar um depósito
* [:heavy_check_mark:] Deve ser possível realizar um saque
* [:heavy_check_mark:] Deve ser possível buscar o extrato bancário do cliente por data
* [] Deve ser possível atualizar dados da conta do cliente
* [] Deve ser possível obter dados da conta do cliente
* [] Deve ser possível deletar uma conta

## Regras de negócio
* [:heavy_check_mark:] Não deve ser possível cadastrar uma conta com CPF já existente
* [:heavy_check_mark:] Não deve ser possível buscar extrato em uma conta não existente
* [:heavy_check_mark:] Não deve ser possível fazer depósito em uma conta não existente
* [:heavy_check_mark:] Não deve ser possível fazer saque em uma conta não existente
* [:heavy_check_mark:] Não deve ser possível fazer saque quando o saldo for insuficiente
* [] Não deve ser possível excluir uma conta não existente