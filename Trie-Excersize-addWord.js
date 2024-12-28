class Trie{
    constructor(){
        this.characters = {};
        this.isWord = false;
    }

    addWord(word , index = 0){
       if(index === word.length){
        this.isWord = true;
        return;
       }
       const char = word[index];
       if(!this.characters[char]){
        this.characters[char] = new Trie();
       }

       this.characters[char].addWord(word , index + 1)
    }

    findWord(word , index = 0){
        const char = word[index];
        console.log(this)
        if(index === word.length){
            return this.isWord ? this : undefined;
           }
        if(this.characters[char])
        {
           return this.characters[char].findWord(word , index + 1)
        }
        else return undefined
    }

    getWords(words = [], currentWord = ""){
        if(!this.characters.length) return "Empty Tree";
        if(currentWord){
            const key = this.findWord(currentWord , 0);
            console.log(key)
            // if(this.characters.hasOwnProperty(key)){
            //     words.push(key)
            // }
        }
    }
}

let firstTrie = new Trie();
firstTrie.addWord("fun");

console.log(firstTrie.characters); // {f: Trie}
console.log(!!firstTrie.characters["f"]); // true
console.log(!!firstTrie.characters["f"].characters["u"]); // true
console.log(firstTrie.characters["f"].characters["u"].characters["n"].isWord); // true
console.log(!!firstTrie.characters["f"].characters["u"].characters["n"]); // truep

let secondTrie = new Trie();
secondTrie.addWord("ha");
secondTrie.addWord("hat");
secondTrie.addWord("has");
secondTrie.addWord("have");
secondTrie.addWord("hate");

console.log(secondTrie.characters["h"].characters["a"].isWord); // true, "ha" is a word
console.log(secondTrie.characters["h"].characters["a"].characters["t"].isWord); // true, "hat" is a word
console.log(secondTrie.characters["h"].characters["a"].characters["v"].isWord); // false, "hav" is not a word
console.log(secondTrie.characters["h"].characters["a"].characters["v"].characters["e"].isWord); // true, "have" is a word

var t = new Trie();
t.addWord('fun')
t.addWord('fast')
t.addWord('fat')
t.addWord('fate')
t.addWord('father')
 
t.findWord('taco') // undefined
console.log(t.findWord('fat').characters) // {t: Trie}
t.findWord('father').characters // {}
t.findWord('father').isWord // true

t.getWords()