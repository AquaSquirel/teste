const Gpio = require('pigpio').Gpio;

// Configura o pino de saída (sinal contínuo)
const pinOut = new Gpio(17, {
    mode: Gpio.OUTPUT,
});

// Configura o pino de entrada (recebe o sinal)
const pinIn = new Gpio(18, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_OFF, // Nenhum resistor de pull-up ou pull-down
});

// Envia um sinal contínuo (HIGH ou LOW)
pinOut.digitalWrite(1); // Sinal contínuo HIGH

console.log('Sinal contínuo sendo enviado no pino 17');

// Verifica constantemente o estado do pino de entrada
setInterval(() => {
    const signalReceived = pinIn.digitalRead(); // Lê o estado do pino de entrada
    console.log('Estado do pino de entrada:', signalReceived ? 'HIGH' : 'LOW');

    if (signalReceived) {
        console.log('Sinal contínuo RECEBIDO no pino de entrada!');
    } else {
        console.log('Sinal não recebido no pino de entrada.');
    }
}, 1000); // Verifica a cada 1 segundo
