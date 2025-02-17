// Самая длинная подстрока без повторяющихся символов. 
// Дана строка s, нужно найти длину самой длинной подстроки, не содержащей повторяющихся символов. 

// Пример 1: 
// Input: s = "abcabcbb"  
// Output: 3  
// Explanation: The answer is "abc", with the length of 3. 

// Пример 2: 
// Input: s = "bbbbb"  
// Output: 1  
// Explanation: The answer is "b", with the length of 1. 

// Пример 3: 
// Input: s = "pwwkew"  
// Output: 3  
// Explanation: The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring. 

// Ограничения: 
// 0 <= длина строки s <= 5 * 10^4 
// Строка s состоит из английских букв, цифр, символов и пробелов. 

// Алгоритм:
// Используем два указателя: один указывает на начало подстроки (левая граница окна), другой — на текущий символ в строке (правая граница окна).
// Пройдем по строке, двигая правый указатель и добавляя символы в текущую подстроку.
// Если символ уже присутствует в подстроке, перемещаем левый указатель вправо до того момента, пока не удалим повторяющийся символ.
// Подсчитываем максимальную длину подстроки без повторений.

// Пошаговый процесс:
// Инициализируем пустой словарь или хеш-таблицу для хранения символов и их позиций.
// Для каждого символа на правом указателе проверяем, был ли он уже встречен.
// Если был, сдвигаем левый указатель, пока не уберем все повторяющиеся символы.
// Каждый раз обновляем максимальную длину текущей подстроки.

function lengthOfLongestSubstring(s) {

     // Проверка на ограничение длины строки
     if (s.length < 0 || s.length > 5 * 10**4) {
        return 0; // или можно вернуть какое-то другое значение для неверных входных данных
    }
    
    let charIndexMap = new Map(); // Для хранения позиций символов
    let left = 0;  // Левая граница окна
    let maxLength = 0;  // Длина самой длинной подстроки

    for (let right = 0; right < s.length; right++) {
        // Если символ уже встречался и его индекс больше или равен левому указателю
        if (charIndexMap.has(s[right]) && charIndexMap.get(s[right]) >= left) {
            // Сдвигаем левый указатель вправо, чтобы избежать дублирования
            left = charIndexMap.get(s[right]) + 1;
        }
        // Обновляем позицию текущего символа
        charIndexMap.set(s[right], right);
        // Обновляем максимальную длину подстроки
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Примеры:
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3

