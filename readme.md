# array-buffer 相互转换的性能对比

> 测试机器：Apple M2 16GB

## 内容

```
array to buffer 结果


cycle:  jsonToBuffer x 98,358 ops/sec ±1.55% (96 runs sampled)
cycle:  ampToBuffer x 163,682 ops/sec ±12.60% (95 runs sampled)
cycle:  packToBuffer x 341,155 ops/sec ±0.25% (100 runs sampled)
Fastest is packToBuffer

buffer to array 结果

cycle:  buffertoJson x 43,383 ops/sec ±0.52% (97 runs sampled)
cycle:  ampToJson x 50,593 ops/sec ±0.75% (90 runs sampled)
cycle:  unpackToJson x 51,816 ops/sec ±0.58% (91 runs sampled)
Fastest is unpackToJson


```
