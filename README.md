# Tunis Portfolio

This is my React-based portfolio project.

## Steps I Followed to Upload My Project to GitHub

1. **Created the Project**:
   - I created a new React project using Visual Studio and installed all necessary dependencies (like React and React Router) to get started.

2. **Initialized Git**:
   - I ran `git init` to initialize a Git repository in my project folder.

3. **Added Files to Git**:
   - I added all project files to Git using `git add .` to stage them for committing.

4. **Committed the Changes**:
   - I committed the changes with a message saying `"Initial commit"` using `git commit -m "Initial commit"`.

5. **Created a GitHub Repository**:
   - I created a new repository on GitHub for my project.

6. **Connected Local Project to GitHub**:
   - I connected my local Git repository to GitHub by running:
     ```bash
     git remote add origin https://github.com/SujSelvam/tunis_portfolio.git
     ```

7. **Pushed Code to GitHub**:
   - Finally, I pushed my code to the `main` branch on GitHub using:
     ```bash
     git push -u origin main
     ```

---

## How I Managed My Code with Branches (`main` and `dev`)

1. **Created a `dev` Branch**:
   - After pushing my code to `main`, I created a `dev` branch to keep my development separate from the stable `main` branch:
     ```bash
     git checkout -b dev
     ```

2. **Switching Between Branches**:
   - I can switch between branches with:
     - Switch to `dev`:
       ```bash
       git checkout dev
       ```
     - Switch back to `main`:
       ```bash
       git checkout main
       ```

3. **Pushed Changes to `main` and `dev`**:
   - Once I made commits, I pushed them to either `main` or `dev`:
     - To push to `main`:
       ```bash
       git push origin main
       ```
     - To push to `dev`:
       ```bash
       git push origin dev
       ```

---

## How I Worked with Feature Branches

1. **Created a Feature Branch**:
   - When I worked on a new feature, I created a feature branch:
     ```bash
     git checkout -b feature/my-feature
     ```

2. **Committed Feature Changes**:
   - After working on the feature, I committed my changes with a message:
     ```bash
     git commit -m "Add feature my-feature"
     ```

3. **Merged Feature Branch into `dev`**:
   - Once my feature was complete, I merged it back into the `dev` branch:
     ```bash
     git checkout dev
     git merge feature/my-feature
     ```

4. **Pushed the `dev` Branch**:
   - I pushed the updated `dev` branch to GitHub:
     ```bash
     git push origin dev
     ```

---

## Steps I Followed to Deploy the Project


1. **Installed `gh-pages` for Deployment**:
   - To deploy my React project to GitHub Pages, I installed the `gh-pages` package:
     ```bash
     npm install gh-pages --save-dev
     ```

2. **Configured `package.json`**:
   - I added the `"homepage"` field in `package.json` to point to the GitHub Pages URL:
     ```json
     "homepage": "https://SujSelvam.github.io/tunis_portfolio",
     ```
   - I added deployment scripts in the `"scripts"` section of `package.json`:
     ```json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
     ```

3. **Built the React Project**:
   - I ran `npm run build` to create a production-ready version of my app.

4. **Deployed the Project**:
   - I used the `gh-pages` package to deploy my app to GitHub Pages:
     ```bash
     npm run deploy
     ```

5. **Live Link**:
   - My app is now live on GitHub Pages at:
     [https://SujSelvam.github.io/tunis_portfolio](https://SujSelvam.github.io/tunis_portfolio)

---

