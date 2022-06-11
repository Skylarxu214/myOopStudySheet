class ListBinding {
    constructor(element){
        this.listElement = element;
        this.textList = []
    }
    static createListItem(text) {
        const li = document.createElement("li")

        li.textContent = text

        return li
    }
    update () {
        /* Remove All Existing <li> Elements/tage*/
        // while (this.listElement.firstChild){
        //     this.listElement.removeChild(this.listElement.firstChild)
        // }
        let text = this.listElement.firstElementChild.textContent
        this.listElement.removeChild(this.listElement.firstElementChild)
        /* Fill <ul>/<ol> tag with<li> */
        // for (const text of this.textList) {
        //     this.listElement.appendChild(ListBinding.createListItem(text))
        // }
        this.listElement.appendChild(ListBinding.createListItem(`Removed the child ${text}`))

    }

    add (text) {
        this.textList.push(text)
        this.update()
    }

    remove (index){
        this.textList.splice(index, 1);
        this.update()
    }
}