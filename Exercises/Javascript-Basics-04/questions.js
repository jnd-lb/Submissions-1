const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text.replace("e", " ");
}
const concatString = (text1, text2) => {
    return text1 + text2;
}
const showChar5 = (text) => {
    return text.charAt(4);
}
const showChar9 = (text) => {
    return text.substring(0, 9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return (typeof text == "string");
}

const getExtension = (text) => {
    return text.split('.').pop();

}
const countSpaces = (text) => {
    return text.match(/([\s]+)/g).length;


}
const InverseString = (text) => {
    let str = "";
    for (let index = text.length - 1; index > -1; index--) {
        str += text.charAt(index);
    }

    return str;
}

const power = (x, y) => {
    return Math.pow(x, y);
}

const absoluteValue = (num) => {
    return Math.abs(num);
}

const absoluteValueArray = (array) => {
    for (let index = 0; index < array.length; index++) {
        array[index] = Math.abs(array[index]);
    }
    return array;
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * radius * radius);
}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab, ac);
}
const BMI = (weight, height) => {
    return Math.round((weight / (height * height) * 100)) / 100;
}

const createLanguagesArray = () => {
    return ["Html", "CSS", "Java", "PHP"];
}

const createNumbersArray = () => {

}

const replaceElement = (languages) => {

}

const addElement = (languages) => {

}

const addNumberElement = (numbers) => {

}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {

}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {

}

const invertArr = (social_arr) => {

}