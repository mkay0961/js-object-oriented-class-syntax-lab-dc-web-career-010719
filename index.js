class BoardMember{
    constructor(name, homeState, training){
      this.name = name
      this.homeState = homeState
      this.training = training
    }
    veto(){
      return "No, I must disagree"
    }
    approve(){
      return "You can do that!"
    }
    doCharity(){
      return "I like to help people."
    }
    releasePressStatement(){
      return "You will see great things from Scuber."
    }
    sayHi(){
      // console.log("yo");
      return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
    }


}

class Ceo extends BoardMember{

  // sayHi(){
  //   return "wow"
  // }

  hireEmployee(){
    return "Welcome aboard!"
  }
}
let fred = new BoardMember('fred', 'fred@gmail.com', 'fred@gmail.com')
let fred1 = new BoardMember('fred', 'fred@gmail.com', 'fred@gmail.com')
let ceo = new Ceo('fred', 'fred@gmail.com', 'fred@gmail.com')

// debugger
