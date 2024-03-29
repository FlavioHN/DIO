from time import sleep

menu = ('''
|============##$##============|
|   SisBank Crypto Finance    |
|============##$##============|
    
    |------ Serviços ------|
    
        [1] - Saldo
        [2] - Deposito
        [3] - Saque
        [0] - Finalizar
    
    |----------------------|
''')
print(menu)
sleep(2)

saldo = 0
deposito = 0
retirada = 0

encerrar = ("Obrigado por utilizar nossos serviços!...")

#while servico != 0:
while True:

    print("=", "-"*30,"=")
    servico = int(input('Selecione a operação desejada: '))
    print("=", "-"*30,"=\n")

    if servico > 3:
        print("Opção invalida, favor digitar um serviço listado.")
        print(menu)
    
    elif servico == 1:
        print(f"Saldo disponivel R$ {saldo:.2f}")
        retorno_menu = str(input("Realizar nova operação: - [Sim] - [Nao]: "))
        if retorno_menu.lower() == 'sim':
            print(menu)
        elif retorno_menu.lower() == 'nao':
            print(encerrar)
            break
        
    elif servico == 2:
        depositar = int(input("Digite o valor a ser depositado: "))
        print(f"Confirmar deposito no valor R$ {depositar:.2f}:")
        confirmar_deposito = str.lower((input("[Sim] - [Nao]: ")))
        
        if confirmar_deposito == 'sim':
            saldo += depositar
            print("Desposito realizado com sucesso!")
            
            retorno_menu = str(input("Realizar nova operação: - [Sim] - [Nao]: "))
            if retorno_menu.lower() == 'sim':
                print(menu)
            elif retorno_menu.lower() == 'nao':
                print(encerrar)
                break
        
        elif confirmar_deposito == 'nao':
            print("deposito não realizado!.")
            retorno_menu = str(input("Realizar nova operação: - [Sim] - [Nao]: "))
            if retorno_menu.lower() == 'sim':
                print(menu)
            elif retorno_menu.lower() == 'nao':
                print(encerrar)
                break
            
    elif servico == 3:
        saque = int(input("Digite o valor a ser retirado: "))
        if saque <= saldo and retirada < 3:
            saldo -= saque
            retirada +=1
            print(f"Saque no valor R$ {saque:.2f} realizado com sucesso!")
            
            retorno_menu = str(input("Realizar nova operação: - [Sim] - [Nao]: "))
            if retorno_menu.lower() == 'sim':
                print(menu)
            elif retorno_menu.lower() == 'nao':
                print(encerrar)
                break

        elif saque <= saldo and retirada == 3:
            print("Quantidade de saques diario excedido! \nRetorne amanha para realizar um novo saque!")
            
            retorno_menu = str(input("Realizar nova operação: - [Sim] - [Nao]: "))
            if retorno_menu.lower() == 'sim':
                print(menu)
            elif retorno_menu.lower() == 'nao':
                print(encerrar)
                break

        elif saque > saldo:
            print("Saldo em conta menor que o solicitado!")
            
            retorno_menu = str(input("Realizar nova operação: - [Sim] - [Nao]: "))
            if retorno_menu.lower() == 'sim':
                print(menu)
            elif retorno_menu.lower() == 'nao':
                print(encerrar)
                break
            
    elif servico == 0:
        print(encerrar)
        break