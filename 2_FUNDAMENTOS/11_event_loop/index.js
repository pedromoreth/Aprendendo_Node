function a() {
    console.log('Executando A')
}

function b() {
    console.log('Executando b')
}

function c() {
    console.log('Executando c')
    a()
    b()
}

c()