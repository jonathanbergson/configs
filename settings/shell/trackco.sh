cdback() {
  cd ~/www/track/cxm-api/backend/cmd/core && pwd;
}
rback() {
  clear && cdback;
  git checkout main;
  git pull origin main;
  go run main.go;
}

cdapp() {
  cd ~/www/track/cxm-app && pwd;
}
rapp() {
  clear && cdapp && npm run dev;
}

recreate-stage() {
  cd ~/www/track/cxm-app && pwd;
  git checkeout main;
  git pull origin main;
  git branch -D stage;
  git checkout -b stage;
  git push -u origin stage -f;
}
