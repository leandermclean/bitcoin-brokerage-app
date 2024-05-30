# Bitcoin Brokerage App

## Prerequisites

- Node.js and npm
- Firebase account
- VPS (e.g., DigitalOcean, AWS)
- Nginx

## Setup

1. Clone the repository:

```bash
git clone https://github.com/your-repo/bitcoin-brokerage-app.git
cd bitcoin-brokerage-app

Install dependencies:
npm install

Set up Firebase:

Create a new Firebase project
Add your Firebase config to firebase-config.js

Deploy the app
./install.sh

Visit your VPS IP address in the browser to see the application

Updating the App
./update.sh


### Step-by-Step Instructions

1. **Clone the Repository**: Clone your project repository to your local machine.

    ```bash
    git clone https://github.com/your-repo/bitcoin-brokerage-app.git
    cd bitcoin-brokerage-app
    ```

2. **Set Up Firebase**:
    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Create a new project.
    - Register your app with Firebase.
    - Copy your Firebase configuration and update `firebase-config.js` with your credentials.

3. **Install Dependencies**: Install the required Node.js dependencies.

    ```bash
    npm install
    ```

4. **Set Up VPS**:
    - Deploy your app on a VPS (e.g., DigitalOcean, AWS).
    - Make sure Nginx is installed and configured correctly.
    - Upload your project files to the VPS.

5. **Run the Installation Script**: Execute the installation script to set up your environment.

    ```bash
    ./install.sh
    ```

6. **Access Your App**: Visit your VPS IP address in the browser to see the application.

7. **Follow the Setup Wizard**: Create the first admin account using the setup wizard.

8. **Manage Your App**:
    - Use the dashboard to monitor Bitcoin prices, wallet balances, and transactions.
    - Get buy and sell quotes from the quote page.
    - Manage transactions and clients from their respective pages.
    - Update settings from the settings page.

9. **Update the App**: To deploy updates, run the update script.

    ```bash
    ./update.sh
    ```

This completes the setup and deployment process for your Bitcoin brokerage app. If you have any questions or need further assistance, feel free to ask!

