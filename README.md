# Tunis Portfolio

This is my React-based portfolio project.

## Steps I Followed to Deploy the Project

1. **Created the Project**:
   - I created a React project using Visual Studio.
   - Installed necessary dependencies like React and React Router.

2. **Initialized Git and GitHub**:
   - Created a new Git repository on GitHub.
   - Used **GitHub Desktop** to clone the repository and upload the project files.

3. **Installed `gh-pages` for Deployment**:
   - To deploy my project to GitHub Pages, I installed the `gh-pages` package:
     ```bash
     npm install gh-pages --save-dev
     ```

4. **Configured `package.json`**:
   - Added the `"homepage"` field in `package.json` to specify the GitHub Pages URL:
     ```json
     "homepage": "https://SujSelvam.github.io/tunis_portfolio",
     ```
   - Added **deployment scripts** to `package.json`:
     ```json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
     ```

5. **Built the React Project**:
   - Ran the build command to prepare the project for deployment:
     ```bash
     npm run build
     ```

6. **Deployed the Project**:
   - Used the `gh-pages` package to deploy the app to GitHub Pages:
     ```bash
     npm run deploy
     ```

7. **Live Link**:
   - After deployment, my app is live and accessible at:
     [https://SujSelvam.github.io/tunis_portfolio](https://SujSelvam.github.io/tunis_portfolio)
