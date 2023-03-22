const inquirer = require('inquirer')
const chalk = require('chalk')

const fs = require('fs')

operation()

function operation() {
    inquirer
        .prompt([{
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: [
                'Criar Conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Emprestimo',
                'Sair',
            ],
        }, ]).then((answer) => {
            const action = answer['action']

            if (action === 'Criar Conta') {
                createAccount()
            } else if (action === 'Depositar') {
                deposit()

            } else if (action === 'Consultar Saldo') {
                saldo()

            } else if (action === 'Sacar') {
                sacar()

            } else if (action === 'Sair') {
                console.log(chalk.bgBlue.black('Se livrou dos juros em padrinho!'))
                process.exit()
            } else if (action === 'Emprestimo') {
                emprest()
            }
        })
        .catch(err => console.log(err))

}


// criação de conta

function createAccount() {
    console.log(chalk.bgRed.black('Se ferrou, nosso banco tem muito juros.'))
    console.log(chalk.green('Escolha uma das opções para continuar.'))
    buildAccount()
}

function buildAccount() {

    inquirer.prompt([{
            name: 'accountName',
            message: 'Digite o nome da sua conta:'
        }


    ]).then(answer => {
        const accountName = answer['accountName']

        console.info(accountName)

        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Ta fazendo merda ai padrinho,conta já existe.'))
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function(err) {
            console.log(err)
        })
        console.log(chalk.green('Parabéns sua conta foi criado, aproveite nossos juros!'))
        operation()

    }).catch((err) => console.log(err))

}

// depositar

function deposit() {

    inquirer.prompt([{
            name: 'accountName',
            message: 'Qual o nome da sua Conta?',
        }]).then((answer) => {
            const accountName = answer['accountName']

            if (!checkAccount(accountName)) {
                return deposit()
            }

            inquirer.prompt([{
                    name: 'amount',
                    message: 'Qual o valor do deposito?'
                }]).then((answer) => {

                    const amount = answer['amount']

                    // depositando
                    addAmount(accountName, amount)
                    operation()
                })
                .catch(err => console.log(err))

        })
        .catch(err => console.log(err))
}

// verificação de conta.

function checkAccount(accountName) {

    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Ta fazendo cagada padrinho, conta não existe!'))
        return false
    }

    return true

}


//somando valor

function addAmount(accountName, amount) {

    const account = getAccount(accountName)

    if (!amount) {
        console.log(chalk.bgRed.black('Errou ai padrinho,tente novamente!'))
        return deposit()
    }
    account.balance = parseFloat(amount) + parseFloat(account.balance)
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(account),
        function(err) {
            console.log(err)
        },
    )
    console.log(chalk.green(`Tu depositou R$${amount} na sua conta padrinho.`))
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r',
    })

    return JSON.parse(accountJSON)
}

// saldo

function saldo() {
    inquirer.prompt([{
            name: 'accountName',
            message: 'Qual nome da sua conta?'
        }]).then((answer) => {

            const accountName = answer['accountName']

            //verifcar se a conta existe

            if (!checkAccount(accountName)) {
                return saldo()
            }

            const accountData = getAccount(accountName)

            console.log(chalk.bgBlue.black(`Seu saldo é de R$${accountData.balance}.`))
            operation()

        })
        .catch(err => console.log(err))
}

//sacar

function sacar() {

    inquirer.prompt([{
            name: 'accountName',
            message: 'Qual a conta que vai sacar?'
        }]).then((answer) => {

            const accountName = answer['accountName']
            if (!checkAccount(accountName)) {
                return sacar()
            }

            inquirer.prompt([{
                    name: 'amount',
                    message: 'Quanto tu vai sacar padrinho!'
                }]).then((answer) => {

                    const amount = answer['amount']

                    console.log(amount)
                    removeAmount(accountName, amount)

                })
                .catch(err => console.log(err))

        })
        .catch(err => console.log(err))

}


function removeAmount(accountName, amount) {

    const accountData = getAccount(accountName)

    if (!amount) {
        console.log(chalk.bgRed.black('Errou ai cria, tente novamente!'))
        return sacar()
    }

    if (accountData.balance < amount) {
        console.log(chalk.bgRed.black('Coe irmaõ tu não tem esse valor todo não.'))
        return sacar()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(err) {
            console.log(err)
        }
    )

    console.log(chalk.bgGray.black(`Você realizou um saque de R$${amount}.`))
    operation()

}

function emprest() {
    inquirer.prompt([{
            name: 'accountName',
            message: 'Qual a conta que deseja pegar o emprestimo?'
        }]).then((answer) => {
            const accountName = answer['accountName']
            if (!checkAccount(accountName)) {
                return emprest()
            }

        })
        .catch(err => console.log(err))
}