# 💰 TrackMyDollar V3.0 - Budget On The Go(BOTGo) 💰

<hr>
<p align="center">
<a><img  height=360 width=550 
  src="https://github.com/deekay2310/MyDollarBot/blob/c56b4afd4fd5bbfffea0d0a4aade58596a5cb678/docs/0001-8711513694_20210926_212845_0000.png" alt="Expense tracking made easy!"></a>
</p>
<hr>

![MIT license](https://img.shields.io/badge/License-MIT-green.svg)
[![Platform](https://img.shields.io/badge/Platform-Telegram-blue)](https://desktop.telegram.org/)
![GitHub](https://img.shields.io/badge/Language-Python-blue.svg)
[![GitHub contributors](https://img.shields.io/github/contributors/prithvish-doshi-17/MyDollarBot-BOTGo)](https://github.com/prithvish-doshi-17/MyDollarBot-BOTGo/graphs/contributors)
[![DOI](https://zenodo.org/badge/414661894.svg)](https://zenodo.org/badge/latestdoi/414661894)
[![Build Status](https://app.travis-ci.com/sak007/MyDollarBot-BOTGo.svg?branch=main)](https://app.travis-ci.com/github/sak007/MyDollarBot-BOTGo)
[![codecov](https://codecov.io/gh/sak007/MyDollarBot-BOTGo/branch/main/graph/badge.svg?token=5AYMR8MNMP)](https://codecov.io/gh/sak007/MyDollarBot-BOTGo)
[![GitHub issues](https://img.shields.io/github/issues/prithvish-doshi-17/MyDollarBot-BOTGo)](https://github.com/prithvish-doshi-17/MyDollarBot-BOTGo/issues?q=is%3Aopen+is%3Aissue)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/prithvish-doshi-17/MyDollarBot-BOTGo)](https://github.com/prithvish-doshi-17/MyDollarBot-BOTGo/issues?q=is%3Aissue+is%3Aclosed)

![Fork](https://img.shields.io/github/forks/deekay2310/MyDollarBot?style=social)
<hr>

## About TrackMyDollar

TrackMyDollar is an easy-to-use Telegram Bot that assists you in recording your daily expenses on a local system without any hassle
With simple commands, this bot allows you to:

*   Add/Record a new spending

*   Show the sum of your expenditure for the current day/month

*   Display your spending history

*   Clear/Erase all your records

*   Edit/Change any spending details if you wish to

## What's new?

*   New Web Client: Added an intutive web client for the telegram bot which contains functionality to view the budget, update the budget, delete the budget, add a spending record, add a recurring spending record and manage categories

*   Reformat the run.sh script into an install script and run script

*   Fixed failing Pytests and fixed importing bug

*   Created a GUI page that shows all the budget information at once

*   Created API endpoints for all functions

*   Create a telegram functionality that opens the GUI webpage&#x20;

*   Created react front end app that calls the flask app serving the api endpoint

*   Includes a web page or function for:

    &#x20;   budget view with per category view\
    &#x20;   budget update (with per category update\
    &#x20;   budget delete with per category delete\
    &#x20;   add a new spending record\
    &#x20;   add a recurring spending record\
    &#x20;   edit spending\
    &#x20;   add new category\
    &#x20;   delete new category\
    &#x20;   show all custom categories

## What more can be done?

Please refer to the issue list available [here](https://github.com/prithvish-doshi-17/MyDollarBot-BOTGo/issues) to see what more can be done to make MyDollarBot better. Please refer to the MyDollarBot project present [here](https://github.com/prithvish-doshi-17/MyDollarBot-BOTGo/projects) to have a look at the tasks to be done, tasks currently in progress and tasks already done.

Additionally, there is still some functionality needed to be added in the web client including display the sum of the monthly expenditure, estimate the expenditure for the next month, delete/erase all records. Deployment so the Web Client doesn't only run locally is also a future task (potentially deploy the app to Google Cloud Platform and having a continious integration solution).

## Demo

<https://user-images.githubusercontent.com/72677919/140454147-f879010a-173b-47b9-9cfb-a389171924de.mp4>

## About MyDollarBot's web client

**Web-based GUI:** This feature represents an interface upgrade from a Telegram bot, which previously have handled user inputs for budget management through text commands, to a more intuitive web-based platform. The web GUI allows for easier navigation, more complex interactions, and a better visual representation of the user's budget data.

**Prerequistis:**

*   **Telegram Bot:** The Telegram bot must be operational before users can access the web GUI. This bot is the primary tool for notifications and quick commands or queries about the budget status.

*   **Installation & Setup:** Users need to follow specific installation instructions to get the bot running. This process involves setting up a Telegram bot account, configuring it to work with the user's budget program, and ensuring it's live and capable of receiving commands. Additionally the user has to run the backend Flask API file and the frontend React. Details for this is listed below.

## Location of Code for this Feature

The location of the frontend components is in the frontend folder in the project

The location of the backend pages is in the backend folder in the project

## Run Instructions

## How to run the Web Client BackEnd

1.  **Access Project Directory:**

    *   Open your command line and navigate to your project's home directory using `cd /path/to/your/MyDollarBot-BOTGo`.

2.  **Verify Python Installation:**

    *   Ensure Python is installed by running `python --version` or `python3 --version`. If not, install it from the [official site](https://www.python.org/downloads/).

3.  **Install Dependencies:**

    *   In the project directory, run `pip install -r requirements.txt` to install any necessary Python dependencies.

4.  **Run the Application:**

    *   Start your application with `python ./backend/src/app.py`, replacing `python` with `python3` or `python<version>` if needed.

    *   Ensure the telegram bot is also running, README.md contains this information

## How to run the Web Client FrontEnd

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

## Telegram Bot Installation guide

The below instructions can be followed in order to set-up this bot at your end in a span of few minutes! Let's get started:

1.  Clone this repository to your local system.

2.  Start a terminal session in the directory where the project has been cloned. Run the following command to install the required dependencies:

<!---->

      pip install -r requirements.txt

1.  In Telegram, search for "BotFather". Click on "Start", and enter the following command:

<!---->

      /newbot

Follow the instructions on screen and choose a name for your bot. After this, select a username for your bot that ends with "bot".

1.  BotFather will now confirm the creation of your bot and provide a TOKEN to access the HTTP API - copy and save this token for future use.

2.  In the directory where this repo has been cloned, please run the below command to execute a bash script to run the Telegram Bot:

<!---->

       ./run.sh

(OR)

       bash run.sh

Please note that it will ask you to paste the API token you received from Telegram in step 4.
A successful run will generate a message on your terminal that says "TeleBot: Started polling."

1.  In the Telegram app, search for your newly created bot by entering the username and open the same. Now, on Telegram, enter the "/start" or "/menu" command, and you are all set to track your expenses!

## Testing

We use pytest to perform testing on all unit tests together. The command needs to be run from the home directory of the project. The command is:

    python run -m pytest test/

## Code Coverage

Code coverage is part of the build. Every time new code is pushed to the repository, the build is run, and along with it, code coverage is computed. This can be viewed by selecting the build, and then choosing the codecov pop-up on hover.

Locally, we use the coverage package in python for code coverage. The commands to check code coverage in python are as follows:

    coverage run -m pytest test/
    coverage report

## Notes:

You can download and install the Telegram desktop application for your system from the following site: <https://desktop.telegram.org/>


<hr>
<p>Title:'Track My Dollar'</p>
<p>Version: '3.1'</p>
<p>Description: 'An easy to use Telegram Bot to track everyday expenses'</p>
<p>Authors(Iteration 4):'Sanjit, Arul, Harris, Sarvesh'</p>
<p>Authors(Iteration 3):'Vraj, Alex, Leo, Prithvish, Seeya'</p>
<p>Authors(Iteration 2):'Athithya, Subramanian, Ashok, Zunaid, Rithik'</p>
<p>Authors(Iteration 1):'Dev, Prakruthi, Radhika, Rohan, Sunidhi'</p>
