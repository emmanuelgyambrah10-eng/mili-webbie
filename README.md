# Mili's webbie

Simple static project to hold a small webpage and assets.

Project structure
- `index.html` — main page (entry point)
- `css/style.css` — site styles
- `images/` — project images (renamed from `image/`)

Notes
- I sanitized the original `MILI.html` and created `index.html` as the site's entry.
- QB64/QBASIC files were removed at your request.

How to preview
- Open `index.html` in your browser (double-click the file or use "Open With" → your browser).
- From PowerShell, run:

```powershell
Start-Process "index.html"
```

If you want a quick local server (optional), and you have Python installed, run:

```powershell
# for Python 3.x
python -m http.server 8000

# then open http://localhost:8000 in your browser
```

VS Code users
- You can run the included VS Code task to start the same server: open the Command Palette (F1) → "Tasks: Run Task" → choose "Serve: Python HTTP (8000)".

About the Greet button
- `index.html` includes a small interactive button (top of main). Click "Greet" to enter your name; the page will display a friendly greeting using `js/main.js`.

If you'd like any further reorganization (move other assets, add a `js/` folder, or initialize a git repo), tell me and I can do it.
