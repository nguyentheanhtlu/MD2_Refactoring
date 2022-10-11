export class FizzBuzz {
    message: string;

//     constructor(n: number) {
//         if (n % 3 == 0 && n % 5 == 0) {
//             this.message = 'FizzBuzz';
//         } else if (n % 5 == 0) {
//             this.message = 'Fizz';
//         } else if(n % 3 == 0) {
//             this.message = 'Buzz';
//         } else {
//             this.message = n + ''
//         }
//     }
// }
    constructor(n: number) {
        let isFizz = n % 5 == 0;
        let isBuzz = n % 3 == 0;

        if (isBuzz && isBuzz) {
            this.message = 'FizzBuzz';
        } else if (isFizz) {
            this.message = 'Fizz';
        } else if(isBuzz) {
            this.message = 'Buzz';
        } else {
            this.message = n + ''
        }
    }
}