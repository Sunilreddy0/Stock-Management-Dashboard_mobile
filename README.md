# React Native Stock Tracking App

This is a mobile application developed using React Native that enables users to track stock information.

## Overview

The React Native Stock Tracking App allows users to:

- View a list of stocks with their latest prices.
- Access detailed information about a specific stock including historical price data.
- Visualize historical stock prices using interactive charts.

### Requirements

- Node.js (v14 or later)
- npm
- Expo CLI

### Steps

1. **Clone the repository**

    ```bash
    git clone https://github.com/Sunilreddy0/Stock-Management-Dashboard_mobile.git
    switch to master branch
    cd stock_management_dashboard_mobile
    ```

2. **Install dependencies**

    Using npm:

    ```bash
    npm install
    ```

3. **Start the application**

    ```bash
    expo start
    ```

    This will start the Expo development server. You can run the app on an Android/iOS simulator or scan the QR code with the Expo Go app on your mobile device to run it there.

## Folder Structure

- `src/`: Contains the main source code.
  - `screens/`: Screen components of the application.
  - `components/`: Reusable UI components.
  - `navigation/`: Navigation setup using React Navigation.
  - `api/`: API handling and requests.
- `assets/`: Stores static assets like images, fonts, etc.
- `App.js`: Main entry point of the application.

## Dependencies

- React
- React Native
- React Navigation
- Axios
- Other necessary dependencies for UI elements, charts, etc.

## Usage

The `src/` directory contains the primary source code of the application. Here's a brief overview of the folders:

- `screens/`: Contains different screens of the application, such as StockList and StockDetails.
- `components/`: Holds reusable UI components used across multiple screens.
- `navigation/`: Manages navigation using React Navigation.
- `api/`: Handles API requests to fetch stock data.

Modify and expand the application based on your requirements.
