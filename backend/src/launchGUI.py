from telegram import Bot, Update
from telegram.ext import CommandHandler, CallbackContext, Updater

# Replace with your token from BotFather
TOKEN = '' # Replace with the given Bot token
WEBPAGE_URL = 'http://localhost:5173'  # Replace with your GUI webpage URL

def start(update: Update, context: CallbackContext) -> None:
    """Send a message with a link to the GUI webpage when the command /start is issued."""
    user = update.effective_user
    update.message.reply_html(
        fr'Hello {user.mention_html()}!'
        fr'\nClick <a href="{WEBPAGE_URL}">here</a> to open the GUI webpage.'
    )

def main() -> None:
    """Start the bot."""
    updater = Updater(TOKEN)

    dp = updater.dispatcher

    dp.add_handler(CommandHandler("start", start))

    updater.start_polling()

    updater.idle()

if __name__ == '__main__':
    main()
