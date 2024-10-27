// オブジェクトで実装
const hero = {
  name: "勇者",
  hp: 100,
  mp: 50,
  level: 1,
};

const warrior = {
  name: "戦士",
  hp: 120,
  mp: 30,
  level: 1,
};

const villager = {
  name: "村人",
  hp: 50,
  mp: 10,
  level: 1,
};

window.onload = () => {
  const herotext = `
  名前は${hero.name}です。
  HPは${hero.hp}です。
  Mpは${hero.mp}です。
  現在のレベルは${hero.level}です。
  `;
  $("#hero span").html(herotext);

  const warriortext = `
  名前は${warrior.name}です。
  HPは${warrior.hp}です。
  Mpは${warrior.mp}です。
  現在のレベルは${warrior.level}です。
`;
  $("#warrior span").html(warriortext);
};

const herolevelup = () => {
  warrior.level += 1;

  const herotext = `
  名前は${hero.name}です。
  HPは${hero.hp}です。
  Mpは${hero.mp}です。
  現在のレベルは${hero.level}です。
`;
  $("#hero span").html(herotext);
};

const warriorlevelup = () => {
  warrior.level += 1;
  const warriortext = `
  名前は${warrior.name}です。
  HPは${warrior.hp}です。
  Mpは${warrior.mp}です。
  現在のレベルは${warrior.level}です。
`;
  $("#warrior span").html(warriortext);
};
