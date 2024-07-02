Here is the updated `README.md` file for FlyWorld with the necessary changes:

```markdown
# Welcome to FlyWorld

## Live Server Link:
- [@API_LiNK:https://web-tourism-server.vercel.app/](https://web-tourism-server.vercel.app/)
- [Live_URL:https://web-tourism-client.netlify.app/](https://web-tourism-client.netlify.app/)

- This is a practice task provided by Programming Hero. 

## In this Project I have practiced on:
- Making a full stack website with MongoDB and React.
- In FlyWorld, I have focused on making the website functionally correct.
- My site is based on showcasing tourist spots in South East Asia.
- Here, I wanted to showcase tourist spots of six countries.
- Bangladesh, Thailand, Indonesia, Malaysia, Vietnam, and Cambodia are included in this website.

## I have used some of the common React component libraries. Here is a list of them:
- [Tailwind](https://tailwindcss.com/)
- [Daisy_UI](https://daisyui.com/)
- [Mamba_UI](https://mambaui.com/)
- [Material_UI](https://material-ui.com/)
- [Firebase](https://firebase.google.com/)
- [React_Awesome_Reveal](https://react-awesome-reveal.morellodev.vercel.app/)
- [React_Form_Hook](https://react-hook-form.com/)
- [React_Hot_Toast](https://react-hot-toast.com/)
- [React_Icons](https://react-icons.github.io/react-icons/)
- [React_Router_Dom](https://reactrouter.com/web/guides/quick-start)
- [React_Spinners](https://www.davidhu.io/react-spinners/)
- [React_Tooltip](https://wwayne.github.io/react-tooltip/)
- [React_Countries](https://github.com/annexare/Countries)

## Installation Guide

### Prerequisites
Ensure you have the following installed on your local development machine:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

### Clone the Repository
```bash
mkdir fly-world
git clone https://github.com/Sadek-1801/Fly-world-client.git
git clone https://github.com/Sadek-1801/fly-world-server.git

```

### Server-Side Installation

1. Navigate to the server directory:
```bash
cd fly-world-server
```

2. Install server dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory and add your environment variables:
```plaintext
DB_PASS=your-mongodb-credentials
DB_USER=your-mongodb-credentials
```

4. Start the server:
```bash
npm run start
```

### Client-Side Installation

1. Navigate to the client directory:
```bash
cd fly-world-client
```

2. Install client dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the client directory and add your environment variables:
```plaintext
VITE_APIKEY=your-firebase_apikey-
VITE_AUTHDOMAIN=your-firebase_authdomain-
VITE_PROJECTID=your-firebase_projectid-
VITE_STORAGEBUCKET=your-firebase_storagebucket-
VITE_MESSAGINGSENDERID=your-firebase_messagingsenderid-
VITE_APPID=your-firebase_appid-
```

4. Start the client:
```bash
npm run start
```

## If you have any queries or suggestions, feel free to reach out to me at:
- hmashrafujjaman@gmail.com

## Thank You
```

This guide provides a comprehensive walkthrough for setting up both the server-side and client-side of your application, including environment variable configuration and dependency installation.