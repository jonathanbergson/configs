cdback() {
  cd ~/Desktop/a2/backend/cmd/core && pwd;
}
rback() {
  clear && cdback;
  git checkout prod;
  git pull origin prod;
  go run main.go;
}

cdapp() {
  cd ~/Desktop/cxm-app && pwd;
}
rapp() {
  clear && cdapp && yarn dev;
}
tapp() {
  clear && cdapp && yarn test:watch;
}
capp() {
  code ~/Desktop/cxm-app;
}

cdds() {
  cd ~/Desktop/design-system && pwd;
}
rds() {
  clear && cdds && npm run storybook;
}
cds() {
  code ~/Desktop/design-system;
}
