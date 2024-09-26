const AGE_FOR_DRIVE = 18;

export class Person {
    private age: number = 0;

    getAge() {
        return this.age;
    }

    setAge(age: number) {
        this.age = age;
    }

    canDrive() {
        return this.age >= AGE_FOR_DRIVE;
    }
}
