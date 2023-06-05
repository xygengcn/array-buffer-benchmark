# array-buffer 相互转换的性能对比

## 内容

```
array to buffer 结果


cycle:  jsonToBuffer x 101,884 ops/sec ±0.65% (93 runs sampled)
cycle:  ampToBuffer x 158,188 ops/sec ±12.40% (93 runs sampled)
cycle:  packToBuffer x 331,227 ops/sec ±0.72% (90 runs sampled)
Fastest is packToBuffer

buffer to array 结果

cycle:  buffertoJson x 44,054 ops/sec ±0.41% (91 runs sampled)
cycle:  ampToJson x 50,576 ops/sec ±0.85% (85 runs sampled)
cycle:  unpackToJson x 333,039 ops/sec ±0.84% (92 runs sampled)
Fastest is unpackToJson


```
