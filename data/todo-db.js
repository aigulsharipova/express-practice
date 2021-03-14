module.exports = {
  getAll
};

const todos = [
  {text: 'Feed Dogs', done: true},
  {text: 'Learn Express', done: false},
  {text: 'Buy Milk', done: false}
];
	

function getAll() {
	return todos;
}