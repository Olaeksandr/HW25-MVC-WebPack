export default class List {
    constructor() {
        this.el = document.createElement('div');
        console.log(this.el);
        this.el.id = "taskList";
        this.el.classList.add('task-list', 'u-full-width');
    }

    render(list){
        this.el.innerHTML = list.map(this.createTemplate).join('\n');

    }

    createTemplate(item) {
       return  `<div class="task-item u-full-width">${item.title}</div>`;
    }
}