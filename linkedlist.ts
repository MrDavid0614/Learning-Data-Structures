// Singly Linked List

class LinkedNode {
  public next: LinkedNode;
  constructor(public data: any){
    this.next = null;
  }
}

class LinkedList{
  public head: LinkedNode;

  constructor(){
    this.head = null;
  }

  // Add the element to the beginning of the list
  unshift(data: any){
    const newLinkedNode = new LinkedNode(data);
    newLinkedNode.next = this.head;
    this.head = newLinkedNode;
  }

  // Add the element to the final of the list
  push(data: any){
    const newLinkedNode = new LinkedNode(data);

    if (this.head == null){
      this.head = newLinkedNode;
      return newLinkedNode;
    }

    let currentLinkedNode = this.head;

     while(currentLinkedNode.next != null){
       currentLinkedNode = currentLinkedNode.next;
     }

     currentLinkedNode.next = newLinkedNode;
  }

  insertAtIndex(index: number, data: any){
    const newLinkedNode = new LinkedNode(data);

    if (index <= 0){
      this.unshift(data);
      return;
    }

    let currentLinkedNode = this.head;
    let counter = 0;

    while(index != (counter + 1) && currentLinkedNode.next != null){
      currentLinkedNode = currentLinkedNode.next;
      counter++;
    }

    if(currentLinkedNode.next == null){
      console.error("Indice no valido");
      return;
    }
    newLinkedNode.next = currentLinkedNode.next;
    currentLinkedNode.next = newLinkedNode;
  }


  removeAtIndex(index: number) {
    // Remove an element at a specific index
    if(index < 0) {
      console.error('Índice inválido.');
      return;
    }

    let previousLinkedNode = null;
    let currentLinkedNode = this.head;
    let i = 0;
    while(currentLinkedNode !== null && i !== index){
      previousLinkedNode = currentLinkedNode;
      currentLinkedNode = currentLinkedNode.next;
      i++;
    }

    if(currentLinkedNode === null) return 'No se pudo encontrar el índice.';
    
    previousLinkedNode.next = currentLinkedNode.next;
    return currentLinkedNode.data;
  }

  find(value: any){
    let currentLinkedNode = this.head;
    while(currentLinkedNode !== null && currentLinkedNode.data !== value) {
      currentLinkedNode = currentLinkedNode.next;
    }

    if(currentLinkedNode === null) return -1;

    return currentLinkedNode.data;
  }

  replace(data: any, newData: any) {
    //  Replace the information of an element
    let currentLinkedNode = this.head;
    while(currentLinkedNode !== null && currentLinkedNode.data !== data){
      currentLinkedNode = currentLinkedNode.next;
    }

    if(currentLinkedNode === null) {
      console.error('No puedes reemplazar un dato que no existe');
      return;
    }

    currentLinkedNode.data = newData;

    return currentLinkedNode.data;
  }

  replaceAtIndex(index: number, data: any) {
    if(index < 0) {
      console.error('Índice inválido.');
      return;
    }

    let currentLinkedNode = this.head;
    let i = 0;

    while(i !== index && currentLinkedNode !== null) {
      currentLinkedNode = currentLinkedNode.next;
      i++;
    }

    if(currentLinkedNode === null) {
      console.error('No se encontró el índice.');
      return;
    }

    currentLinkedNode.data = data;
    return currentLinkedNode.data;
  }

  // OPCIONAL!!
  reverse(head: LinkedNode) {
    //   reverse the order of elements in the list
    let previousNode: LinkedNode | null = head;
    let currentNode = head.next;
    previousNode.next = null;

    while(currentNode !== null) {
        const nextNode = currentNode.next;

        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    
    this.head = previousNode;
    return previousNode;
  }

  findLoop(){
    let tortoise: LinkedNode | null | undefined = this.head;
    let hare: LinkedNode | null | undefined = this.head;

    do {
      if(hare === null) {
        return false;
      }
      
      if(!hare?.next){
        return false;
      }

      tortoise = tortoise?.next;
      hare = hare?.next?.next;
    }
    while(tortoise !== hare)

    return true;
  }

  imprimir(head: LinkedNode){
    let str = "";
    let currentLinkedNode = head;

    while(currentLinkedNode.next != null){
      str += `${currentLinkedNode.data} => `;
      currentLinkedNode = currentLinkedNode.next; 
    }
    
    str += `${currentLinkedNode.data} => null`;

    console.log(str);
  }

}

const linkedList = new LinkedList();
linkedList.unshift("La mamá")
linkedList.unshift("La mamá de")
linkedList.unshift("Adios")
linkedList.unshift("odias")
linkedList.unshift("Hola");
console.log(`Is there a loop in the list? ${ linkedList.findLoop() }`);
linkedList.imprimir(linkedList.head);