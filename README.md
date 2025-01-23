# Telegram Mini Apps NPM Package 📦

A powerful and feature-rich TypeScript-based NPM package for interacting with Telegram Mini Apps. This package provides a seamless way to integrate Telegram Mini Apps into your projects, offering a wide range of functionalities to enhance user experience. 🚀

---

## Features ✨

- **Core Methods**: Ready, expand, close, and more. 🛠️
- **UI Controls**: BackButton, MainButton, SettingsButton. 🎛️
- **Haptic Feedback**: Provide tactile feedback to users. 📳
- **Cloud Storage**: Store and retrieve user-specific data. ☁️
- **Biometric Authentication**: Integrate fingerprint and face recognition. 🔒
- **Location Manager**: Access device location. 🌍
- **Sensors**: Accelerometer, Gyroscope, and Device Orientation. 📡
- **QR Scanner**: Scan QR codes directly in the app. 📷
- **Clipboard**: Read text from the clipboard. 📋
- **Sharing**: Share media to stories and messages. 📤
- **Fullscreen Mode**: Enter and exit fullscreen mode. 🖥️
- **Orientation Control**: Lock and unlock screen orientation. 🔄
- **Home Screen Integration**: Add the app to the home screen. 🏠
- **Event Handling**: Listen to and manage app events. 🎧

___




## Installation ⚙️

To install the package, run the following command:

```bash
npm install telegram-mini-apps
```


## Usage  🛠️
Importing the Package
```bash
import { TelegramWebApp } from 'telegram-mini-apps';

// Initialize the app
TelegramWebApp.ready();

// Set header color
TelegramWebApp.setHeaderColor('#ffffff');

// Show the back button
TelegramWebApp.BackButton.show();

// Set main button text
TelegramWebApp.MainButton.setText('Submit');

// Handle main button click
TelegramWebApp.MainButton.onClick(() => {
  console.log('Main button clicked!');
});

// Provide haptic feedback
TelegramWebApp.HapticFeedback.impactOccurred('medium');

// Get device location
TelegramWebApp.LocationManager.getLocation((location) => {
  console.log('Location:', location);
});

// Scan QR code
TelegramWebApp.QRScanner.show({ text: 'Scan QR Code' }, (data) => {
  console.log('QR Code data:', data);
});

// Read text from clipboard
TelegramWebApp.Clipboard.readText((text) => {
  console.log('Clipboard text:', text);
});

// Share media to story
TelegramWebApp.Share.shareToStory('https://example.com/media');

// Enter fullscreen mode
TelegramWebApp.Fullscreen.requestFullscreen();

// Lock screen orientation
TelegramWebApp.Orientation.lockOrientation();

// Add app to home screen
TelegramWebApp.HomeScreen.addToHomeScreen();

// Listen to events
TelegramWebApp.Events.onEvent('viewportChanged', (data) => {
  console.log('Viewport changed:', data);
});
```


## Modules 📚

Core Modules

BackButton: Control the back button in the Mini App header. ↩️
MainButton: Manage the main button at the bottom of the Mini App. 🎯
HapticFeedback: Provide haptic feedback for user interactions. 📳
CloudStorage: Store and retrieve user-specific data. ☁️
BiometricManager: Handle biometric authentication. 🔒
LocationManager: Access and manage device location. 🌍
Accelerometer: Access accelerometer data. 📡
DeviceOrientation: Access device orientation data. 🔄
Gyroscope: Access gyroscope data. 🌀
SettingsButton: Control the settings button in the Mini App. ⚙️


## Utility Modules
Invoice: Open and manage invoices. 💳

QRScanner: Scan QR codes. 📷

Clipboard: Read text from the clipboard. 📋

Share: Share media to stories and messages. 📤

Fullscreen: Manage fullscreen mode. 🖥️

Orientation: Control screen orientation. 🔄

HomeScreen: Add the app to the home screen. 🏠

Events: Listen to and manage app events. 🎧


## Events 🎧
The following events are available for handling user interactions and app state changes:

viewportChanged: Occurs when the visible section of the Mini App changes.

mainButtonClicked: Occurs when the main button is clicked.

backButtonClicked: Occurs when the back button is clicked.

settingsButtonClicked: Occurs when the settings button is clicked.

invoiceClosed: Occurs when an invoice is closed.

qrTextReceived: Occurs when a QR code is scanned.

clipboardTextReceived: Occurs when text is read from the clipboard.

shareMessageSent: Occurs when a message is successfully shared. 📤✅

shareMessageFailed: Occurs if sharing a message fails. 📤❌

emojiStatusSet: Occurs when the emoji status is successfully set. 😎✅
emojiStatusFailed: Occurs if setting the emoji status fails. 😎❌
emojiStatusAccessRequested: Occurs when emoji status access is requested. 🔒
fileDownloadRequested: Occurs when the user responds to a file download request. 📥



Example: Listening to Events
```bash
TelegramWebApp.Events.onEvent('shareMessageSent', () => {
  console.log('Message shared successfully!');
});

TelegramWebApp.Events.onEvent('shareMessageFailed', (data) => {
  console.log('Failed to share message:', data.error);
});

TelegramWebApp.Events.onEvent('emojiStatusSet', () => {
  console.log('Emoji status set successfully!');
});

TelegramWebApp.Events.onEvent('emojiStatusFailed', (data) => {
  console.log('Failed to set emoji status:', data.error);
});

TelegramWebApp.Events.onEvent('emojiStatusAccessRequested', (data) => {
  console.log('Emoji status access requested:', data.status);
});

TelegramWebApp.Events.onEvent('fileDownloadRequested', (data) => {
  console.log('File download status:', data.status);
});
```



## Contributing 🤝

We welcome contributions! If you'd like to contribute to this project, please follow these steps:

```bash
Fork the repository. 🍴
Create a new branch for your feature or bugfix. 🌿
Commit your changes. 💾
Push your branch to your fork. 🚀
Submit a pull request. 🎉

```

## License 📄
This project is licensed under the MIT License. See the LICENSE file for details.


## Support 💬
If you have any questions or need support, feel free to open an issue on GitHub or reach out to us at support@example.com.


## Acknowledgments 🙏
Thanks to Telegram for providing the Mini Apps platform. 📱

Special thanks to all contributors who helped make this project better. 🌟

Happy Coding! 🎉👨‍💻👩‍💻
Copy




