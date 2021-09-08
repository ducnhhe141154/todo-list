export default {
checkOutput(check) {
    for (const word of this.hotWords) {
      if (check.includes(word)) {
        var hideWord = '';
        for (let i = 0; i < check.slice(1, check.length).length; i++) {
          hideWord += '*';
        }
        return check[0] + hideWord;
      }
    } return check;
  },
addTodo() {
    if (this.todoList.length != 0) {
      this.todoList.push({ id: this.todoList[this.todoList.length - 1].id + 1, title: this.newTitle, done: false })
    } else {
      this.todoList.push({ id: 1, title: this.newTitle, done: false })
    }
  },
}