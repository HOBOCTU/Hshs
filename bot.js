const TelegramBot = require('node-telegram-bot-api');

// Замените 'YOUR_TELEGRAM_BOT_TOKEN' на ваш токен
const token = 'YOUR_TELEGRAM_BOT_TOKEN';

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Обрабатываем команду /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Добро пожаловать! Я ваш Telegram-бот.');
});

// Обрабатываем текстовые сообщения
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // Проверяем, если сообщение содержит "хэпенис"
    if (msg.text.toLowerCase() === 'хэпенис') {
        bot.sendMessage(chatId, 'СЭР ДП СЭР');
    }
});

// Пример команды /help
bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    const helpMessage = 'Доступные команды:\n/start - Запустить бота\n/help - Получить помощь';
    bot.sendMessage(chatId, helpMessage);
});
