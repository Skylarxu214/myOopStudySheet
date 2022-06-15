       
// const myList = document.getElementById("myList")
// const listBinding = new ListBinding(myList) 

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
        while (this.listElement.firstChild){
          
            // this.textList.push(`${this.listElement.firstElementChild.textContent}`)
            this.listElement.removeChild(this.listElement.firstChild)

           
            
        }
        // let origin  = this.listElement.firstElementChild.textContent
        // this.listElement.removeChild(this.listElement.firstElementChild)
        /* Fill <ul>/<ol> tag with<li> */
        for (const text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text))
        }
        // this.listElement.appendChild(ListBinding.createListItem(this.textList[0]? this.textList:`Removed the child ${origin}`))

    }

    add (text) {
        this.textList.push(text)
        this.update()
    }

    remove (index){
        this.textList.splice(index, 1);
        this.update()
        // this.listElement.splice(index,1)
        // this.update()
    }
}