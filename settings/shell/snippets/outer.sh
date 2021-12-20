# OUTER COMMANDS

h() history;
hg() {
  history | grep $1;
}
lsg() {
  ls | tr '[:upper:][:lower:]' '[:lower:][:lower:]' | grep $1;
}
o() {
  if [ $1 != "" ] ; then
    open $1;
  else
    open .;
  fi
};
