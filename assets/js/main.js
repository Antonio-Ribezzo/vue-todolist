/*
CONSEGNA:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/

const { createApp } = Vue

  createApp({
    data() {
      return {

        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            }
        ],

        newItem: ""
        
      }
    },

    methods: {
        deleteItem(i){
            this.todos.splice(i, 1)
        },

        clearList(){
            this.todos = []
        },

        addItem(){
            if(this.newItem != ""){
                this.todos.unshift({
                    text: this.newItem,
                    done: false
                })
            } else if (this.newItem == ""){
                alert('Scrivi una nuova ToDo da inserire nella lista')
            }
        },

        changeDoneValue(i){
            if(this.todos[i].done == true){
                this.todos[i].done = false
            } else if(this.todos[i].done == false){
                this.todos[i].done = true
            }
        }
    }

  }).mount('#app')