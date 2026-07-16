# Screenshots

This directory should contain screenshots of the app for the Build with Elements Challenge submission.

## How to Capture

1. Run the app: `npm run dev`
2. Open `http://localhost:5173`
3. Wait for the Elements editor to load (~2-3 seconds)
4. Take screenshots of:
   - **editor-view.png** — The full editor panel with the loaded template
   - **preview-view.png** — The preview panel showing the rendered email
   - **mobile-view.png** — The preview at mobile width (resize browser to ~375px)

## Tools

- **macOS:** Cmd + Shift + 4
- **Windows:** Snipping Tool or Win + Shift + S
- **Linux:** GNOME Screenshot or Flameshot

## GIF Capture

For a GIF showing the editor in action:
- macOS: Use QuickTime screen recording
- Windows: Use Xbox Game Bar (Win + G) or OBS Studio
- Linux: Use SimpleScreenRecorder or Peek

Convert video to GIF using [ezgif.com](https://ezgif.com/video-to-gif) or `ffmpeg`:

```bash
ffmpeg -i recording.mp4 -vf "fps=10,scale=320:-1:flags=lanczos" output.gif
```
