export class Model {
    user;
    items; 


    constructor (){
        this.user = "Uras";
        this.items  = [
                        new ToDoItem("Breakfast", false),
                        new ToDoItem("Take a Shower", false),
                        new ToDoItem("Go To Work", true),
                        new ToDoItem("Drink Coffee", false),
                        new ToDoItem("Dinner", true),
                        new ToDoItem("Brush Teeth", true),
                        new ToDoItem("Go To Bed", true)
                     ];
          
    }

}

export class ToDoItem  {
    description;
    action;

    constructor ( description: string, action: boolean ){
        this.description = description;
        this.action = action; 
    }
}

