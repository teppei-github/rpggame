// クラスで実装
class Character {
  constructor(name, hp, mp, level) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.level = level;
  }

  // メソッドでレベルアップのロジックを追加
  levelUp() {
    this.level++;
    this.hp += 10;
    this.mp += 5;
  }

  characterText() {
    return `
  名前は${this.name}です。
  HPは${this.hp}です。
  Mpは${this.mp}です。
  現在のレベルは${this.level}です。
  `;
  }
}

// クラスからインスタンスを作成
const hero = new Character("勇者", 100, 50, 1);
const warrior = new Character("戦士", 120, 30, 1);
const villager = new Character("村人", 50, 10, 1);

window.onload = () => {
  $("#hero span").html(hero.characterText());
  $("#warrior span").html(warrior.characterText());
};

const herolevelup = () => {
  hero.levelUp();
  $("#hero span").html(hero.characterText());
};

const warriorlevelup = () => {
  warrior.levelUp();
  $("#warrior span").html(warrior.characterText());
};
