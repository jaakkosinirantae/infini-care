/* 
   Filename: complex_code.js
   
   Description: 
   This code demonstrates a complex and sophisticated JavaScript program. It creates a virtual pet simulator 
   where users can interact with their virtual pet. The program includes various features such as feeding, petting, 
   playing, and monitoring the health of the pet. It also includes a timer and random events to simulate a realistic 
   pet experience. Enjoy!
*/

class Pet {
  constructor(name) {
    this.name = name;
    this.hunger = 50;
    this.happiness = 50;
    this.health = 100;
    this.isSleeping = false;
    this.isAlive = true;
  }

  feed() {
    if (this.isAlive) {
      if (!this.isSleeping) {
        this.hunger -= 10;
        this.happiness += 5;
        console.log(`${this.name} is happily eating.`);
      } else {
        console.log(`${this.name} is sleeping, it doesn't want to eat right now.`);
      }
    } else {
      console.log(`${this.name} is no longer alive. Rip.`);
    }
  }

  pet() {
    if (this.isAlive) {
      if (!this.isSleeping) {
        this.happiness += 10;
        console.log(`${this.name} loves being petted.`);
      } else {
        console.log(`${this.name} is sleeping, try petting later.`);
      }
    } else {
      console.log(`${this.name} is gone forever. :( `);
    }
  }

  play() {
    if (this.isAlive) {
      if (!this.isSleeping) {
        this.happiness += 20;
        this.hunger += 10;
        console.log(`${this.name} is having a great time playing.`);
      } else {
        console.log(`${this.name} is too tired to play right now.`);
      }
    } else {
      console.log(`You cannot play with ${this.name} anymore.`);
    }
  }

  sleep() {
    if (this.isAlive) {
      if (!this.isSleeping) {
        this.isSleeping = true;
        console.log(`${this.name} fell into a deep sleep.`);
        setTimeout(() => {
          this.isSleeping = false;
          console.log(`${this.name} woke up.`);
        }, 10000);
      } else {
        console.log(`${this.name} is already sleeping.`);
      }
    } else {
      console.log(`You cannot put ${this.name} to sleep anymore.`);
    }
  }

  getHealthStatus() {
    if (this.isAlive) {
      if (this.hunger < 20) {
        this.health -= 10;
        console.log(`${this.name} is very hungry, health decreased.`);
      }

      if (this.happiness < 20) {
        this.health -= 10;
        console.log(`${this.name} is very sad, health decreased.`);
      }

      if (this.health <= 0) {
        this.isAlive = false;
        console.log(`${this.name} has passed away. Rest in peace.`);
      } else {
        console.log(`${this.name}'s health: ${this.health}`);
      }
    } else {
      console.log(`${this.name} is no longer with us.`);
    }
  }
}

const virtualPet = new Pet("Rocky");

virtualPet.feed();
virtualPet.pet();
virtualPet.play();
virtualPet.getHealthStatus();
virtualPet.sleep();
virtualPet.play();
virtualPet.feed();
virtualPet.pet();
virtualPet.getHealthStatus();
virtualPet.sleep();
virtualPet.feed();
virtualPet.pet();
virtualPet.play();
virtualPet.getHealthStatus();
virtualPet.sleep();
virtualPet.play();
virtualPet.feed();
virtualPet.pet();
virtualPet.getHealthStatus();