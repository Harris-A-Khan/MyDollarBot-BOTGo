# About MyDollarBot's frontend/GUI

**Web-based GUI:** This feature represents an interface upgrade from a Telegram bot, which previously have handled user inputs for budget management through text commands, to a more intuitive web-based platform. The web GUI allows for easier navigation, more complex interactions, and a better visual representation of the user's budget data.

**Prerequistis:**

*   **Telegram Bot:** The Telegram bot must be operational before users can access the web GUI. This bot is the primary tool for notifications and quick commands or queries about the budget status.

*   **Installation & Setup:** Users need to follow specific installation instructions to get the bot running. This process involves setting up a Telegram bot account, configuring it to work with the user's budget program, and ensuring it's live and capable of receiving commands. Additionally the user has to run the backend Flask API file and the frontend React. Details for this is listed below.

# Location of Code for this Feature

The location of the frontend components is in the frontend folder in the project

The location of the backend pages is in the backend folder in the project

# Run Instructions

## How to run the BackEnd

1.  **Access Project Directory:**

    *   Open your command line and navigate to your project's home directory using `cd /path/to/your/MyDollarBot-BOTGo`.

2.  **Verify Python Installation:**

    *   Ensure Python is installed by running `python --version` or `python3 --version`. If not, install it from the [official site](https://www.python.org/downloads/).

3.  **Install Dependencies:**

    *   In the project directory, run `pip install -r requirements.txt` to install any necessary Python dependencies.

4.  **Run the Application:**

    *   Start your application with `python ./backend/src/app.py`, replacing `python` with `python3` or `python<version>` if needed.

    *   Ensure the telegram bot is also running, README.md contains this information

## How to run the FrontEnd

1.  **Node.js Installation:**

    *   Begin by installing Node.js, a prerequisite for managing the application's dependencies. Access the [official download page](https://nodejs.org/en/download/), choose the suitable version for your system, and follow the installation guide.

2.  **Backend and Telegram Bot Setup:**

    *   Ensure your backend server is active and the Telegram bot is functional, as these components are crucial for the system's full capabilities. The `README.md` file in your project's main directory contains specific instructions for this setup.

3.  N**avigating to the Frontend Directory:**

    *   Ensure you are in the home directory of the project /path/to/your/MyDollarBot-BOTGo

    *   Using the command line, change your current directory by running `cd frontend/mydollarbot-frontend`, positioning you in the frontend folder of your project for the subsequent steps.

4.  **Yarn Installation and Setup:**

    *   With Node.js installed, execute `npm install yarn` in the 'mydollarbot-frontend' directory to install Yarn, an efficient package manager.

5.  **Dependency Installation:**

    *   Run the command `yarn install` within the directory. This command scrutinizes the `package.json` file and installs the required dependencies for the frontend application.

6.  **Launching the Development Server:**

    *   Initiate the local development server by executing `yarn dev`. This command allows for local testing and development of the application.

7.  **Accessing the Web Interface via Telegram:**

    *   Finally, interact with your Telegram bot and use the '/web' command. This action should provide a URL to your locally hosted application, typically accessible at `http://localhost:5173`, allowing you to engage with the web-based interface directly.

