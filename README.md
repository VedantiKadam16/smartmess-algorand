# SmartMess

**Token-based campus meal management dApp on Algorand** — transparent, prepaid meal tracking using blockchain wallets and smart contracts.

## Quick start

**Run the frontend:**
1. Open a terminal in the project folder.
2. From the `frontend` folder run: `python -m http.server 8080`
   - Or double-click `frontend/run.bat` (Windows).
3. Open **http://localhost:8080** in your browser.

Alternatively, open `frontend/index.html` directly in a browser (some paths may differ).

**Backend:** See `backend/` and `requirements.txt` for Python setup when integrating the Algorand SDK.

## Project structure

```
smartmess-algorand/
├── frontend/           # Web UI (HTML + CSS + JS)
│   ├── index.html      # 1. Landing / Home
│   ├── how-it-works.html   # 2. How It Works
│   ├── features.html       # 3. Features & Benefits
│   ├── about.html          # 4. About / Vision
│   ├── login.html          # 5. Login (Student / Admin)
│   ├── signup.html         # 6. Sign Up
│   ├── connect.html        # 7. Wallet Connect (Pera / MyAlgo)
│   ├── dashboard.html      # 8. Student Dashboard
│   ├── meal.html           # 9. Meal Consume / Token Deduction
│   ├── admin.html           # 10. Admin (Mess Authority) Dashboard
│   ├── css/
│   │   └── smartmess.css    # Shared Algorand theme, glassmorphism
│   └── js/
├── backend/            # Python API & blockchain logic
├── contracts/          # Algorand smart contract config & scripts
└── scripts/            # Deploy & test scripts
```

## Pages (10)

| # | Page | File | Description |
|---|------|------|-------------|
| 1 | Landing | `index.html` | Hero, CTAs (Connect Wallet, Get Started), feature cards |
| 2 | How It Works | `how-it-works.html` | 4-step flow: Wallet → Tokens → Deduction → On-chain record |
| 3 | Features & Benefits | `features.html` | Features (tokenized meals, smart contracts, etc.) + benefits |
| 4 | About | `about.html` | Problem, solution, why Algorand, vision |
| 5 | Login | `login.html` | Email/password, Student vs Admin toggle, wallet link |
| 6 | Sign Up | `signup.html` | Name, college ID, email, password, terms |
| 7 | Wallet Connect | `connect.html` | Pera / MyAlgo options, status, dummy address & balance |
| 8 | Student Dashboard | `dashboard.html` | Token balance, meals remaining, recent transactions |
| 9 | Meal Consume | `meal.html` | Consume 1 meal, token deduction, tx hash (demo) |
| 10 | Admin Dashboard | `admin.html` | Issue tokens, student list, daily meal stats |

## Tech stack (frontend)

- HTML5, CSS3, Bootstrap 5
- Shared dark Web3 theme (Algorand teal/cyan, glassmorphism)
- Responsive layout, shared navbar & footer across all pages

## License

See LICENSE file.
