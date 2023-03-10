class Helpers {
    static printArray(arr){
        arr.forEach(element => {
            console.log(element);
        });
    }

    static printString(string){
        console.log(string);
    }

    static countAllVoweIsInString(str){
        let strArr = str.split('');
        let vowels = ['a', 'e', 'i','o','u'];

        return strArr.filter(char => vowels.includes(char.toLowerCase())).length;
    }
}


Helpers.printArray([1,2,3,4,5,6,7]);
Helpers.printArray(['a', 'e', 'i','o','u']);

console.log(Helpers.countAllVoweIsInString('abcedgipasdu'));
