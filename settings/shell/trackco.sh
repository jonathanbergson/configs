cd:a2() {
  cd ~/www/github/trackco/a2 && pwd;
}
code:a2() {
  code ~/www/github/trackco/a2;
}

cd:back() {
  cd ~/www/github/trackco/a2/backend/cmd/core && pwd;
}
run:back() {
  clear && cd:back && go run main.go;
}
code:back() {
  code ~/www/github/trackco/a2/frontend/track;
}

cd:front() {
  cd ~/www/github/trackco/a2/frontend/track && pwd;
}
run:front() {
  clear && cd:front && npm run dev;
}
code:front() {
  code ~/www/github/trackco/a2/frontend/track;
}

cd:ds() {
  cd ~/www/github/trackco/design-system && pwd;
}
run:ds() {
  clear && cd:ds && npm run storybook;
}
code:ds() {
  code ~/www/github/trackco/design-system;
}

# cd:credits() cd ~/www/github/trackco/api-credits && pwd;
# code:credits() code ~/www/github/trackco/api-credits;
