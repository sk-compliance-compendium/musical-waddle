echo "Great! One more git Push is it?! Lets do this Yo!"
git status
echo "Git Commit message is gonna be " $1
git add .
git commit -m "$1"
git pull
git push
echo "Its done Yo!"
