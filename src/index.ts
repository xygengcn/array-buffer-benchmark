import AmpMessage from 'amp-message';
import { pack, unpack } from 'msgpackr';
import Benchmark from 'benchmark';
const arr = [
    '西班牙曾经提到过，自己的鞋子，自己知道紧在哪里。这句话语虽然很短，但令我浮想联翩。 每个人都不得不面对这些问题。 在面对这种问题时， 卡耐基曾经提到过，一个不注意小事情的人，永远不会成就大事业。带着这句话，我们还要更加慎重的审视这个问题： 既然如何， 对我个人而言，科学和人文谁更有意义不仅仅是一个重大的事件，还可能会改变我的人生。 带着这些问题，我们来审视一下科学和人文谁更有意义。 既然如此， 科学和人文谁更有意义，发生了会如何，不发生又会如何。 生活中，若科学和人文谁更有意义出现了，我们就不得不考虑它出现了的事实。 我们都知道，只要有意义，那么就必须慎重考虑。 可是，即使是这样，科学和人文谁更有意义的出现仍然代表了一定的意义。 科学和人文谁更有意义因何而发生？ 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 就我个人来说，科学和人文谁更有意义对我的意义，不能不说非常重大。 可是，即使是这样，科学和人文谁更有意义的出现仍然代表了一定的意义。 所谓科学和人文谁更有意义，关键是科学和人文谁更有意义需要如何写。',
    '西班牙曾经提到过，自己的鞋子，自己知道紧在哪里。这句话语虽然很短，但令我浮想联翩。 每个人都不得不面对这些问题。 在面对这种问题时， 卡耐基曾经提到过，一个不注意小事情的人，永远不会成就大事业。带着这句话，我们还要更加慎重的审视这个问题： 既然如何， 对我个人而言，科学和人文谁更有意义不仅仅是一个重大的事件，还可能会改变我的人生。 带着这些问题，我们来审视一下科学和人文谁更有意义。 既然如此， 科学和人文谁更有意义，发生了会如何，不发生又会如何。 生活中，若科学和人文谁更有意义出现了，我们就不得不考虑它出现了的事实。 我们都知道，只要有意义，那么就必须慎重考虑。 可是，即使是这样，科学和人文谁更有意义的出现仍然代表了一定的意义。 科学和人文谁更有意义因何而发生？ 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 就我个人来说，科学和人文谁更有意义对我的意义，不能不说非常重大。 可是，即使是这样，科学和人文谁更有意义的出现仍然代表了一定的意义。 所谓科学和人文谁更有意义，关键是科学和人文谁更有意义需要如何写。',
    '西班牙曾经提到过，自己的鞋子，自己知道紧在哪里。这句话语虽然很短，但令我浮想联翩。 每个人都不得不面对这些问题。 在面对这种问题时， 卡耐基曾经提到过，一个不注意小事情的人，永远不会成就大事业。带着这句话，我们还要更加慎重的审视这个问题： 既然如何， 对我个人而言，科学和人文谁更有意义不仅仅是一个重大的事件，还可能会改变我的人生。 带着这些问题，我们来审视一下科学和人文谁更有意义。 既然如此， 科学和人文谁更有意义，发生了会如何，不发生又会如何。 生活中，若科学和人文谁更有意义出现了，我们就不得不考虑它出现了的事实。 我们都知道，只要有意义，那么就必须慎重考虑。 可是，即使是这样，科学和人文谁更有意义的出现仍然代表了一定的意义。 科学和人文谁更有意义因何而发生？ 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 就我个人来说，科学和人文谁更有意义对我的意义，不能不说非常重大。 可是，即使是这样，科学和人文谁更有意义的出现仍然代表了一定的意义。 所谓科学和人文谁更有意义，关键是科学和人文谁更有意义需要如何写。',
    '西班牙曾经提到过，自己的鞋子，自己知道紧在哪里。这句话语虽然很短，但令我浮想联翩。 每个人都不得不面对这些问题。 在面对这种问题时， 卡耐基曾经提到过，一个不注意小事情的人，永远不会成就大事业。带着这句话，我们还要更加慎重的审视这个问题： 既然如何， 对我个人而言，科学和人文谁更有意义不仅仅是一个重大的事件，还可能会改变我的人生。 带着这些问题，我们来审视一下科学和人文谁更有意义。 既然如此， 科学和人文谁更有意义，发生了会如何，不发生又会如何。 生活中，若科学和人文谁更有意义出现了，我们就不得不考虑它出现了的事实。 我们都知道，只要有意义，那么就必须慎重考虑。 可是，即使是这样，科学和人文谁更有意义的出现仍然代表了一定的意义。 科学和人文谁更有意义因何而发生？ 本人也是经过了深思熟虑，在每个日日夜夜思考这个问题。 就我个人来说，科学和人文谁更有意义对我的意义，不能不说非常重大。 可是，即使是这样，科学和人文谁更有意义的出现仍然代表了一定的意义。 所谓科学和人文谁更有意义，关键是科学和人文谁更有意义需要如何写。'
];

const buf = jsonToBuffer();

const buf2 = ampToBuffer();

const buf3 = packToBuffer();

/**
 * 原生
 * @returns
 */
function jsonToBuffer(): Buffer {
    const str = JSON.stringify(arr);
    return Buffer.from(str);
}
function buffertoJson() {
    return JSON.parse(buf.toString());
}

/**
 * AmpMessage
 * @returns
 */
function ampToBuffer(): Buffer {
    const message = new AmpMessage(arr);
    return message.toBuffer();
}
function ampToJson() {
    const message = new AmpMessage(buf2);
    return message?.args;
}

/**
 * msgpackr 性能
 * @returns
 */
function packToBuffer() {
    return pack(arr);
}
function unpackToJson() {
    return unpack(buf3);
}

const suite1 = new Benchmark.Suite('jsonToBuffer');

// add tests
suite1
    .add('jsonToBuffer', function () {
        jsonToBuffer();
    })
    .add('ampToBuffer', function () {
        ampToBuffer();
    })
    .add('packToBuffer', function () {
        packToBuffer();
    })
    // 监听每个事件完成后的输出
    .on('cycle', function (event) {
        console.log('cycle: ', String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + suite1.filter('fastest').map('name'));
    })
    // run async
    .run({ async: true });

const suite2 = new Benchmark.Suite();

// add tests
suite2
    .add('buffertoJson', function () {
        buffertoJson();
    })
    .add('ampToJson', function () {
        ampToJson();
    })
    .add('unpackToJson', function () {
        unpackToJson();
    })
    // 监听每个事件完成后的输出
    .on('cycle', function (event) {
        console.log('cycle: ', String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + suite2.filter('fastest').map('name'));
    })
    // run async
    .run({ async: true });
