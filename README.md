# Web Video Remote for Android TV

A simple browser extension that allows you to control web-based video players with your standard remote control when using an extension-supported browser on Android TV (or Google TV).

## 🚀 Features

*   **⏯️ Play/Pause:** Use the `OK/Enter` or `MediaPlayPause` button.
*   **⏪ Seek Backward:** Use the `D-pad Left` button to rewind 10 seconds.
*   **⏩ Seek Forward:** Use the `D-pad Right` button to fast-forward 10 seconds.
*   **🔊 Volume Control:** Use the `D-pad Up/Down` buttons to adjust volume.
*   **🧠 Smart Activation:** Only runs on pages that contain a video element.
*   **🖼️ Embedded Player (Iframe) Support:** Works flawlessly with embedded video players.

## ✅ Compatibility

This extension is designed for browsers that support desktop Chromium extensions on Android. It has been tested and is confirmed to work perfectly on:

*   [**Ultimatum**](https://github.com/gonzazoid/Ultimatum) - A browser that offers excellent extension support because it is based on the **'Android Desktop' version of Chromium**. This specific version of Chromium is a result of Google's efforts to merge Chrome OS and Android, providing desktop-class extension compatibility on mobile platforms.

## 🛠️ Installation

There are two methods for installation. For most users, installing via the `.crx` file is recommended.

### Method 1: Recommended (Easy Install via .crx File)

1.  Go to this project's [**Releases Page**](https://github.com/KerimDemirkaynak/WebVideoRemoteforAndroidTV/releases).
2.  Under the latest release, find the `Assets` section and download the file ending in `.crx`.
3.  Transfer the downloaded `.crx` file to your Android TV.
4.  Using a file manager on your TV, click the file and choose to open it with **Ultimatum**.
5.  Ultimatum will prompt you to install the extension. Confirm the installation, and you're done!

### Method 2: Manual Install (For Developers)

This method is for those who want to run the extension from the source code or modify it.

1.  **Download the Code:** Download the project files as a ZIP and extract them to a folder.
2.  **Transfer Folder to TV:** Copy the entire project folder to your Android TV via USB or a network share.
3.  **Open Your Browser:** On your TV, open a browser that supports loading unpacked extensions.
4.  **Navigate to Extensions:** Go to the `Extensions` section from the browser's menu.
5.  **Enable Developer Mode:** Turn on the `Developer Mode` toggle.
6.  **Load the Extension:** Click the `Load unpacked` button.
7.  **Select the Folder:** Choose the project folder you transferred to your TV.
