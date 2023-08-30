/*
GIT CLONE - git clone <repo-url>
--> Creates a clone or copy of a repo
--> Links our local storage to the repository on GitHub etc.

CD - change directory
cd.. --> change directory up/back one
cd <folder-name> --> go to folder-name

GIT ADD - git add <file-name>
--> Adds to staging area

GIT COMMIT - Git commit -m "message"
--> Commits to local storage
-m (- is called a flag)

GIT PUSH - git push
--> Pushes your updates to github repository

GIT PULL - git pull
--> Pulls most recent version from github

GIT STATUS - git status
--> Shows what has been added etc

GIT INIT - git init (initialise)
--> Creates a new repo

*If you have one master file and a linear approach, you can run into problems like one person's bugs contaminating every future copy
--> Collaborating by branching & merging is the solution:
  --> Create a second branch (which is a new copy of the repo)
  --> Developers contribute to that copy
  --> Test the code in the branch before merging back to master branch to avoid contamination
  --> Merging branches involved pulling changes from master, resolving conflicts, and then pushing back to master
  --> Master branch is always trusted, so anyone branching off from it knows they're not getting contaminated code

  *Master is now called MAIN in github, to get away from connotations
 
 GIT BRANCH - git branch <newBranchName>
--> Creates a new branch
git branch --> see your branches and the green * one will be the one you're in now

GIT CHECKOUT - git checkout <branchName>
--> Switch to that branch (puts you in that branch (will go green and *))

GIT PUSH UPSTREAM - git push -u origin <branchName>