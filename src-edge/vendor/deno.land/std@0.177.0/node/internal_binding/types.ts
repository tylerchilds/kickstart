// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
//
// Adapted from Node.js. Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

import { core } from "../_core.ts";

// https://tc39.es/ecma262/#sec-object.prototype.tostring
const _toString = Object.prototype.toString;

// https://tc39.es/ecma262/#sec-bigint.prototype.valueof
const _bigIntValueOf = BigInt.prototype.valueOf;

// https://tc39.es/ecma262/#sec-boolean.prototype.valueof
const _booleanValueOf = Boolean.prototype.valueOf;

// https://tc39.es/ecma262/#sec-date.prototype.valueof
const _dateValueOf = Date.prototype.valueOf;

// https://tc39.es/ecma262/#sec-number.prototype.valueof
const _numberValueOf = Number.prototype.valueOf;

// https://tc39.es/ecma262/#sec-string.prototype.valueof
const _stringValueOf = String.prototype.valueOf;

// https://tc39.es/ecma262/#sec-symbol.prototype.valueof
const _symbolValueOf = Symbol.prototype.valueOf;

// https://tc39.es/ecma262/#sec-weakmap.prototype.has
const _weakMapHas = WeakMap.prototype.has;

// https://tc39.es/ecma262/#sec-weakset.prototype.has
const _weakSetHas = WeakSet.prototype.has;

// https://tc39.es/ecma262/#sec-get-arraybuffer.prototype.bytelength
const _getArrayBufferByteLength = Object.getOwnPropertyDescriptor(
  ArrayBuffer.prototype,
  "byteLength",
)!.get!;

// https://tc39.es/ecma262/#sec-get-sharedarraybuffer.prototype.bytelength
const _getSharedArrayBufferByteLength = globalThis.SharedArrayBuffer
  ? Object.getOwnPropertyDescriptor(
    SharedArrayBuffer.prototype,
    "byteLength",
  )!.get!
  : undefined;

// https://tc39.es/ecma262/#sec-get-%typedarray%.prototype-@@tostringtag
const _getTypedArrayToStringTag = Object.getOwnPropertyDescriptor(
  Object.getPrototypeOf(Uint8Array).prototype,
  Symbol.toStringTag,
)!.get!;

// https://tc39.es/ecma262/#sec-get-set.prototype.size
const _getSetSize = Object.getOwnPropertyDescriptor(
  Set.prototype,
  "size",
)!.get!;

// https://tc39.es/ecma262/#sec-get-map.prototype.size
const _getMapSize = Object.getOwnPropertyDescriptor(
  Map.prototype,
  "size",
)!.get!;

function isObjectLike(
  value: unknown,
): value is Record<string | number | symbol, unknown> {
  return value !== null && typeof value === "object";
}

export function isAnyArrayBuffer(
  value: unknown,
): value is ArrayBuffer | SharedArrayBuffer {
  return isArrayBuffer(value) || isSharedArrayBuffer(value);
}

export function isArgumentsObject(value: unknown): value is IArguments {
  return (
    isObjectLike(value) &&
    value[Symbol.toStringTag] === undefined &&
    _toString.call(value) === "[object Arguments]"
  );
}

export function isArrayBuffer(value: unknown): value is ArrayBuffer {
  try {
    _getArrayBufferByteLength.call(value);
    return true;
  } catch {
    return false;
  }
}

export function isAsyncFunction(
  value: unknown,
): value is (...args: unknown[]) => Promise<unknown> {
  return (
    typeof value === "function" &&
    // @ts-ignore: function is a kind of object
    value[Symbol.toStringTag] === "AsyncFunction"
  );
}

// deno-lint-ignore ban-types
export function isBooleanObject(value: unknown): value is Boolean {
  if (!isObjectLike(value)) {
    return false;
  }

  try {
    _booleanValueOf.call(value);
    return true;
  } catch {
    return false;
  }
}

export function isBoxedPrimitive(
  value: unknown,
  // deno-lint-ignore ban-types
): value is Boolean | String | Number | Symbol | BigInt {
  return (
    isBooleanObject(value) ||
    isStringObject(value) ||
    isNumberObject(value) ||
    isSymbolObject(value) ||
    isBigIntObject(value)
  );
}

export function isDataView(value: unknown): value is DataView {
  return (
    ArrayBuffer.isView(value) &&
    _getTypedArrayToStringTag.call(value) === undefined
  );
}

export function isDate(value: unknown): value is Date {
  try {
    _dateValueOf.call(value);
    return true;
  } catch {
    return false;
  }
}

export function isGeneratorFunction(
  value: unknown,
): value is GeneratorFunction {
  return (
    typeof value === "function" &&
    // @ts-ignore: function is a kind of object
    value[Symbol.toStringTag] === "GeneratorFunction"
  );
}

export function isGeneratorObject(value: unknown): value is Generator {
  return (
    isObjectLike(value) &&
    value[Symbol.toStringTag] === "Generator"
  );
}

export function isMap(value: unknown): value is Map<unknown, unknown> {
  try {
    _getMapSize.call(value);
    return true;
  } catch {
    return false;
  }
}

export function isMapIterator(
  value: unknown,
): value is IterableIterator<[unknown, unknown]> {
  return (
    isObjectLike(value) &&
    value[Symbol.toStringTag] === "Map Iterator"
  );
}

export function isModuleNamespaceObject(
  value: unknown,
): value is Record<string | number | symbol, unknown> {
  return (
    isObjectLike(value) &&
    value[Symbol.toStringTag] === "Module"
  );
}

export function isNativeError(value: unknown): value is Error {
  return (
    isObjectLike(value) &&
    value[Symbol.toStringTag] === undefined &&
    _toString.call(value) === "[object Error]"
  );
}

// deno-lint-ignore ban-types
export function isNumberObject(value: unknown): value is Number {
  if (!isObjectLike(value)) {
    return false;
  }

  try {
    _numberValueOf.call(value);
    return true;
  } catch {
    return false;
  }
}

export function isBigIntObject(value: unknown): value is BigInt {
  if (!isObjectLike(value)) {
    return false;
  }

  try {
    _bigIntValueOf.call(value);
    return true;
  } catch {
    return false;
  }
}

export function isPromise(value: unknown): value is Promise<unknown> {
  return (
    isObjectLike(value) &&
    value[Symbol.toStringTag] === "Promise"
  );
}

export function isProxy(
  value: unknown,
): value is Record<string | number | symbol, unknown> {
  return core.isProxy(value);
}

export function isRegExp(value: unknown): value is RegExp {
  return (
    isObjectLike(value) &&
    value[Symbol.toStringTag] === undefined &&
    _toString.call(value) === "[object RegExp]"
  );
}

export function isSet(value: unknown): value is Set<unknown> {
  try {
    _getSetSize.call(value);
    return true;
  } catch {
    return false;
  }
}

export function isSetIterator(
  value: unknown,
): value is IterableIterator<unknown> {
  return (
    isObjectLike(value) &&
    value[Symbol.toStringTag] === "Set Iterator"
  );
}

export function isSharedArrayBuffer(
  value: unknown,
): value is SharedArrayBuffer {
  // SharedArrayBuffer is not available on this runtime
  if (_getSharedArrayBufferByteLength === undefined) {
    return false;
  }

  try {
    _getSharedArrayBufferByteLength.call(value);
    return true;
  } catch {
    return false;
  }
}

// deno-lint-ignore ban-types
export function isStringObject(value: unknown): value is String {
  if (!isObjectLike(value)) {
    return false;
  }

  try {
    _stringValueOf.call(value);
    return true;
  } catch {
    return false;
  }
}

// deno-lint-ignore ban-types
export function isSymbolObject(value: unknown): value is Symbol {
  if (!isObjectLike(value)) {
    return false;
  }

  try {
    _symbolValueOf.call(value);
    return true;
  } catch {
    return false;
  }
}

export function isWeakMap(
  value: unknown,
): value is WeakMap<Record<string | number | symbol, unknown>, unknown> {
  try {
    // deno-lint-ignore no-explicit-any
    _weakMapHas.call(value, null as any);
    return true;
  } catch {
    return false;
  }
}

export function isWeakSet(
  value: unknown,
): value is WeakSet<Record<string | number | symbol, unknown>> {
  try {
    // deno-lint-ignore no-explicit-any
    _weakSetHas.call(value, null as any);
    return true;
  } catch {
    return false;
  }
}

export default {
  isAsyncFunction,
  isGeneratorFunction,
  isAnyArrayBuffer,
  isArrayBuffer,
  isArgumentsObject,
  isBoxedPrimitive,
  isDataView,
  // isExternal,
  isMap,
  isMapIterator,
  isModuleNamespaceObject,
  isNativeError,
  isPromise,
  isSet,
  isSetIterator,
  isWeakMap,
  isWeakSet,
  isRegExp,
  isDate,
  isStringObject,
  isNumberObject,
  isBooleanObject,
  isBigIntObject,
};
