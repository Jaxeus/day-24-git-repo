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

GIT LOG - git log
--> Shows us a log of all of our commits

GIT MERGE - 
--> Merges two branches back into one 
  --> Checkout into the main YOU WANT TO MERGE INTO (git checkout main etc.)
  --> git merge <branch-name-> (name of the one you want merging with the main)
  --> git push
* Merge often, because if you're merging monthly and making a lot of changes, you'll run into many conflicts

GIT REVERT - git revert
--> It doesn't remove history, it just undoes the changes of the most recent commit and makes a new commit with the previous updates - therefore it's safe
  --> git log (or git log --oneline)
  --> git revert <commitID>
  --> (you will get a revert message in VS code) git log (to see changes)

*If you accidentally included a password in a commit, you would probably need to rewrite history (git reset or something), but if you make a mistake you could be worse off

***If you get stuck randomly, try hitting 'q', or close browser if that doesn't work

https://education.github.com/git-cheat-sheet-education.pdf

*/
