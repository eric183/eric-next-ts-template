import * as crypto from "crypto";

const getRandomInt = (min: number, max: number): number => {
  const randomBytes = crypto.randomBytes(4);
  const randomNum = randomBytes.readInt32BE();
  // return Math.abs(randomNum) % (max + 1);
  return (Math.abs(randomNum) % (max - min + 1)) + min;
};

// 在上面的代码中，我们首先引入了 crypto 模块，然后使用 crypto.randomBytes() 方法生成了一个 4 字节的随机字节数组。接着，我们使用 randomBytes.readInt32BE() 方法将字节数组转换为一个 32 位有符号整数。最后，我们使用 Math.abs() 方法计算这个整数的绝对值，并将它与我们想要的范围的最大值取模，以得到一个在该范围内的随机数。

// 总之，如果您需要真正的随机数，可以使用

const dieRool = (min_roll: number, sides: number) => {
  return getRandomInt(min_roll, sides);
};

class Die {
  sides: number;
  value: number;

  constructor(sides: number) {
    this.sides = sides;
    this.value = 0;
  }

  roll(min_roll: number) {
    this.value = getRandomInt(min_roll, this.sides);

    return this.value;
    // this.value = Math.floor(Math.random() * this.sides) + 1;
  }
}

const d100 = new Die(100);
d100.roll(0);
console.log(d100.value); // 输出一个 1 到 100 的随机数

export { getRandomInt, dieRool };
